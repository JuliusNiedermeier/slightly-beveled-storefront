import { getStripe } from "./getStripe";
import { RedirectToCheckoutClientOptions } from "@stripe/stripe-js";

type LineItems = RedirectToCheckoutClientOptions["lineItems"];

const stripePromise = getStripe();

export const checkout = async (lineItems: LineItems) => {
  const stripe = await stripePromise;

  if (!stripe) throw new Error("Failed to create stripe instance");

  return stripe.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}/success?id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });
};
