import Link from "next/link";
import { useEffect, useState } from "react";

function Page3() {
  const [resize, setResize] = useState();

  const handleResize = () => {
    setResize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  });
  return (
    <section id="page3">
      {/* desc */}
      <article className="page3__desc">
        <div>
          <div className="black"></div>
          {resize <= 768 ? (
            <p className="page3__desc__span1">자신있는 삶의 회복</p>
          ) : (
            <p className="page3__desc__span1">
              레이저 기술로 두피 관리, 자신있는 삶의 회복
            </p>
          )}
        </div>
        {resize <= 768 ? (
          <h1>
            PURAXEL
            <br />
            <em> HAIR</em>
          </h1>
        ) : (
          <h1>
            PURAXEL<em> HAIR</em>
          </h1>
        )}
        {resize <= 768 ? (
          <p className="page3__desc__p2">
            프락셔널 레이저는 <br />
            기능성 앰플의 두피 흡수를 도와
            <br /> 탈모관리에 효과적입니다.
          </p>
        ) : (
          <p className="page3__desc__p2">
            프락셔널 레이저는 기능성 앰플의 두피
            <br /> 흡수를 도와 탈모관리에 효과적입니다.
          </p>
        )}

        <p className="page3__desc__span2">※ 본 기기는 두피관리기기 입니다.</p>
        <div className="page3__btn">
          <Link href="/hair">
            <a className="page3__desc__btn">자세히 보기</a>
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
      <figure className="page3__img">
        <div className="page3__img__bg"></div>
      </figure>
    </section>
  );
}

export default Page3;
