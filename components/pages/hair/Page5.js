const contInfo = [
  {
    title: "정수리 탈모",
    desc: "퓨라셀 + 미스터케어 발모개선 앰플 3개월 적용 후",
    image: "hair/page5/hair_testResult_card_01.png",
    image2: "hair/page5/hair_testResult_card_02.png",
  },
  {
    title: "M자 탈모",
    desc: "피부치밀도를 나타내는 Density 값이 퓨라셀 사용 전과 비교하여 4주 사용후 30% 증가",
    image: "hair/page5/hair_testResult_card_03.png",
    image2: "hair/page5/hair_testResult_card_04.png",
  },
];

const contInfo2 = [
  {
    title: "모량 테스트",
    image3: "hair/page5/Group1.png",
    image4: "hair/page5/Group2.png",
  },
  {
    title: "모발 테스트",
    image3: "hair/page5/Group3.png",
    image4: "hair/page5/Group4.png",
  },
];

const Cont = ({ title, desc, image, image2 }) => {
  return (
    <article className="hair__page5__conts">
      <div className="hair__page5__cont1">
        <div className="hair__page5__cont1__header">
          <div className="hair__page5__cont1__header__title">
            <div className="white"></div>
            <div className="hair__page5__cont1__header__title__text">
              {title}
            </div>
          </div>
          <div className="hair__page5__cont1____header__subTitle">
            <p>{desc}</p>
          </div>
        </div>
        <div className="hair__page5__cont1__cont__img">
          <div>
            <img src={image} />
          </div>
          <div>
            <img src={image2} />
          </div>
        </div>
      </div>
    </article>
  );
};

const Cont2 = ({ title, desc, image3, image4 }) => {
  return (
    <article className="hair__page5__conts">
      <div className="hair__page5__cont1">
        <div className="hair__page5__cont1__header">
          <div className="hair__page5__cont1__header__title">
            <div className="white"></div>
            <div className="hair__page5__cont1__header__title__text">
              {title}
            </div>
          </div>
          <div className="hair__page5__cont1____header__subTitle">
            <p>{desc}</p>
          </div>
        </div>
        <div className="hair__page5__cont1__cont__img2">
          <div className="img">
            <img src={image3} />
          </div>
          <div className="img2">
            <img src={image4} />
          </div>
        </div>
      </div>
    </article>
  );
};

function Page5() {
  return (
    <section id="hair__page5">
      {/* header */}
      <article className="hair__page5__header">
        <div className="hair__page5__header__text">
          <p>퓨라셀과 각 효능에 특화된 앰플 사용후 결과</p>
          <h1>PURAXEL Hair 임상실험</h1>
          <div className="hair__page5__header__bg"></div>
        </div>
        <div className="hair__page5__header__subText">
          <div className="hair__page5__header__subText__text">
            <div className="hair__page5__header__subText__header">
              <p>시험기간</p>
              <p>시험기관</p>
            </div>
            <div className="hair__page5__header__subText__subHeader">
              <p>2020 . 5 . 30 ~ . 8 . 21</p>
              <p>**성형외과의원</p>
            </div>
          </div>
          <div className="hair__page5__header__subText__text">
            <div className="hair__page5__header__subText__header">
              <p>피시험자</p>
              <p>부위</p>
            </div>
            <div className="hair__page5__header__subText__subHeader">
              <p>30 ~ 60세 성인 남성</p>
              <p>피시험자의 정수리와 M자</p>
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
          image2={txt.image2}
          image3={txt.image3}
          image4={txt.image4}
        />
      ))}
      {contInfo2.map((txt) => (
        <Cont2
          key={txt.title}
          title={txt.title}
          image3={txt.image3}
          image4={txt.image4}
        />
      ))}
    </section>
  );
}

export default Page5;
