import Image from "next/image";
import logoLameditech from "public/footer/footer-logo-lameditech.webp";
import insta from "public/footer/insta.png";
import facebook from "public/footer/facebook.png";
import youtube from "public/footer/youtube.png";
import _ from "./footer.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

// 768px 푸터
const Footer2 = () => {
  return (
    <footer id="footer" className={_.footer__container}>
      <section className={_.footer__company__sns__container}>
        <h1>SNS 바로가기</h1>
        <ul className={_.footer__company__sns}>
          <li>
            <div>
              <Image src={insta} alt="instagram" />
            </div>

            <Link href="https://www.instagram.com/puraxel/">
              <a target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </Link>
          </li>
          <li>
            <div>
              <Image src={facebook} alt="facebook" />
            </div>
            <Link href="https://www.facebook.com/Puraxel.official/">
              <a target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </Link>
          </li>
          <li>
            <div>
              <Image src={youtube} alt="youtube" />
            </div>
            <Link href="https://www.youtube.com/channel/UC7X6D4v-G-b7NmNeU2j-jwQ">
              <a target="_blank" rel="noopener noreferrer">
                Youtube
              </a>
            </Link>
          </li>
        </ul>
      </section>
      <section className={_.footer__company__info__container}>
        <div className={_.footer__company__info__container__header}>
          <Image src={logoLameditech} alt="lameditech logo" />
          <h1 className={_.footer__company__title}>주식회사 라메디텍</h1>
        </div>

        <div className={_.footer__company__text__info__container}>
          <p className={_.footer__company__content}>
            서울특별시 금천구 벚꽃로 234, 10층 1002호 (가산동,
            에이스하이엔드타워 6차)
            <br />
            대표자 : 최종석 | 사업자번호 : 119-86-51786
            <br />
            Tel : 02-852-7980 | Fax : 02-852-7983
            <br />
            e-mail : sales@lameditech.com
          </p>
          <p className={_.footer__company__copyright}>
            COPYRIGHT © LAMEDITECH. ALL RIGHT RESERVED.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default function Footer() {
  const [resize, setResize] = useState();

  const handleResize = () => {
    setResize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  });

  return (
    <>
      {resize <= 768 ? (
        <Footer2 />
      ) : (
        <footer id="footer" className={_.footer__container}>
          <section className={_.footer__company__info__container}>
            <Image src={logoLameditech} alt="lameditech logo" />

            <div className={_.footer__company__text__info__container}>
              <h1 className={_.footer__company__title}>주식회사 라메디텍</h1>
              <p className={_.footer__company__content}>
                서울특별시 금천구 벚꽃로 234, 10층 1002호 (가산동,
                에이스하이엔드타워 6차)
                <br />
                대표자 : 최종석 | 사업자번호 : 119-86-51786
                <br />
                Tel : 02-852-7980 | Fax : 02-852-7983
                <br />
                e-mail : sales@lameditech.com
              </p>
              <p className={_.footer__company__copyright}>
                COPYRIGHT © LAMEDITECH. ALL RIGHT RESERVED.
              </p>
            </div>
          </section>

          <section className={_.footer__company__sns__container}>
            <ul className={_.footer__company__sns}>
              <li>
                <Link href="https://www.instagram.com/puraxel/">
                  <a target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/Puraxel.official/">
                  <a target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/channel/UC7X6D4v-G-b7NmNeU2j-jwQ">
                  <a target="_blank" rel="noopener noreferrer">
                    Youtube
                  </a>
                </Link>
              </li>
            </ul>
          </section>
        </footer>
      )}
    </>
  );
}
