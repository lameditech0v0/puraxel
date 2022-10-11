import Banner from "components/pages/main/Banner";
import Page1 from "components/pages/main/Page1";
import Page2 from "components/pages/main/Page2";
import Page3 from "components/pages/main/Page3";
import Page4 from "components/pages/main/Page4";
import Page5 from "components/pages/main/Page5";
import Page6 from "components/pages/main/Page6";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
    </div>
  );
}
