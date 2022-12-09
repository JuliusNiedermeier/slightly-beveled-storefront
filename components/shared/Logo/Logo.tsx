import Link from "next/link";
import { Typography } from "~/components/shared/Typography/Typography";
import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <Link href="/">
      <div className={styles.container}>
        <svg
          width="10"
          height="86"
          viewBox="0 0 10 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.32637 0.5L9.5 23.1131V62.8869L2.32637 85.5H0.5V0.5H2.32637Z"
            stroke="black"
          />
        </svg>

        <Typography type="generic-bold">slightly beveled</Typography>
      </div>
    </Link>
  );
};
