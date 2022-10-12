const contInfo = [
  {
    title: "실험 결과 타이틀 01",
    desc: "실험 결과 설명 01",
    image: "me/page5/testResult_card.png",
  },
  {
    title: "실험 결과 타이틀 02",
    desc: "실험 결과 설명 02",
    image: "me/page5/testResult_card2.png",
  },
  {
    title: "실험 결과 타이틀 03",
    desc: "실험 결과 설명 03",
    image: "me/page5/testResult_card3.png",
  },
  {
    title: "실험 결과 타이틀 04",
    desc: "실험 결과 설명 04",
    image: "me/page5/testResult_card4.png",
  },
  {
    title: "실험 결과 타이틀 05",
    desc: "실험 결과 설명 05",
    image: "me/page5/testResult_card5.png",
  },
];

const Cont = ({ title, desc, image }) => {
  return (
    <article className="me__page5__conts">
      <div className="me__page5__cont1">
        <div className="me__page5__cont1__header">
          <div className="me__page5__cont1__header__title">
            <div className="white"></div>
            <div className="me__page5__cont1__header__title__text">{title}</div>
          </div>
          <div className="me__page5__cont1____header__subTitle">{desc}</div>
        </div>

        <div className="me__page5__cont1__cont__img">
          <img src={image} />
        </div>
      </div>
    </article>
  );
};

function Page5() {
  return (
    <section id="me__page5">
      {/* header */}
      <article className="me__page5__header">
        <div className="me__page5__header__text">
          <p>sub title</p>
          <h1>puraxel me 임상실험</h1>
          <div className="me__page5__header__bg"></div>
        </div>
        <div className="me__page5__header__subText">
          <div className="me__page5__header__subText__text">
            <div className="me__page5__header__subText__header">
              <p>시험기간</p>
              <p>시험기관</p>
            </div>
            <div className="me__page5__header__subText__subHeader">
              <p>yyyy. mm. dd ~ mm. dd</p>
              <p>시험기관</p>
            </div>
          </div>
          <div className="me__page5__header__subText__text">
            <div className="me__page5__header__subText__header">
              <p>피시험자</p>
              <p>부위</p>
            </div>
            <div className="me__page5__header__subText__subHeader">
              <p>여성 nn명</p>
              <p>부위 설명</p>
            </div>
          </div>
        </div>
      </article>
      {/* cont */}
      {contInfo.map((txt) => (
        <Cont
          key={txt.title}
          title={txt.title}
          desc={txt.desc}
          image={txt.image}
        />
      ))}
    </section>
  );
}

export default Page5;
