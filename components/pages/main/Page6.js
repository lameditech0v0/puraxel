import { useState } from "react";
import { useForm } from "react-hook-form";

function Page6() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <section id="page6">
      <article className="page6__inquiry">
        <div className="page6__header__text">
          <h1>제품 문의</h1>
          <div className="page6__header__bg"></div>
        </div>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="page6__inquiry__1">
            <div className="page6__inquiry__2">
              <label for="name">이름</label>
              <input id="name" {...register("firstName")} placeholder="성명" />
            </div>
            <div className="page6__inquiry__2">
              <label for="tradeName">상호명</label>
              <input
                id="tradeName"
                {...register("firstName")}
                placeholder="라메디텍"
              />
            </div>
          </div>
          <div className="page6__inquiry__1">
            <div className="page6__inquiry__2">
              <label for="phone">연락처</label>
              <input
                id="phone"
                {...register("firstName")}
                placeholder="010-0000-0000"
              />
            </div>
            <div className="page6__inquiry__2">
              <label for="email">이메일</label>
              <input
                id="email"
                {...register("firstName")}
                placeholder="example@example.com"
              />
            </div>
          </div>
          <div className="page6__inquiry__1">
            <div className="page6__inquiry__2">
              <label for="content">문의내용</label>
              <textarea
                id="content"
                {...register("aboutYou")}
                placeholder="문의 내용을 입력해주세요"
              />
            </div>
          </div>
          <p>{data}</p>

          <input type="submit" />
        </form>
      </article>
      <article className="page6__newsLetter">
        <div className="page6__header__text">
          <h1>뉴스레터</h1>
          <div className="page6__header__bg"></div>
        </div>
        <div className="page6__header__desc">
          <p>
            퓨라셀 뉴스레터를 구독하시면 퓨라셀의 새 소식, 이벤트, 행사 정보 등
            다양한 정보와 혜택을 받을 수 있어요. 가장 먼저 퓨라셀의 새 소식을
            만나보세요.
          </p>
        </div>
        <div className="page6__newsLetter__form">
          <form
            onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
          >
            <div className="page6__inquiry__1">
              <div className="page6__inquiry__2">
                <label for="name">이름</label>
                <input
                  id="name"
                  {...register("firstName")}
                  placeholder="성명"
                />
              </div>
              <div className="page6__inquiry__2">
                <label for="tradeName">이메일</label>
                <input
                  id="tradeName"
                  {...register("firstName")}
                  placeholder="라메디텍"
                />
              </div>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
}

export default Page6;
