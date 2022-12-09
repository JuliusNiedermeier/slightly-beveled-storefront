import type { AppProps } from "next/app";
import { Layout } from "~/components/layout/Layout/Layout";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { CookieConsent } from "~/components/layout/CookieConsent/CookieConsent";
import { NextIntlProvider } from "next-intl";

import "~/assets/css/font-faces.css";
import "~/assets/css/variables.css";
import "~/assets/css/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Layout>
        <CookieConsent />
        <GoogleAnalytics />
        <Component {...pageProps} />
      </Layout>
    </NextIntlProvider>
  );
}
