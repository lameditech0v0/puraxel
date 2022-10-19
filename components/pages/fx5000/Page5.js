const contInfo = [
  {
    title: "피부 보습력 3배 증가",
    desc: "피부 수분 변화에 대한 통계분석 결과,화장품+퓨라셀 1회 사용 직후 300%이상 증가",
    image: "me/page5/testResult_card.webp",
  },
  {
    title: "피부치밀도 30% 증가",
    desc: "피부치밀도를 나타내는 Density 값이 퓨라셀 사용 전과 비교하여 4주 사용후 30% 증가",
    image: "me/page5/testResult_card2.webp",
  },
  {
    title: "피부톤(맑기) 2배 증가",
    desc: `피부톤을 나타내는 L*value가 \n
    퓨라셀 사용전과 비교하여 2주 사용후 2배 증가`,
    image: "me/page5/testResult_card3.webp",
  },
  {
    title: "미백효과",
    image: "me/page5/testResult_card4.webp",
  },
  {
    title: "주름개선",
    image: "me/page5/testResult_card5.webp",
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
          <div className="me__page5__cont1____header__subTitle">
            <p>{desc}</p>
          </div>
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
    <section id="fx5000__page5">
      {/* header */}
      <article className="me__page5__header">
        <div className="me__page5__header__text">
          <p>퓨라셀과 각 효능에 특화된 앰플 사용후 결과</p>
          <h1>FX-5000 임상실험</h1>
          <div className="me__page5__header__bg"></div>
        </div>
        <div className="me__page5__header__subText">
          <div className="me__page5__header__subText__text">
            <div className="me__page5__header__subText__header">
              <p>시험기간</p>
              <p>시험기관</p>
            </div>
            <div className="me__page5__header__subText__subHeader">
              <p>2020 . 5 . 21 ~ 7 . 13</p>
              <p>한국피부과학연구원</p>
            </div>
          </div>
          <div className="me__page5__header__subText__text">
            <div className="me__page5__header__subText__header">
              <p>피시험자</p>
              <p>부위</p>
            </div>
            <div className="me__page5__header__subText__subHeader">
              <p>여성 21명</p>
              <p>안면부위와 전완부위 2주 사용후 2배 증가</p>
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
