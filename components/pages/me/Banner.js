function Banner() {
  return (
    <section id="me__banner">
      {/* header */}
      <article className="me__banner__header">
        <p className="me__banner__header__p1">홈 에스테틱 레이저의 시작</p>
        <h1>PRAXEL-Me</h1>
        <p className="me__banner__header__p2">
          전문적으로 사용하던 프락셔널 레이저의 효능을 직접 확인하실 수
          있습니다.
          <br /> 하루 10분, 이제 집에서 관리하세요.
        </p>
      </article>
      {/* image */}
      <figure className="me__banner__img">
        <div className="me__banner__img__bg"></div>
      </figure>
    </section>
  );
}

export default Banner;
