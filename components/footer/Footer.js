import Image from "next/image";
import logoLameditech from "public/footer/footer-logo-lameditech.webp";
import _ from "./footer.module.css";

export default function Footer() {
  return (
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
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Youtube</li>
        </ul>
      </section>
    </footer>
  );
}
