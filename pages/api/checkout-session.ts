import { NextApiHandler } from "next";
import Stripe from "stripe";

export type PaymentIntentRequestBody = {
  quantity: number;
  locale: Stripe.Checkout.SessionCreateParams.Locale;
};

export type PaymentIntentResponseBody = {
  checkoutSessionId: string;
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2022-11-15",
});

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const success_url = `${
      req.headers.origin
    }/successful-payment?pi=${Date.now()}`;

    const cancel_url = `${
      req.headers.origin
    }/canceled-payment?pi=${Date.now()}`;

    try {
      const { quantity, locale } = req.body as PaymentIntentRequestBody;
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: process.env.STRIPE_PRICE,
            quantity,
          },
        ],
        locale,
        shipping_address_collection: { allowed_countries: ["DE"] },
        shipping_options: [{ shipping_rate: "shr_1MCnOiDXarA9K4d2FkhIyXLc" }],
        discounts: quantity > 1 ? [{ coupon: process.env.STRIPE_COUPON }] : [],
        mode: "payment",
        success_url,
        cancel_url,
      });
      res.json({ checkoutSessionId: session.id } as PaymentIntentResponseBody);
    } catch (err: any) {
      console.log(err);
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
