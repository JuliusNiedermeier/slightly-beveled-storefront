import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { SuccessfulPayment as SuccessfulPaymentComponent } from "~/components/sections/SuccessfulPayment/SuccessfulPayment";

export default function SuccessfulPayment() {
  const t = useTranslations("page");

  return <SuccessfulPaymentComponent />;
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const messages = require(`~/language/${locale}.json`);

  return {
    props: {
      messages: { ...messages["successful-payment"], ...messages.global },
    },
  };
};
