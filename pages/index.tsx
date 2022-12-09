import Head from "next/head";
import { InfoSection } from "~/components/sections/InfoSection/InfoSection";
import { ScrollGallery } from "~/components/sections/IntroSection/IntroSection";
import { PriceTag } from "~/components/sections/PriceTag/PriceTag";
import { GetStaticPropsContext } from "next";
import { CombinationGallery } from "~/components/sections/CombinationGallery/CombinationGallery";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Slightly Beveled</title>
        <meta name="description" content="Elements Collection" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ScrollGallery />
      <CombinationGallery />
      <InfoSection />
      <PriceTag />
    </div>
  );
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const messages = require(`~/language/${locale}.json`);

  return {
    props: {
      messages: { ...messages.index, ...messages.global },
    },
  };
};
