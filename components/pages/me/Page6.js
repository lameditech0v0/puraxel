import Model from "public/me/page6/puraxel_model.png";
import Model2 from "public/me/page6/puraxel_me_model2.png";
import Image from "next/image";
function Page6() {
  return (
    <section id="me__page6">
      {/* header */}
      <article className="me__page6__header">
        <p className="me__page6__header__p1">프락셔널 레이저 모듈로 생성되는</p>
        <h1>5천개의 마이크로홀!</h1>
        <p className="me__page6__header__p2">50샷 기준 5~10분만에 완성</p>
        <p className="me__page6__header__p3">
          이제 언제 어디서나 프락셔널 레이저를 경험해 보세요.
          <br /> 에스테틱 프리미엄 가치를 높여보세요.
        </p>
      </article>
      {/* cont */}
      <article className="me__page6__cont">
        <div className="me__page6__cont__img1">
          <Image src={Model} width={778} height={1080} />
        </div>
        <div className="me__page6__cont__img2">
          <Image src={Model2} />
        </div>
      </article>
      {/* oval */}
      <div className="subBlur">
        <svg
          width="22.24vw"
          height="22.24vw"
          viewBox="0 0 427 427"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3" filter="url(#filter0_f_104_35614)">
            <circle cx="213.5" cy="213.5" r="113.5" fill="#ACC2ED" />
          </g>
          <defs>
            <filter
              id="filter0_f_104_35614"
              x="0"
              y="0"
              width="427"
              height="427"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="50"
                result="effect1_foregroundBlur_104_35614"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="mainBlur">
        <svg
          width="26.98vw"
          height="26.98vw"
          viewBox="0 0 518 518"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_bd_104_35615)">
            <circle
              cx="259"
              cy="247"
              r="227"
              fill="url(#paint0_linear_104_35615)"
              fill-opacity="0.4"
              shape-rendering="crispEdges"
            />
            <circle
              cx="259"
              cy="247"
              r="226.5"
              stroke="url(#paint1_linear_104_35615)"
              shape-rendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_bd_104_35615"
              x="-18"
              y="-30"
              width="554"
              height="554"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_104_35615"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="12" />
              <feGaussianBlur stdDeviation="16" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.647059 0 0 0 0 0.0588235 0 0 0 0 0.270588 0 0 0 0.04 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_backgroundBlur_104_35615"
                result="effect2_dropShadow_104_35615"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_104_35615"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_104_35615"
              x1="103.253"
              y1="83.0556"
              x2="417.9"
              y2="415.989"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E4F5FF" stop-opacity="0" />
              <stop offset="1" stop-color="#FFEEE4" stop-opacity="0.7" />
              <stop offset="1" stop-color="#E4F2FF" stop-opacity="0.7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_104_35615"
              x1="97.5942"
              y1="75.276"
              x2="478.63"
              y2="467.367"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F2FAFF" />
              <stop offset="1" stop-color="white" stop-opacity="0.3" />
              <stop offset="1" stop-color="white" stop-opacity="0.5" />
              <stop offset="1" stop-color="white" stop-opacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}

export default Page6;
