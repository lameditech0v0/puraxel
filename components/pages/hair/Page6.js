const listInfo = [
  {
    number: "1",
    title: "긴급 멈춤",
    desc: "응급 시 제품을 놓을 경우, 센서에 의해 즉시 동작이 멈춥니다.",
  },
  {
    number: "2",
    title: "접속 센서",
    desc: "접촉 센서에 의해 레이저 헤드가 피부에 닿아야만 작동합니다.",
  },
  {
    number: "3",
    title: "그립 센서",
    desc: "적외선 센서에 의해 손잡이 파지 시에만 작동합니다.",
  },
  {
    number: "4",
    title: "조사 스위치",
    desc: "조사 버튼을 누를 때만 레이저가 조사됩니다.",
  },
];

const List = ({ number, title, desc }) => {
  return (
    <article className="fx5000__page6__cont">
      <div className="number">
        <div>{number}</div>
      </div>
      <p className="title">{title}</p>
      <div className="line"></div>
      <p className="desc">{desc}</p>
    </article>
  );
};

function Page6() {
  return (
    <section id="fx5000__page6">
      <article className="fx5000__page6__header">
        <p>믿고 안심하고 쓸 수 있는</p>
        <h1>레이저 안심 기능</h1>
      </article>
      {listInfo.map((txt) => (
        <List
          key={txt.title}
          number={txt.number}
          title={txt.title}
          desc={txt.desc}
        />
      ))}
    </section>
  );
}

export default Page6;
