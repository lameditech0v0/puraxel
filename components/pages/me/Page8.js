import Certifi1 from "public/me/page8/certifi_pura_01.webp";
import Certifi2 from "public/me/page8/certifi_pura_02.webp";
import Certifi3 from "public/me/page8/certifi_pura_03.webp";
import Certifi4 from "public/me/page8/certifi_lmdt_01.webp";
import Certifi5 from "public/me/page8/certifi_lmdt_02.webp";
import Certifi6 from "public/me/page8/certifi_lmdt_03.webp";
import Certifi7 from "public/me/page8/certifi_lmdt_04.webp";
import Certifi8 from "public/me/page8/certifi_lmdt_05.webp";

import { useEffect, useState } from "react";

import Image from "next/image";

function Page7() {
  return (
    <section id="me__page8">
      {/* header */}
      <article className="me__page8__header">
        <div className="me__page8__header__text">
          <p>인증 받은 레이저 기기로</p>
          <h1>마음까지 편한 관리!</h1>
          <div className="me__page8__header__bg"></div>
        </div>
      </article>
      {/* cont */}
      <article className="me__page8__conts">
        <div className="me__page8__cont1">
          <h1>PURAXEL Certifications</h1>
          <p>제품 인증</p>
          <div className="black"></div>
          <div className="me__page8__cont1__cont">
            <div className="me__page8__cont1__cont__img">
              <Image src={Certifi1} />
            </div>
          </div>
        </div>
        <div className="me__page8__cont2">
          <h1>Lameditech Certifications</h1>
          <p>기업 인증</p>
          <div className="black"></div>
          <div className="me__page8__cont2__cont">
            <div className="me__page8__cont2__cont__img">
              <Image src={Certifi4} />
            </div>
            <div className="me__page8__cont2__cont__img">
              <Image src={Certifi5} />
            </div>
          </div>
          <div className="me__page8__cont2__cont">
            <div className="me__page8__cont2__cont__img">
              <Image src={Certifi6} />
            </div>
            <div className="me__page8__cont3__cont__img">
              <Image src={Certifi7} />
            </div>
          </div>
          <div className="me__page8__cont2__cont">
            <div className="me__page8__cont3__cont__img">
              <Image src={Certifi8} />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Page7;
