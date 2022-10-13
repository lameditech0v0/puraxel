import ModeSelector from "components/modeSelector/ModeSelector";
import { useState } from "react";
import { fx5000Element } from "lib/mode";

function Page3() {
  let [btnActive, setBtnActive] = useState("laser");

  const laserActive = (e) => {
    setBtnActive("laser");
  };

  const galvanicActive = (e) => {
    setBtnActive("galvanic");
  };

  return (
    <section id="fx5000__page3">
      <article className="fx5000__page3__header">
        <p className="fx5000__page3__header__p">FX-5000은 전문가용 기기로서</p>
        <h1>다섯가지 기능을 제공합니다.</h1>
        <p>
          레이저 조사 후, 초음파, 갈바닉, 쿨링 등의 모드를 함께 사용하시면
          효과를 높일 수 있습니다.
        </p>
      </article>

      <article className="fx5000__page3__btn">
        {fx5000Element.map((x, y) => (
          <ModeSelector
            key={y}
            numbering={x.num}
            title={x.title}
            image={x.img}
          />
        ))}
      </article>

      {btnActive === "laser" ? (
        <>
          <article className="fx5000__page3__cont">
            <div className="fx5000__page3__cont__1"></div>
          </article>
          <article className="fx5000__page3__cont2">
            <div className="fx5000__page3__cont__img"></div>
          </article>
        </>
      ) : (
        <>
          <article className="fx5000__page3__cont__gal">
            <div className="fx5000__page3__cont__1__gal"></div>
          </article>
          <article className="fx5000__page3__cont2__gal">
            <div className="fx5000__page3__cont__img__gal"></div>
          </article>
        </>
      )}
    </section>
  );
}

export default Page3;
