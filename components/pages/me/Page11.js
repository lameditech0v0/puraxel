import Newsletter from "components/newsletter/Newsletter";
import Link from "next/link";

function Page11() {
  return (
    <section id="me__page11">
      {/* header*/}
      <article className="me__page11__header">
        <div className="me__page11__header__text">
          <h1>제품 구매</h1>
          <div className="me__page11__header__bg"></div>
        </div>
        <div className="me__page11__header__cont">
          <div className="me__page11__header__cont__img">
            <div className="me__page11__header__cont__img__bg"></div>
          </div>
          <div className="me__page11__header__cont__desc">
            <div className="me__page11__header__cont__desc__price">
              <p>퓨라셀 me</p>
              <p>1,800,000원</p>
            </div>
            <div className="me__page11__header__cont__desc__text">
              <p>
                전문적으로 사용하던 프락셔널 레이저의 효능을 직접 확인하실 수
                <br />
                있습니다. 하루 10분, 이제 집에서 관리하세요.
              </p>
            </div>
          </div>
        </div>
        <Link href="https://lmdt.cafe24.com/">
          <button className="me__page11__btn" type="submit">
            <p className="me__page11__desc__btn"> 쇼핑몰 바로가기</p>
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
          </button>
        </Link>
      </article>

      {/* newsLetter */}
      <Newsletter />
    </section>
  );
}

export default Page11;
