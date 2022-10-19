import { useState, useEffect } from "react";

function Page3() {
  let [btnActive, setBtnActive] = useState(false);

  const laserActive = () => {
    setBtnActive(!btnActive);
  };

  const [resize, setResize] = useState();

  const handleResize = () => {
    setResize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  });

  return (
    <section id="me__page3">
      <article className="me__page3__header">
        <p className="me__page3__header__p">하나의 기기로</p>
        {resize <= 768 ? (
          <h1>
            레이저와 갈바닉 케어를
            <br /> 한 번에
          </h1>
        ) : (
          <h1>레이저와 갈바닉 케어를 한 번에</h1>
        )}
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
