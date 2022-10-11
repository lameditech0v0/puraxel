import Image from "next/image";
import Me from "public/main/page1/home_main_me.png";

function Page1() {
  return (
    <section id="page1">
      <article className="page1__desc">
        <span className="page1__desc__span1">홈 에스테틱 레이저의 시작</span>
        <h1>PURAXEL-Me</h1>
        <p className="page1__desc__p1">
          하루 10분, <br />
          이제 집에서 관리하세요.
        </p>
        <p className="page1__desc__p2">
          전문적으로 사용하던
          <br />
          프락셔널 레이저의 효능을
          <br />
          직접 확인하실 수 있습니다.
          <br />
        </p>
        <p className="page1__desc__span2">
          ※ 본 기기는 피부미용관리기기 입니다.
        </p>
        <div className="page1__btn">
          <a href="#" className="page1__desc__btn">
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
      <figure className="page1__img">
        <div className="page1__img__bg"></div>
      </figure>
    </section>
  );
}

export default Page1;
