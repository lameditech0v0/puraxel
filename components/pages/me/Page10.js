import Link from "next/link";
import { useState, useEffect } from "react";

function Page10() {
  const [resize, setResize] = useState();

  const handleResize = () => {
    setResize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  });
  return (
    <section id="me__page10">
      <article className="me__page10__header">
        <div className="me__page10__header__text">
          <p>퓨라셀ME 사용 방법</p>
          {resize <= 768 ? (
            <h1>How to Puraxel ME</h1>
          ) : (
            <h1>How to use Puraxel ME</h1>
          )}

          <div className="me__page10__header__bg"></div>
        </div>
        {resize <= 768 ? (
          ""
        ) : (
          <div className="me__page10__header__btn">
            <Link href="https://www.youtube.com/channel/UC7X6D4v-G-b7NmNeU2j-jwQ">
              <a
                className="me__page10__header__btn1"
                target="_blank"
                rel="noopener noreferrer"
              >
                유튜브 보기
              </a>
            </Link>
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
        )}
      </article>
      <article className="me__page10__iframe">
        <iframe
          src="https://www.youtube.com/embed/X6oDTHJnxq4"
          frameBorder="0"
          allowFullScreen=""
        ></iframe>
      </article>
      <articel>
        {resize <= 768 ? (
          <Link href="https://www.youtube.com/channel/UC7X6D4v-G-b7NmNeU2j-jwQ">
            <div className="me__page10__header__btn">
              <a
                className="me__page10__header__btn1"
                target="_blank"
                rel="noopener noreferrer"
              >
                유튜브 바로가기
              </a>

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
          </Link>
        ) : (
          ""
        )}
      </articel>
    </section>
  );
}

export default Page10;
