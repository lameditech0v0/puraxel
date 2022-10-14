import { useState } from "react";
import Image from "next/image";

import Product1 from "public/fx5000/page9/img_fx-5000_01.webp";
import Product2 from "public/fx5000/page9/img_fx-5000_02.webp";
import Product3 from "public/fx5000/page9/img_fx-5000_03.webp";
import Product4 from "public/fx5000/page9/img_fx-5000_04.webp";

import Select1 from "public/fx5000/page9/hair_01_active.webp";
import Select2 from "public/fx5000/page9/hair_02_active.webp";
import Select3 from "public/fx5000/page9/hair_03_active.webp";
import Select4 from "public/fx5000/page9/hair_04_active.webp";

function Page9() {
  const [buttonSelector, setButtonSelector] = useState("first");

  const selector = {
    onFirst: () => {
      setButtonSelector("first");
    },
    onSecond: () => {
      setButtonSelector("second");
    },
    onThird: () => {
      setButtonSelector("third");
    },
    onForth: () => {
      setButtonSelector("forth");
    },
  };

  function Product() {
    if (buttonSelector === "first") {
      return <Image src={Product1} />;
    } else if (buttonSelector === "second") {
      return <Image src={Product2} />;
    } else if (buttonSelector === "third") {
      return <Image src={Product3} />;
    } else {
      return <Image src={Product4} />;
    }
  }

  return (
    <section id="me__page9">
      <article className="me__page9__header">
        <div className="me__page9__header__text">
          <h1>제품 구성 및 사양</h1>
          <div className="me__page9__header__bg"></div>
        </div>
        <article className="me__page9__cont">
          <div className="me__page9__cont__desc">
            <div className="me__page9__cont__desc__li">
              <div className="black"></div>
              <h1>제품명</h1>
              <p>퓨라셀 fx-5000</p>
            </div>
            <div className="me__page9__cont__desc__li">
              <div className="black"></div>
              <h1>레이저 종류</h1>
              <p>Er:YAG</p>
            </div>
            <div className="me__page9__cont__desc__li">
              <div className="black"></div>
              <h1>레이저 등급</h1>
              <p>1등급(class 1)</p>
            </div>
            <div className="me__page9__cont__desc__li">
              <div className="black"></div>
              <h1>레이저 레벨 범위</h1>
              <p>1~3 levelEr:YAG</p>
            </div>
            <div className="me__page9__cont__desc__li">
              <div className="black"></div>
              <h1>기능 모드</h1>
              <p>
                1) 레이저 모드 <br />
                2) 초음파 모드
                <br />
                3) 갈바닉 모드 (옵션)
                <br /> 4) 쿨링 모드 (옵션)
                <br /> 5) LED 모드 (옵션)
              </p>
            </div>
          </div>

          <div className="me__page9__cont__desc">
            <div className="me__page9__cont__desc__li">
              <div className="black"></div>
              <h1>제품 무게</h1>
              <p>
                616g<em>(Main body)</em>
                <br />
                503g<em>(Cradle, 배터리 포함)</em>
              </p>
            </div>
            <div className="me__page9__cont__desc__li">
              <div className="black"></div>
              <h1>제품사이즈</h1>
              <p>
                82x201x225.3mm<em>(Main body)</em>
                <br />
                250x169x135mm<em>(Cradle)</em>
              </p>
            </div>
            <div className="me__page9__cont__desc__li">
              <div className="black"></div>
              <h1>배터리 사양</h1>
              <p>
                11.1V 1,300mAh
                <br />
                Lithium-Polymer Battery
                <br />
                충전 어댑터: 14VDC / 1.71A
                <br />
              </p>
            </div>
            <div className="me__page9__cont__desc__li">
              <div className="black"></div>
              <h1>구성품</h1>
              <p>
                제품 본체, 충전 크래들, 어댑터,
                <br />
                보안경(시술자용, 고객용),
                <br />
                레이저 헤드팁(원형, 일자, 네모), 초음파 헤드, 배터리(충전용) *2,
                사용 설명서, 퀵 가이드
              </p>
            </div>
          </div>

          <div className="me__page9__cont__images">{Product()}</div>

          <div className="me__page9__cont__select">
            <div
              className={`me__page9__cont__select__btn ${
                buttonSelector === "first" ? "active" : ""
              }`}
              onClick={selector.onFirst}
            >
              <Image src={Select1} />
            </div>
            <div
              className={`me__page9__cont__select__btn ${
                buttonSelector === "second" ? "active" : ""
              }`}
              onClick={selector.onSecond}
            >
              <Image src={Select2} />
            </div>
            <div
              className={`me__page9__cont__select__btn ${
                buttonSelector === "third" ? "active" : ""
              }`}
              onClick={selector.onThird}
            >
              <Image src={Select3} />
            </div>
            <div
              className={`me__page9__cont__select__btn ${
                buttonSelector === "forth" ? "active" : ""
              }`}
              onClick={selector.onForth}
            >
              <Image src={Select4} />
            </div>
          </div>
        </article>
      </article>
    </section>
  );
}

export default Page9;
