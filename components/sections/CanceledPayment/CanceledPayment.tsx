import {
  BanknotesIcon,
  CheckIcon,
  ClockIcon,
  CreditCardIcon,
  FaceFrownIcon,
  HandThumbDownIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Container } from "~/components/layout/Container/Container";
import { Spinner } from "~/components/shared/Spinner/Spinner";
import { Typography } from "~/components/shared/Typography/Typography";
import styles from "./CanceledPayment.module.css";

export const CanceledPayment = () => {
  const t = useTranslations("page");

  const options = [
    {
      label: t("feedback.too-expensive"),
      icon: <BanknotesIcon width="1.5rem" />,
    },
    {
      label: t("feedback.missing-payment-method"),
      icon: <CreditCardIcon width="1.5rem" />,
    },
    {
      label: t("feedback.error"),
      icon: <XCircleIcon width="1.5rem" />,
    },
    {
      label: t("feedback.later"),
      icon: <ClockIcon width="1.5rem" />,
    },
    {
      label: t("feedback.dislike"),
      icon: <HandThumbDownIcon width="1.5rem" />,
    },
  ];

  const addToClipboard = () => {
    if (!window.isSecureContext) return;
    navigator.clipboard.writeText("slightly-beveled.com/?r=fh35xgs5");
  };

  const [selected, setSelected] = useState<null | number>(null);

  const [submissionState, setSubmissionState] = useState<
    "pending" | "submitting" | "submitted"
  >("pending");

  useEffect(() => {
    if (selected === null) return;

    setSubmissionState("submitting");
    setTimeout(() => setSubmissionState("submitted"), 1000);
  }, [selected]);

  return (
    <Container className={styles.container}>
      <div className={styles["success-note"]}>
        <div style={{ marginBottom: "1rem" }}>
          <FaceFrownIcon width="3rem" />
        </div>
        <Typography type="heading-sm">{t("heading")}</Typography>
        <div style={{ marginTop: "1rem" }}>
          <Typography type="generic-bold">{t("subheading")}</Typography>
        </div>
        <Typography type="generic">{t("body")}</Typography>
      </div>
      <div className={styles["feedback"]}>
        {options.map((option, index) => (
          <div
            key={index}
            className={`${styles["feedback-option"]} ${
              selected === index && styles["feedback-option--selected"]
            }`}
            onClick={() => setSelected(index)}
          >
            {option.icon}
            <Typography contrast={selected === index} type="generic-bold">
              {index === selected && submissionState === "submitted"
                ? "Danke für deine Feedback!"
                : option.label}
            </Typography>
            <div className={styles["feedback-option__status"]}>
              {index === selected && submissionState === "submitting" && (
                <Spinner appearence={"light"} />
              )}
              {index === selected && submissionState === "submitted" && (
                <CheckIcon width="1.5rem" />
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
