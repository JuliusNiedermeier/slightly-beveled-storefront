import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Container } from "~/components/layout/Container/Container";
import { Typography } from "~/components/shared/Typography/Typography";

export default function LegalNotice() {
  const t = useTranslations("page");

  return (
    <Container>
      <div style={{ margin: "4rem 0" }}>
        <Typography type="heading-md">{t("heading")}</Typography>
        <div style={{ marginTop: "1rem" }}>
          <Typography type="generic-bold">{t("law")}</Typography>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <Typography type="generic-bold">{t("company")}</Typography>
        </div>
        <div>
          <Typography type="generic">{t("address")}</Typography>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <Typography type="generic-bold">{t("name-heading")}</Typography>
        </div>
        <Typography type="generic">{t("name")}</Typography>
        <div style={{ marginTop: "1rem" }}>
          <Typography type="generic-bold">{t("contact")}</Typography>
        </div>
        <div>
          <Typography type="generic">{t("phone")}</Typography>
        </div>
        <div>
          <Typography type="generic">{t("email")}</Typography>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <Typography type="generic">
            Plattform der EU-Kommission zur Online-Streitbeilegung:
          </Typography>
        </div>
        <div style={{ fontWeight: "700" }}>
          <Link target="_blank" href="https://ec.europa.eu/consumers/odr">
            https://ec.europa.eu/consumers/odr
          </Link>
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const messages = require(`~/language/${locale}.json`);

  return {
    props: {
      messages: { ...messages["legal-notice"], ...messages.global },
    },
  };
};
