import { useEffect, useState } from "react";
function Page1() {
  const [resize, setResize] = useState();

  const handleResize = () => {
    setResize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  });
  return (
    <section id="me__page1">
      {/* desc */}
      <article className="me__page1__desc">
        <p className="me__page1__desc__span1">PURAXEL FX-5000은?</p>
        {resize <= 768 ? (
          <h1 className="me__page1__desc__p1">
            에스테틱에서
            <br /> 만나볼 수 있는 고품격
            <br /> 미용 레이저입니다
          </h1>
        ) : (
          <h1 className="me__page1__desc__p1">
            에스테틱에서 만나볼 수 있는
            <br />
            고품격 미용 레이저입니다
          </h1>
        )}

        {resize <= 768 ? (
          <p className="me__page1__desc__p2">
            퓨라셀 FX-5000은 레이저를 이용하여 0.2mm 이하의 표피층에 약 100개의
            <br />
            균일한 마이크로 홀을 생성하여 피부의 자가세포 개선 능력을 향상시키고
            <br /> 앰플이나 기능성 화장품 등의 유효성분 흡수율을 증가시켜 피부의
            문제를
            <br /> 해결하는데 도움을 줄 수 있습니다.
          </p>
        ) : (
          <p className="me__page1__desc__p2">
            퓨라셀 FX-5000은 레이저를 이용하여 0.2mm 이하의 <br />
            표피층에 약 100개의 균일한 마이크로 홀을 생성하여 피
            <br /> 부의 자가세포 개선 능력을 향상시키고 앰플이나 기능성 <br />
            화장품 등의 유효성분 흡수율을 증가시켜 피부의 문제를
            <br />
            해결하는데 도움을 줄 수 있습니다.
          </p>
        )}
        <p className="me__page1__desc__p3">
          ※주요 기능 화장품 유효성분 흡수 촉진
          <br />
          (레이저 모드, 초음파 모드, 갈바닉 모드, 쿨링 모드, LED 모드)
        </p>
      </article>
      {/* image */}
      <figure className="fx5000__page1__img">
        <div className="fx5000__page1__img__bg"></div>
      </figure>
    </section>
  );
}

export default Page1;
