import Image from "next/image";

import tech1 from "public/me/page7/tech_img_01+txt.png";
import tech2 from "public/me/page7/tech_img_02+txt.png";
import tech3 from "public/me/page7/tech_img_03+txt.png";
import tech4 from "public/me/page7/tech_img_04+txt.png";

function Page7() {
  return (
    <section id="me__page7">
      <article className="me__page7__header">
        <div className="me__page7__header__text">
          <p>프락셔널 레이저</p>
          <h1>퓨라셀의 기술</h1>
          <div className="me__page7__header__bg"></div>
        </div>
      </article>
      <aritcle className="me__page7__image">
        <div className="me__page7__header__img"></div>
      </aritcle>
      <aritcle className="me__page7__cont">
        <div className="me__page7__cont__header">
          <h1>프락셔널 레이저 원리</h1>
        </div>
        <div className="me__page7__cont__desc">
          <div className="me__page7__cont__desc__header">
            <div className="number">
              <p>STEP</p>
              <p>1</p>
            </div>
            <div className="title">
              <p>
                레이저 조사<em>2940mm Er.YAG</em>
              </p>
            </div>
          </div>
          <div className="me__page7__cont__desc__text">
            <div className="image">
              <Image src={tech1} />
            </div>
            <div className="desc">
              <h2>레이저 빔이 Array Lens를 통과합니다.</h2>
              <p>
                퓨라셀은 2940nm 파장 대의 Er:Yag 레이저를
                <br /> 사용합니다.
              </p>
            </div>
          </div>
          <div className="me__page7__cont__desc__header">
            <div className="number">
              <p>STEP</p>
              <p>2</p>
            </div>
            <div className="title">
              <p>
                채널 생성<em>Micro hole</em>
              </p>
            </div>
          </div>
          <div className="me__page7__cont__desc__text">
            <div className="image">
              <Image src={tech2} />
            </div>
            <div className="desc">
              <h2>
                피부에 약 100개의 미세한 구멍(마이크로 홀)을
                <br /> 생성합니다.
              </h2>
              <p>
                이 때 생성되는 마이크로 홀은 피부의 약 0.2mm
                <br /> 이하의 표피 조직에 위치하게 됩니다.
              </p>
            </div>
          </div>
          <div className="me__page7__cont__desc__header">
            <div className="number">
              <p>STEP</p>
              <p>3</p>
            </div>
            <div className="title">
              <p>
                유효 성분 전달<em>Delivery</em>
              </p>
            </div>
          </div>
          <div className="me__page7__cont__desc__text">
            <div className="image">
              <Image src={tech3} />
            </div>
            <div className="desc">
              <h2>
                이 미세한 홀들을 통해 기능성 화장품 등의
                <br /> 영양 물질 흡수율을 높일 수 있습니다.
              </h2>
            </div>
          </div>
          <div className="me__page7__cont__desc__header">
            <div className="number">
              <p>STEP</p>
              <p>1</p>
            </div>
            <div className="title">
              <p>
                피부속 앰플 흡수<em>Absorption</em>
              </p>
            </div>
          </div>
          <div className="me__page7__cont__desc__text">
            <div className="image">
              <Image src={tech4} />
            </div>
            <div className="desc">
              <h2>
                Er:Yag는 표피의 수분에 대부분 흡수되는 성질을
                <br />
                갖고 있으며, 열손상이 적어 천공 깊이의 조절이
                <br />
                가능한 장점이 있습니다.
              </h2>
            </div>
          </div>
        </div>
      </aritcle>
    </section>
  );
}

export default Page7;
