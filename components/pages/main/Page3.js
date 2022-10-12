import Image from "next/image";
import Hair from "public/main/page3/hair.webp";

function Page1() {
  return (
    <section id="page3">
      {/* desc */}
      <article className="page3__desc">
        <span className="page3__desc__span1">
          레이저 기술을 이용한 두피 관리,
          <br /> 자신있는 삶의 회복
        </span>
        <h1>HAIR</h1>
        <p className="page3__desc__p2">
          프락셔널 레이저는
          <br />
          기능성 앰플의 두피 흡수를 도와
          <br />
          탈모관리에 효과적입니다.
        </p>
        <div className="page3__btn">
          <a href="#" className="page3__desc__btn">
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
      {/* image */}
      <figure className="page3__img">
        <div className="page3__img__bg"></div>
      </figure>
    </section>
  );
}

export default Page1;
