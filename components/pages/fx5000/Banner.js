function Banner() {
  return (
    <section id="fx5000__banner">
      {/* header */}
      <article className="fx5000__banner__header">
        <p className="fx5000__banner__header__p1">
          피부 전문가를 위한 프락셔널 레이저
        </p>
        <h1>PURAXEL FX-5000</h1>
        <p className="fx5000__banner__header__p2">
          소형 레이저 기술로 에스테틱에 혁신을 가져오다
          <br />
          FX-5000은 에스테틱 샵 전문가용 제품입니다.
        </p>
      </article>
      {/* image */}
      <figure className="fx5000__banner__img">
        <div className="fx5000__banner__img__bg"></div>
      </figure>
    </section>
  );
}

export default Banner;
