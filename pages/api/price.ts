import { NextApiHandler } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2022-11-15",
});

const priceId = process.env.STRIPE_PRICE;
const couponId = process.env.STRIPE_COUPON;

if (!priceId) {
  throw new Error("Env variable STRIPE_PRICE is undefined");
}

if (!couponId) {
  throw new Error("Env variable STRIPE_COUPON is undefined");
}

const handler: NextApiHandler = async (req, res) => {
  const quantity = parseInt((req.query.quantity as string) || "1");

  const price = await stripe.prices.retrieve(priceId);

  let coupon: Stripe.Coupon | null = null;
  if (quantity > 1) coupon = await stripe.coupons.retrieve(couponId);

  if (!price.unit_amount) {
    res.status(400).send(new Error("The requested price has no amount"));
  } else {
    const amount = price.unit_amount * quantity;
    const percentOff = coupon?.percent_off || 0;
    const amountOff = (amount / 100) * percentOff;
    res.send(amount - amountOff);
  }
};

export default handler;
