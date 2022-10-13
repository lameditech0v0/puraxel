import { useState } from "react";
import { fx5000Element } from "lib/mode";
import ModeSelector from "components/modeSelector/ModeSelector";

function Page3() {
  let [btnActive, setBtnActive] = useState("laser");

  const [modeSelector, setModeSelector] = useState("laser");

  const laserActive = (e) => {
    setBtnActive("laser");
  };

  const galvanicActive = (e) => {
    setBtnActive("galvanic");
  };

  return (
    <section id="me__page3">
      <article className="me__page3__header">
        <p className="me__page3__header__p">FX-5000은 전문가용 기기로서</p>
        <h1>다섯가지 기능을 제공합니다.</h1>
      </article>
      <article
        className="me__page3__btn"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
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
          <article className="me__page3__cont">
            <div className="me__page3__cont__1"></div>
          </article>
          <article className="me__page3__cont2">
            <div className="me__page3__cont__img"></div>
          </article>
        </>
      ) : (
        <>
          <article className="me__page3__cont__gal">
            <div className="me__page3__cont__1__gal"></div>
          </article>
          <article className="me__page3__cont2__gal">
            <div className="me__page3__cont__img__gal"></div>
          </article>
        </>
      )}
    </section>
  );
}

export default Page3;
