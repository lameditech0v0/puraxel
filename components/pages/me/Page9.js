import Image from "next/image";

import Product from "public/me/page9/img_me_01.png";
import Select1 from "public/me/page9/me_01_active.png";
import Select2 from "public/me/page9/me_02_active.png";
import Select3 from "public/me/page9/me_03_active.png";
import Select4 from "public/me/page9/me_04_active.png";

function Page9() {
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
              <p>퓨라셀 me</p>
            </div>
            <div className="me__page9__cont__desc__li">
              <div className="black"></div>
              <h1>레이저 파장</h1>
              <p>
                2940nm<em>(±1%)</em>
              </p>
            </div>
            <div className="me__page9__cont__desc__li">
              <div className="black"></div>
              <h1>레이저 레벨 범위</h1>
              <p>1~2 level</p>
            </div>
            <div className="me__page9__cont__desc__li">
              <div className="black"></div>
              <h1>레이저 종류</h1>
              <p>Er:YAG</p>
            </div>
            <div className="me__page9__cont__desc__li">
              <div className="black"></div>
              <h1>레이저 출력 범위</h1>
              <p>
                80~140mJ<em>(±20)</em>
              </p>
            </div>
            <div className="me__page9__cont__desc__li">
              <div className="black"></div>
              <h1>레이저 반복</h1>
              <p>3~5 seconds interval</p>
            </div>
          </div>

          <div className="me__page9__cont__desc">
            <div className="me__page9__cont__desc__li">
              <div className="black"></div>
              <h1>기능모드</h1>
              <p>
                1) Fractional Laser
                <br />
                2) Galvanic
              </p>
            </div>
            <div className="me__page9__cont__desc__li">
              <div className="black"></div>
              <h1>제품무게</h1>
              <p>
                350g<em>(Main body)</em>
                <br />
                Cradle: 110g<em>(Cradle)</em>
              </p>
            </div>
            <div className="me__page9__cont__desc__li">
              <div className="black"></div>
              <h1>제품사이즈</h1>
              <p>
                50x57x220mm<em>(Main body)</em>
                <br />
                98x98x85mm<em>(Cradle)</em>
              </p>
            </div>
            <div className="me__page9__cont__desc__li">
              <div className="black"></div>
              <h1>배터리 사양</h1>
              <p>
                Built-in Rechargeable
                <br />
                11.1V 850mAh
                <br />
                Lithium-Polymer Battery
                <br />
              </p>
            </div>
          </div>

          <div className="me__page9__cont__images">
            <Image src={Product} />
          </div>

          <div className="me__page9__cont__select">
            <div className="me__page9__cont__select__btn">
              <Image src={Select1} />
            </div>
            <div className="me__page9__cont__select__btn">
              <Image src={Select2} />
            </div>
            <div className="me__page9__cont__select__btn">
              <Image src={Select3} />
            </div>
            <div className="me__page9__cont__select__btn">
              <Image src={Select4} />
            </div>
          </div>
        </article>
      </article>
    </section>
  );
}

export default Page9;
