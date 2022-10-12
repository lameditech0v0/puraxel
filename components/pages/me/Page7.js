import Certifi1 from "public/me/page7/certifi_pura_01.png";
import Certifi2 from "public/me/page7/certifi_pura_02.png";
import Certifi3 from "public/me/page7/certifi_pura_03.png";
import Certifi4 from "public/me/page7/certifi_lmdt_01.png";
import Certifi5 from "public/me/page7/certifi_lmdt_02.png";
import Certifi6 from "public/me/page7/certifi_lmdt_03.png";
import Certifi7 from "public/me/page7/certifi_lmdt_04.png";
import Certifi8 from "public/me/page7/certifi_lmdt_05.png";

import Image from "next/image";

function Page7() {
  return (
    <section id="me__page7">
      {/* header */}
      <article className="me__page7__header">
        <div className="me__page7__header__text">
          <p>인증 받은 레이저 기기로</p>
          <h1>마음까지 편한 관리!</h1>
          <div className="me__page7__header__bg"></div>
        </div>
      </article>
      {/* cont */}
      <article className="me__page7__conts">
        <div className="me__page7__cont1">
          <h1>PURAXEL Certifications</h1>
          <p>제품 인증</p>
          <div className="black"></div>
          <div className="me__page7__cont1__cont">
            <div className="me__page7__cont1__cont__img">
              <Image src={Certifi1} />
            </div>
            <div className="me__page7__cont1__cont__img">
              <Image src={Certifi2} />
            </div>
            <div className="me__page7__cont1__cont__img">
              <Image src={Certifi3} />
              <p>IEC60825인증(Class 1)</p>
            </div>
          </div>
        </div>
        <div className="me__page7__cont2">
          <h1>Lameditech Certifications</h1>
          <p>기업 인증</p>
          <div className="black"></div>
          <div className="me__page7__cont2__cont">
            <div className="me__page7__cont2__cont__img">
              <Image src={Certifi4} />
            </div>
            <div className="me__page7__cont2__cont__img">
              <Image src={Certifi5} />
            </div>
            <div className="me__page7__cont2__cont__img">
              <Image src={Certifi6} />
            </div>
          </div>
          <div className="me__page7__cont3__cont">
            <div className="me__page7__cont3__cont__img">
              <Image src={Certifi7} />
            </div>
            <div className="me__page7__cont3__cont__img">
              <Image src={Certifi8} />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Page7;
