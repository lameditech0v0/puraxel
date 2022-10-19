import { useEffect, useState } from "react";

const noticeInfo = [
  {
    title: "라메디텍, 'KIMES 2022'서 레이저 '채혈기·미용기기' 공개",
    desc: "3월 16일 라메디텍은 지난 10일부터 13일까지 진행 된 'KIMES 2022(국제의료기기·병원설비전시회)'에서 레이저 소형화 기술이 적용된 레이저 채혈기 '핸디레이 라이트·프로'와 미용기기 '퓨라셀'을 선보였다고 밝혔다. '핸디레 ...",
    image: "main/page5/notice1.png",
    date: "2022. 07. 29",
  },
  {
    title: "라메디텍, 'KIMES 2022'서 핸디레이 시리즈·퓨라셀 전시",
    desc: "레이저 전문 헬스케어기업 라메디텍은 지난 10~13일 삼성동 코엑스에서 열린 'KIMES 2022(Korea International Medical Hospital Equipment Show)'에 참가했다고 16일 밝혔다. KIMES 2022는 올해 38번째 ...",
    image: "main/page5/notice2.png",
    date: "2022. 03. 18",
  },
];

const noticeInfo2 = [
  {
    title: "공지사항 제목 한 줄",
    desc: "공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용.",
    image: "main/page5/thumb.png",
    date: "2022. 03. 18",
  },
  {
    title: "공지사항 제목 한 줄",
    desc: "공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용.",
    image: "main/page5/thumb.png",
    date: "2022. 03. 19",
  },
];

const Notice = ({ title, desc, image, date }) => {
  return (
    <div className="page5__desc">
      <div className="page5__desc__img">
        <img src={image} alt="notice" />
      </div>
      <div className="page5__desc__text">
        <h1>{title}</h1>
        <p className="page5__desc__text__desc">{desc}</p>
        <p className="page5__desc__text__date">{date}</p>
      </div>
    </div>
  );
};

const Notice2 = ({ title, desc, image, date }) => {
  return (
    <>
      <div className="page5__desc">
        <div className="page5__desc__img">
          <img src={image} alt="notice" />
        </div>
        <div className="page5__desc__text">
          <h1>{title}</h1>
          <p className="page5__desc__text__date">{date}</p>
        </div>
      </div>
      <div className="page5__desc__desc">
        <p>{desc}</p>
      </div>
    </>
  );
};

function Page5() {
  const [resize, setResize] = useState();

  const handleResize = () => {
    setResize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  });
  return (
    <section id="page5">
      {/* header */}
      <article className="page5__header">
        <div className="page5__header__text">
          <p>PURAXEL 새 소식</p>
          <h1>공지사항</h1>
          <div className="page5__header__bg"></div>
        </div>
        {resize <= 768 ? (
          ""
        ) : (
          <div className="page5__header__btn">
            <a href="#" className="page5__header__btn1">
              전체보기
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
        )}
      </article>
      {/* notice */}
      <articel className="page5__cont">
        {resize <= 768
          ? noticeInfo.map((txt) => (
              <Notice2
                key={txt.title}
                title={txt.title}
                desc={txt.desc}
                image={txt.image}
                date={txt.date}
              />
            ))
          : noticeInfo.map((txt) => (
              <Notice
                key={txt.title}
                title={txt.title}
                desc={txt.desc}
                image={txt.image}
                date={txt.date}
              />
            ))}
        {resize <= 768 ? (
          <div className="page5__header__btn">
            <a href="#" className="page5__header__btn1">
              전체보기
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
        ) : (
          ""
        )}
      </articel>
      {resize <= 768 ? (
        ""
      ) : (
        <articel className="page5__cont">
          {resize <= 768
            ? noticeInfo.map((txt) => (
                <Notice2
                  key={txt.title}
                  title={txt.title}
                  desc={txt.desc}
                  image={txt.image}
                  date={txt.date}
                />
              ))
            : noticeInfo2.map((txt) => (
                <Notice
                  key={txt.title}
                  title={txt.title}
                  desc={txt.desc}
                  image={txt.image}
                  date={txt.date}
                />
              ))}
          {resize <= 768 ? (
            <div className="page5__header__btn">
              <a href="#" className="page5__header__btn1">
                전체보기
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
          ) : (
            ""
          )}
        </articel>
      )}
    </section>
  );
}

export default Page5;
