import Banner from "components/pages/me/Banner";
import Page1 from "components/pages/me/Page1";
import Page2 from "components/pages/me/Page2";
import Page3 from "components/pages/me/Page3";
import Page4 from "components/pages/me/Page4";
import Page5 from "components/pages/me/Page5";
import Page6 from "components/pages/me/Page6";
import Page7 from "components/pages/me/Page7";
import Page8 from "components/pages/me/Page8";
import Head from "next/head";
import Image from "next/image";

export default function me() {
  return (
    <div>
      <Banner />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
    </div>
  );
}
