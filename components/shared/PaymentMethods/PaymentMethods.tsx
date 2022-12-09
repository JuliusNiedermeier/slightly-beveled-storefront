import Image from "next/image";
import styles from "./PaymentMethods.module.css";

const pms = [
  { name: "Visa", img: "/payment-methods/visa.svg" },
  { name: "Visa", img: "/payment-methods/mastercard.svg" },
  { name: "Visa", img: "/payment-methods/amex.svg" },
  { name: "Visa", img: "/payment-methods/paypal.svg" },
  { name: "Visa", img: "/payment-methods/applepay.svg" },
  { name: "Visa", img: "/payment-methods/klarna.svg" },
];

export const PaymentMethods = () => {
  return (
    <div className={styles.container}>
      {pms.map((pm) => (
        <div className={styles.pm}>
          <Image
            src={pm.img}
            alt={pm.name}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      ))}
    </div>
  );
};
