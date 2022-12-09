import { ClipboardIcon, EnvelopeOpenIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import { Container } from "~/components/layout/Container/Container";
import { Typography } from "~/components/shared/Typography/Typography";
import styles from "./SuccessfulPayment.module.css";

export const SuccessfulPayment = () => {
  const t = useTranslations("page");

  const addToClipboard = () => {
    if (!window.isSecureContext) return;
    navigator.clipboard.writeText("slightly-beveled.com/?r=fh35xgs5");
  };

  return (
    <Container className={styles.container}>
      <div className={styles["success-note"]}>
        <div style={{ marginBottom: "1rem" }}>
          <EnvelopeOpenIcon width="3rem" />
        </div>
        <Typography type="heading-sm">{t("heading")}</Typography>
        <div style={{ marginTop: "1rem" }}>
          <Typography type="generic-bold">{t("subheading")}</Typography>
        </div>
        <Typography type="generic">{t("body")}</Typography>
      </div>
      <div className={styles["referral-info"]}>
        <Typography contrast type="generic-bold">
          {t("refer")}
        </Typography>
        <Typography contrast type="heading-md">
          100%
        </Typography>
        <div className={styles.link} onClick={addToClipboard}>
          <Typography contrast type="generic">
            Coming soon...
          </Typography>
          <ClipboardIcon
            width="1.5rem"
            style={{ color: "white", flexShrink: 0 }}
          />
        </div>
      </div>
    </Container>
  );
};
