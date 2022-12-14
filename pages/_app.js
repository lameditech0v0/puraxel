import * as React from "react";
import Head from "next/head";
import Script from "next/script";
import Layout from "components/layout/layout";
import * as gtag from "lib/gtag";
import "styles/globals.css";
import "styles/style.scss";
import "swiper/css/bundle";
import "swiper/scss";
import "swiper/scss/pagination";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // console.log(gtag.pageView(url));
      gtag.pageView(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const getStaticPaths = async () => {
    return {
      paths: ["/", "/me", "/fx5000", "/hair"],
      fallback: true,
    };
  };

  getStaticPaths();

  return (
    <Layout>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {/* <Script
        strategy="afterInteractive"
        src="http://wcs.naver.net/wcslog.js"
      /> */}
      <Script
        strategy="afterInteractive"
        src="https://wcs.naver.net/wcslog.js"
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if(!wcs_add) var wcs_add = {};
            wcs_add["wa"] = "cbebc90131a410";
            if(window.wcs) {
              wcs_do();
            }`,
        }}
        id="naver"
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
