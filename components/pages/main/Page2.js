import Image from "next/image";
import FX5000 from "public/main/page2/fx-5000.png";

function Page1() {
  return (
    <section id="page2">
      <figure className="page2__img">
        <div className="page2__img__bg"></div>
      </figure>
      <article className="page2__desc">
        <span className="page2__desc__span1">에스테틱 레이저의 시작</span>
        <h1>FX-5000</h1>
        <p className="page2__desc__p2">
          소형 레이저 기술로
          <br />
          에스테틱에 혁신을 가져오다.
        </p>
        <p className="page2__desc__span2">
          ※ FX-5000은 에스테틱 샵<br /> 전문가용 제품입니다.
        </p>
        <div className="page2__btn">
          <a href="#" className="page2__desc__btn">
            자세히 보기
          </a>
          <svg
            width="1.98vw"
            height="1.25vw"
            viewBox="0 0 38 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.486486 12.2444H36M36 12.2444L24.8108 1M36 12.2444H0M36 12.2444L24.6575 23"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>
      </article>
    </section>
  );
}

export default Page1;
