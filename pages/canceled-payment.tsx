import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { CanceledPayment as CanceledPaymentComponent } from "~/components/sections/CanceledPayment/CanceledPayment";

export default function CanceledPayment() {
  const t = useTranslations("page");

  return <CanceledPaymentComponent />;
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const messages = require(`~/language/${locale}.json`);

  return {
    props: {
      messages: { ...messages["canceled-payment"], ...messages.global },
    },
  };
};
