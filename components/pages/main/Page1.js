import Link from "next/link";
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
    <section id="page1">
      {/* desc */}
      <article className="page1__desc">
        <div>
          <div className="black"></div>
          <p className="page1__desc__span1">홈 에스테틱 레이저의 시작</p>
        </div>
        {resize <= 768 ? (
          <h1>
            PURAXEL <br />
            <em>ME</em>
          </h1>
        ) : (
          <h1>
            PURAXEL <em>ME</em>
          </h1>
        )}
        {resize <= 768 ? (
          <p className="page1__desc__p1">
            하루 10분,
            <br /> 이제 집에서 관리하세요.
          </p>
        ) : (
          <p className="page1__desc__p1">하루 10분, 이제 집에서 관리하세요.</p>
        )}

        <p className="page1__desc__span2">
          ※ 본 기기는 피부미용관리기기 입니다.
        </p>
        <div className="page1__btn">
          <Link href="/me">
            <a className="page1__desc__btn">자세히 보기</a>
          </Link>
          {resize <= 768 ? (
            <svg
              width="4.17vw"
              height="3.13vw"
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
          ) : resize >= 1920 ? (
            <svg
              width="38px"
              height="24px"
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
          ) : (
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
          )}
        </div>
      </article>
      {/* image */}
      <figure className="page1__img">
        <div className="page1__img__bg"></div>
      </figure>
    </section>
  );
}

export default Page1;
