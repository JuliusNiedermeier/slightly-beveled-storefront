import { GetStaticPropsContext } from "next";
import { Cancellation as CancellationComponent } from "~/components/sections/Cancellation/Cancellation";

export default function Cancellation() {
  return <CancellationComponent />;
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const messages = require(`~/language/${locale}.json`);

  return {
    props: {
      messages: { ...messages.cancellation, ...messages.global },
    },
  };
};
