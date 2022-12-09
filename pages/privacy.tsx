import { GetStaticPropsContext } from "next";
import { PrivacyPolicy } from "~/components/sections/PrivacyPolicy/PrivacyPolicy";

export default function Privacy() {
  return <PrivacyPolicy />;
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const messages = require(`~/language/${locale}.json`);

  return {
    props: {
      messages: { ...messages.privacy, ...messages.global },
    },
  };
};
