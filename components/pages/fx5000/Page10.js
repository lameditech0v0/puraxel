import Link from "next/link";

function Page10() {
  return (
    <section id="fx5000__page10">
      <article className="fx5000__page10__header">
        <div className="fx5000__page10__header__text">
          <p>
            바로 일상생활이 가능한 소형 프락셔널 레이저,
            <br /> 직접 경험해보세요!
          </p>
          <h1>How to use Puraxel FX-5000</h1>
          <div className="fx5000__page10__header__bg"></div>
        </div>
        <div className="fx5000__page10__header__btn">
          <Link href="https://www.youtube.com/channel/UC7X6D4v-G-b7NmNeU2j-jwQ">
            <a
              className="fx5000__page10__header__btn1"
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
      </article>
      <article className="fx5000__page10__iframe">
        <iframe
          src="https://www.youtube.com/embed/X6oDTHJnxq4"
          frameBorder="0"
          allowFullScreen=""
        ></iframe>
      </article>
    </section>
  );
}

export default Page10;
