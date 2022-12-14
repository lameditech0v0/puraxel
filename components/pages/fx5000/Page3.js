import ModeSelector from "components/modeSelector/ModeSelector";
import { useState } from "react";
import { fx5000Element } from "lib/mode";

const Laser = () => {
  return (
    <>
      <article className="fx5000__page3__cont">
        <div className="fx5000__page3__cont__1"></div>
      </article>
      <article className="fx5000__page3__cont2">
        <div className="fx5000__page3__cont__img"></div>
      </article>
    </>
  );
};

const GALVANIC = () => {
  return (
    <>
      <article className="fx5000__page3__cont__gal">
        <div className="fx5000__page3__cont__1__gal"></div>
      </article>
      <article className="fx5000__page3__cont2__gal">
        <div className="fx5000__page3__cont__img__gal"></div>
      </article>
    </>
  );
};

const SONIC = () => {
  return (
    <>
      <article className="fx5000__page3__cont__sonic">
        <div className="fx5000__page3__cont__1__sonic"></div>
      </article>
      <article className="fx5000__page3__cont2__sonic">
        <div className="fx5000__page3__cont__img__sonic"></div>
      </article>
    </>
  );
};

const COOLING = () => {
  return (
    <>
      <article className="fx5000__page3__cont__cooling">
        <div className="fx5000__page3__cont__1__cooling"></div>
      </article>
      <article className="fx5000__page3__cont2__cooling">
        <div className="fx5000__page3__cont__img__cooling"></div>
      </article>
    </>
  );
};

const LED = () => {
  return (
    <>
      <article className="fx5000__page3__cont__led">
        <div className="fx5000__page3__cont__1__led"></div>
      </article>
      <article className="fx5000__page3__cont2__led">
        <div className="fx5000__page3__cont__img__led"></div>
      </article>
    </>
  );
};

function Page3() {
  const [currentSelect, setCurrentSelect] = useState("1");

  const Mode = () => {
    if (currentSelect === "1") return <Laser />;
    if (currentSelect === "2") return <SONIC />;
    if (currentSelect === "3") return <GALVANIC />;
    if (currentSelect === "4") return <COOLING />;
    if (currentSelect === "5") return <LED />;
  };

  return (
    <section id="fx5000__page3">
      <article className="fx5000__page3__header">
        <p className="fx5000__page3__header__p">FX-5000??? ???????????? ????????????</p>
        <h1>???????????? ????????? ???????????????.</h1>
        <p>
          ????????? ?????? ???, ?????????, ?????????, ?????? ?????? ????????? ?????? ???????????????
          ????????? ?????? ??? ????????????.
        </p>
      </article>
      <article className="fx5000__page3__btn">
        {fx5000Element.map((x, y) => (
          <ModeSelector
            key={y}
            numbering={x.num}
            title={x.title}
            image={x.img}
            onClick={() => {
              setCurrentSelect(x.num);
            }}
            backgroundColor={currentSelect !== x.num ? "" : "#fff"}
            numberingBackgroundColor={currentSelect !== x.num ? "" : "#55576f"}
            numberingColor={currentSelect !== x.num ? "" : "#fff"}
          />
        ))}
      </article>
      <Mode />
    </section>
  );
}

export default Page3;
