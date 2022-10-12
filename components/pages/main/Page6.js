import { CheckCircle, CheckCircleOutline } from "@mui/icons-material";
import { Checkbox, createTheme, FormControlLabel } from "@mui/material";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import emailjs from "@emailjs/browser";

const theme = createTheme({
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: "#1A1A1A",
          fontFamily: "Pretendard",
          fontSize: "1.04vw",
        },
      },
    },
  },
});
const theme2 = createTheme({
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: "#FFFFFF",
          fontFamily: "Pretendard",
          fontSize: "1.04vw",
        },
      },
    },
  },
});

function Page6() {
  const { register, handleSubmit, reset } = useForm();

  const [data, setData] = useState(undefined);
  const [newsletter, setNewletter] = useState(undefined);

  const [aggre, setAggre] = useState(false);

  const form = useRef();
  const newsletterForm = useRef();

  const sendMail = () => {
    emailjs
      .sendForm(
        "service_9qs0j5d",
        "template_n8l1fl9",
        form.current,
        "tbbTJ2BB3TAc4sJRz"
      )
      .then((res) => {})
      .then(() =>
        reset({
          to_customerName: "",
          to_customerCompanyName: "",
          to_customerTel: "",
          to_customerMail: "",
          to_customerContent: "",
          to_customerAgree: "off",
        })
      );
  };

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    // sendMail();
    reset({
      to_customerName: "",
      to_customerCompanyName: "",
      to_customerTel: "",
      to_customerMail: "",
      to_customerContent: "",
      to_customerAgree: false,
    });
  };

  return (
    <section id="page6">
      {/* inquiry */}
      <article className="page6__inquiry">
        <div className="page6__header__text">
          <h1>제품 문의</h1>
          <div className="page6__header__bg"></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} component="form" ref={form}>
          <div className="page6__inquiry__1">
            <div className="page6__inquiry__2">
              <label htmlFor="name">이름</label>
              <input
                id="name"
                {...register("to_customerName", {
                  required: true,
                  maxLength: 20,
                  // pattern: /^[A-Za-z]+$/i,
                })}
                placeholder="성명"
                name="to_customerName"
              />
            </div>
            <div className="page6__inquiry__2">
              <label htmlFor="tradeName">상호명</label>
              <input
                id="tradeName"
                {...register("to_customerCompanyName", { required: true })}
                placeholder="라메디텍"
                name="to_customerCompanyName"
              />
            </div>
          </div>
          <div className="page6__inquiry__1">
            <div className="page6__inquiry__2">
              <label htmlFor="phone">연락처</label>
              <input
                id="phone"
                {...register("to_customerTel", { required: true })}
                placeholder="010-0000-0000"
                name="to_customerTel"
              />
            </div>
            <div className="page6__inquiry__2">
              <label htmlFor="email">이메일</label>
              <input
                id="email"
                {...register("to_customerMail", { required: true })}
                placeholder="example@example.com"
                name="to_customerMail"
              />
            </div>
          </div>
          <div className="page6__inquiry__1">
            <div className="page6__inquiry__2">
              <label htmlFor="content">문의내용</label>
              <textarea
                id="content"
                {...register("to_customerContent", { required: true })}
                placeholder="문의 내용을 입력해주세요"
                name="to_customerContent"
              />
            </div>
          </div>

          <FormControlLabel
            {...register("to_customerAgree", { required: true })}
            name="to_customerAgree"
            theme={theme}
            control={
              <Checkbox
                sx={{
                  width: "1.67vw",
                  height: "1.67vw",
                }}
                icon={<CheckCircleOutline />}
                checkedIcon={<CheckCircle />}
                onChange={(e) => console.log(e.target.value)}
              />
            }
            label="개인정보 수집 및 활용에 동의합니다."
          />
          <button
            className="page6__btn"
            onClick={() => {
              handleSubmit(onSubmit);
            }}
            type="submit"
          >
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

      {/* page6__newsLetter */}
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
                  {...register("newsletterName")}
                  placeholder="성명"
                />
              </div>
              <div className="page6__inquiry__2">
                <label htmlFor="tradeName">이메일</label>
                <input
                  id="tradeName"
                  {...register("newsletterMail")}
                  placeholder="example@example.com"
                />
              </div>
            </div>
            <FormControlLabel
              theme={theme2}
              sx={{
                marginLeft: "4.17vw",
                color: "#FFFFFF",
              }}
              control={
                <Checkbox
                  sx={{
                    color: "#FFFFFF",
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
                  strokeWidth="2"
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
