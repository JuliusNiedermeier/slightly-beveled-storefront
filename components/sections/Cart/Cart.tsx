import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "~/components/shared/Button/Button";
import { PaymentMethods } from "~/components/shared/PaymentMethods/PaymentMethods";
import { Typography } from "~/components/shared/Typography/Typography";
import styles from "./Cart.module.css";

const images = [
  "/sketches/ensemble-high.png",
  "/sketches/single.png",
  "/sketches/ensemble-compact.png",
  "/sketches/three-high.png",
  "/sketches/four.png",
  "/sketches/five.png",
];

export const Cart = (props: {
  onAdd: () => void;
  onRemove: () => void;
  amount: number;
  price: string;
  priceLoading: boolean;
  onCheckout: () => Promise<any>;
}) => {
  const t = useTranslations("Cart");

  const [loading, setLoading] = useState(false);
  const [showAccept, setShowAccept] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        <div className={styles["gallery__image"]}>
          <Image
            src={images[props.amount] || images[0]}
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className={styles.controlls}>
        <Button variant="text" label="-" onClick={props.onRemove} />
        <Typography type="heading-md">{props.amount}</Typography>
        <Button variant="text" label="+" onClick={props.onAdd} />
      </div>
      <div className={styles.price}>
        <div className={styles.subtotal}>
          <Typography type="generic">{t("subtotal")}</Typography>
          {props.priceLoading ? (
            <div className={styles["price-skeleton"]} />
          ) : (
            <Typography type="generic">{props.price}€</Typography>
          )}
        </div>
        <div className={styles.shipping}>
          <Typography type="generic">{t("shipping")}</Typography>
          <Typography type="generic-bold">{t("free")}</Typography>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.total}>
          <Typography type="generic-bold">{t("total")}</Typography>
          {props.priceLoading ? (
            <div className={styles["price-skeleton"]} />
          ) : (
            <Typography type="generic-bold">{props.price}€</Typography>
          )}
        </div>
      </div>
      <div className={styles.note}>
        <Typography type="generic-bold">{t("disclaimer.heading")}</Typography>
        <Typography type="generic">{t("disclaimer.body")}</Typography>
      </div>
      <div className={styles.pms}>
        <PaymentMethods />
      </div>
      <div className={styles.legal}>
        <Link href="/terms">
          <Typography type="generic">{t("terms")}</Typography>
        </Link>
        <Link href="cancellation">
          <Typography type="generic">{t("cancellation")}</Typography>
        </Link>
      </div>
      <div className={styles.cta}>
        {showAccept ? (
          <Button
            variant="dark"
            label={t("checkout")}
            sublabel={t("accept")}
            loading={loading}
            onClick={async () => {
              setLoading(true);
              await props.onCheckout();
              setLoading(false);
            }}
          />
        ) : (
          <Button
            variant="dark"
            label={t("continue")}
            onClick={() => setShowAccept(true)}
          />
        )}
      </div>
    </div>
  );
};
