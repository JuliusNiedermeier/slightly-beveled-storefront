import classNames from "classnames";
import { useTranslations } from "next-intl";
import { Typography } from "~/components/shared/Typography/Typography";
import { useLayout } from "../Layout/Layout";
import styles from "./CookieConsent.module.css";

export const CookieConsent = () => {
  const t = useTranslations("CookieConsent");

  const { cookieConsent, updateCookieConsent } = useLayout();

  const handleAccept = () => {
    updateCookieConsent("accepted");
  };

  const handleDecline = () => {
    updateCookieConsent("decliend");
  };

  const containerClasses = classNames(styles.container, {
    [styles.hidden]: cookieConsent !== "pending",
  });

  return (
    <div className={containerClasses}>
      <div className={styles.content}>
        <Typography type="generic-bold" contrast>
          {t("heading")}
        </Typography>
        <div className={styles.description}>
          <Typography type="generic" contrast>
            {t("info")}
          </Typography>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.decline} onClick={handleDecline}>
          <Typography type="generic" contrast>
            {t("decline")}
          </Typography>
        </button>
        <button className={styles.accept} onClick={handleAccept}>
          <Typography type="generic-bold" contrast>
            {t("accept")}
          </Typography>
        </button>
      </div>
    </div>
  );
};
