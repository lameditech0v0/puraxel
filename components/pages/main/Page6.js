import { CheckCircle, CheckCircleOutline } from "@mui/icons-material";
import { Checkbox, createTheme, FormControlLabel } from "@mui/material";

import { useState } from "react";
import { useForm } from "react-hook-form";

const theme3 = createTheme({
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: "#1A1A1A",
          fontFamily: "Pretendard",
          fontSize: "1.04vw",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "red",
          fontFamily: "Pretendard",
          fontSize: "1.04vw",
        },
      },
    },
  },
});

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
              <label htmlFor="name">이름</label>
              <input id="name" {...register("firstName")} placeholder="성명" />
            </div>
            <div className="page6__inquiry__2">
              <label htmlFor="tradeName">상호명</label>
              <input
                id="tradeName"
                {...register("firstName")}
                placeholder="라메디텍"
              />
            </div>
          </div>
          <div className="page6__inquiry__1">
            <div className="page6__inquiry__2">
              <label htmlFor="phone">연락처</label>
              <input
                id="phone"
                {...register("firstName")}
                placeholder="010-0000-0000"
              />
            </div>
            <div className="page6__inquiry__2">
              <label htmlFor="email">이메일</label>
              <input
                id="email"
                {...register("firstName")}
                placeholder="example@example.com"
              />
            </div>
          </div>
          <div className="page6__inquiry__1">
            <div className="page6__inquiry__2">
              <label htmlFor="content">문의내용</label>
              <textarea
                id="content"
                {...register("aboutYou")}
                placeholder="문의 내용을 입력해주세요"
              />
            </div>
          </div>
          <FormControlLabel
            theme={theme3}
            control={
              <Checkbox
                sx={{
                  width: "1.67vw",
                  height: "1.67vw",
                }}
                icon={<CheckCircleOutline />}
                checkedIcon={<CheckCircle />}
              />
            }
            label="개인정보 수집 및 활용에 동의합니다."
          />
          <button className="page6__btn" type="submit">
            <p className="page6__desc__btn"> 문의 신청하기</p>
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
                <label htmlFor="name">이름</label>
                <input
                  id="name"
                  {...register("firstName")}
                  placeholder="성명"
                />
              </div>
              <div className="page6__inquiry__2">
                <label htmlFor="tradeName">이메일</label>
                <input
                  id="tradeName"
                  {...register("firstName")}
                  placeholder="example@example.com"
                />
              </div>
            </div>
            <FormControlLabel
              sx={{
                ml: "4.17vw",
                color: "white",
              }}
              control={
                <Checkbox
                  sx={{
                    width: "1.67vw",
                    height: "1.67vw",
                    color: "white",
                  }}
                  icon={<CheckCircleOutline />}
                  checkedIcon={<CheckCircle />}
                />
              }
              label="개인정보 수집 및 활용에 동의합니다."
            />
            <button className="page6__btn" type="submit">
              <p className="page6__desc__btn"> 뉴스레터 구독하기</p>
              <svg
                width="1.67vw"
                height="1.67vw"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 0.432432L16 32L16 0M16 0.432509L16 32.0001"
                  stroke="#1D1F36"
                  stroke-width="2"
                />
                <path
                  d="M0.432432 16L32 16L0 16M0.432509 16L32.0001 16"
                  stroke="#1D1F36"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </form>
        </div>
      </article>
    </section>
  );
}

export default Page6;
