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
          color: "#FFFFFF",
          fontFamily: "Pretendard",
          fontSize: "2.60vw",
          marginLeft: "0.78vw",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          "&.Mui-checked": { color: "#000000" },
          Svg: { fontSize: "4.17vw" },
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
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          "&.Mui-checked": { color: "#000000" },
          Svg: { fontSize: "1.67vw" },
        },
      },
    },
  },
});

const CheckboxInfo = () => {
  return (
    <FormControlLabel
      theme={theme2}
      sx={{
        marginLeft: "13.54vw",
        color: "#FFFFFF",
      }}
      control={
        <Checkbox
          theme={theme2}
          sx={{
            color: "#FFFFFF",
          }}
          icon={<CheckCircleOutline />}
          checkedIcon={<CheckCircle />}
        />
      }
      label="개인정보 수집 및 활용에 동의합니다."
    />
  );
};

const CheckboxInfo2 = () => {
  return (
    <FormControlLabel
      theme={theme}
      sx={{
        marginLeft: "4.17vw",
        color: "#FFFFFF",
      }}
      control={
        <Checkbox
          theme={theme}
          icon={<CheckCircleOutline />}
          checkedIcon={<CheckCircle />}
        />
      }
      label="개인정보 수집 및 활용에 동의합니다."
    />
  );
};

function Newsletter() {
  const { register, handleSubmit, reset } = useForm();

  const [data, setData] = useState(undefined);
  const [newsletter, setNewletter] = useState(undefined);

  const [aggre, setAggre] = useState(false);

  const form = useRef();
  const newsletterForm = useRef();

  const [resize, setResize] = useState();

  const handleResize = () => {
    setResize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  });

  return (
    <article className="newsLetter">
      <div className="header__text">
        <h1>뉴스레터</h1>
        <div className="header__bg"></div>
      </div>
      <div className="header__desc">
        <p>
          퓨라셀 뉴스레터를 구독하시면 퓨라셀의 새 소식, 이벤트, 행사 정보 등
          다양한 정보와 혜택을 받을 수 있어요.
          <br /> 가장 먼저 퓨라셀의 새 소식을 만나보세요.
        </p>
      </div>
      <div className="newsLetter__form">
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="inquiry__1">
            <div className="inquiry__2">
              <label htmlFor="name">이름</label>
              <input
                id="name"
                {...register("newsletterName")}
                placeholder="성명"
              />
            </div>
            <div className="inquiry__2">
              <label htmlFor="tradeName">이메일</label>
              <input
                id="tradeName"
                {...register("newsletterMail")}
                placeholder="example@example.com"
              />
            </div>
          </div>
          {resize <= 768 ? <CheckboxInfo2 /> : <CheckboxInfo />}

          <button className="btn" type="submit">
            <p className="desc__btn"> 뉴스레터 구독하기</p>
            {resize <= 768 ? (
              <svg
                width="4.17vw"
                height="4.17vw"
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
            ) : resize >= 1920 ? (
              <svg
                width="32px"
                height="32px"
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
            ) : (
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
            )}
          </button>
        </form>
      </div>
    </article>
  );
}

export default Newsletter;
