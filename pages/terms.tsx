import { GetStaticPropsContext } from "next";
import { TermsOfService } from "~/components/sections/TermsOfService/TermsOfService";

export default function Terms() {
  return <TermsOfService />;
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const messages = require(`~/language/${locale}.json`);

  return {
    props: {
      messages: { ...messages.terms, ...messages.global },
    },
  };
};
