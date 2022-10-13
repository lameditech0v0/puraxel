function Banner() {
  return (
    <section id="hair__banner">
      {/* header */}
      <article className="hair__banner__header">
        <p className="hair__banner__header__p1">
          레이저 기술을 이용한 두피 관리, 자신있는 삶의 회복
        </p>
        <h1>PURAXEL HAIR</h1>
        <p className="hair__banner__header__p2">
          프락셔널 레이저는 기능성 앰플의 두피 흡수를 도와
          <br />
          탈모관리에 효과적입니다.
        </p>
        <p className="hair__banner__header__p3">
          ※ 이 제품은 “두피관리기기” 입니다
        </p>
      </article>
      {/* image */}
      <figure className="hair__banner__img">
        <div className="hair__banner__img__bg"></div>
      </figure>
    </section>
  );
}

export default Banner;
