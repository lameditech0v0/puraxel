function Page3() {
  return (
    <section id="me__page3">
      <article className="me__page3__header">
        <p className="me__page3__header__p">하나의 기기로</p>
        <h1>레이저와 갈바닉 케어를 한 번에</h1>
      </article>
      <article className="me__page3__btn">
        <div className="me__page3__btn__left">
          <p>LASER MODE</p>
          <p>레이저 모드</p>
        </div>
        <div className="me__page3__btn__circle">
          <svg
            width="4.95vw"
            height="5.10vw"
            viewBox="0 0 95 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_104_35476)">
              <ellipse
                cx="47.5937"
                cy="48.9998"
                rx="47.4062"
                ry="48.222"
                fill="white"
                fill-opacity="0.7"
              />
              <path
                d="M94.3971 48.9998C94.3971 75.3089 73.4328 96.619 47.5937 96.619C21.7545 96.619 0.790275 75.3089 0.790275 48.9998C0.790275 22.6907 21.7545 1.38061 47.5937 1.38061C73.4328 1.38061 94.3971 22.6907 94.3971 48.9998Z"
                stroke="url(#paint0_linear_104_35476)"
                stroke-opacity="0.3"
                stroke-width="1.20555"
              />
            </g>
            <path
              d="M47.5928 28.9093V69.0943"
              stroke="#1A1A1A"
              stroke-opacity="0.5"
              stroke-width="2.4111"
              stroke-linecap="round"
            />
            <path
              d="M67.3457 49.004L27.8405 49.004"
              stroke="#1A1A1A"
              stroke-opacity="0.5"
              stroke-width="2.4111"
              stroke-linecap="round"
            />
            <defs>
              <filter
                id="filter0_b_104_35476"
                x="-23.9235"
                y="-23.3332"
                width="143.034"
                height="144.666"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="12.0555"
                />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_104_35476"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_104_35476"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_104_35476"
                x1="47.5937"
                y1="0.777832"
                x2="47.5937"
                y2="97.2218"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1A1A1A" stop-opacity="0" />
                <stop offset="1" stop-color="#1A1A1A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="me__page3__btn__right">
          <p>GALVANIC MODE</p>
          <p>갈바닉 모드</p>
        </div>
      </article>
      <article className="me__page3__cont">
        <div className="me__page3__cont__1"></div>
      </article>
      <article className="me__page3__cont2">
        <div className="me__page3__cont__img"></div>
      </article>
    </section>
  );
}

export default Page3;
