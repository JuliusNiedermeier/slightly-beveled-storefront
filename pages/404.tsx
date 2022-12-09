import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Container } from "~/components/layout/Container/Container";
import { Button } from "~/components/shared/Button/Button";
import { Typography } from "~/components/shared/Typography/Typography";

export default function NotFound() {
  const t = useTranslations("page");

  return (
    <Container>
      <div
        style={{
          marginTop: "10rem",
          marginBottom: "10rem",
          display: "grid",
          gap: "2rem",
        }}
      >
        <Typography type="heading-md">404</Typography>
        <Typography type="generic-bold">{t("heading")}</Typography>
        <Link href="/">
          <Button label={t("home")} onClick={() => {}} variant="dark" />
        </Link>
      </div>
    </Container>
  );
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const messages = require(`~/language/${locale}.json`);

  return {
    props: {
      messages: { ...messages["not-found"], ...messages.global },
    },
  };
};
