import styles from "./Order.module.css";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Cart } from "../Cart/Cart";
import {
  PaymentIntentRequestBody,
  PaymentIntentResponseBody,
} from "~/pages/api/checkout-session";
import { useLayout } from "~/components/layout/Layout/Layout";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

export const Order = () => {
  const { cartQuantity, updateCartQuantity, cartPrice, cartPriceLoading } =
    useLayout();

  const { locale } = useRouter();

  const getCheckoutSession = async () => {
    const response = await fetch("/api/checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: cartQuantity,
        locale,
      } as PaymentIntentRequestBody),
    });
    const { checkoutSessionId } =
      (await response.json()) as PaymentIntentResponseBody;
    return checkoutSessionId;
  };

  const redirectToCheckout = async () => {
    const session = await getCheckoutSession();
    const stripe = await stripePromise;
    return stripe?.redirectToCheckout({ sessionId: session });
  };

  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        <Cart
          onAdd={() => updateCartQuantity(cartQuantity + 1)}
          onRemove={() => updateCartQuantity(cartQuantity - 1)}
          amount={cartQuantity}
          price={cartPrice}
          onCheckout={redirectToCheckout}
          priceLoading={cartPriceLoading}
        />
      </div>
    </div>
  );
};
