import { Container } from "~/components/layout/Container/Container";
import styles from "./Footer.module.css";
import { Logo } from "~/components/shared/Logo/Logo";
import Link from "next/link";
import { LayoutConsumer } from "../Layout/Layout";
import { Pricing } from "~/components/sections/Pricing/Pricing";
import { useTranslations } from "next-intl";
import { PaymentMethods } from "~/components/shared/PaymentMethods/PaymentMethods";
import { Typography } from "~/components/shared/Typography/Typography";

export const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <>
      <Pricing />
      <footer className={styles.container}>
        <Container>
          <div className={styles.footer}>
            <div className={styles.newsletter}>
              <div className={styles.logo}>
                <Logo />
              </div>
              <PaymentMethods />
            </div>
            <div className={styles.legal}>
              <Link href="/privacy">{t("legal.privacy")}</Link>
              <Link href="/terms">{t("legal.terms")}</Link>
              <Link href="/cancellation">{t("legal.cancellation")}</Link>
              <Link href="/legal-notice">{t("legal.legal-notice")}</Link>
              <Link href="mailto:info@slightly-beveled.com">
                {t("legal.contact")}
              </Link>
              <LayoutConsumer>
                {({ updateCookieConsent }) => (
                  <span onClick={() => updateCookieConsent("pending")}>
                    {t("legal.cookies")}
                  </span>
                )}
              </LayoutConsumer>
            </div>
            <div className={styles.social}>
              <Link
                target="_blank"
                href="https://instagram.com/slightlybeveled"
              >
                {t("social.instagram")}
              </Link>
              {/* <Link href="/privacy">{t("social.facebook")}</Link>
              <Link href="/privacy">{t("social.tiktok")}</Link> */}
            </div>
          </div>
          <div></div>
        </Container>
        <div className={styles.copyright}>
          <Container>
            <Typography type="generic" contrast>
              © All rights reserved | 2022 - now
            </Typography>
          </Container>
        </div>
      </footer>
    </>
  );
};
