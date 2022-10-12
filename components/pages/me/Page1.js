function Page1() {
  return (
    <section id="me__page1">
      {/* desc */}
      <article className="me__page1__desc">
        <span className="me__page1__desc__span1">PURAXEL ME는?</span>
        <p className="me__page1__desc__p1">
          고품격 홈케어
          <br />
          미용 레이저입니다.
        </p>
        <p className="me__page1__desc__p2">
          FX-1000은 피부에 레이저를 조사하여 0.2mm 이하의 피<br />
          부층에 약 100개의 균일한 마이크로 홀을 생성하여 피부
          <br /> 자가세포 개선 능력을 유도하고 기능성 앰플 및 화장품 등<br />의
          유효성분 흡수율을 증가시켜 피부의 문제를 해결하는
          <br />데 강력한 도움을 줍니다.
        </p>
      </article>
      {/* image */}
      <figure className="me__page1__img">
        <div className="me__page1__img__bg"></div>
      </figure>
    </section>
  );
}

export default Page1;