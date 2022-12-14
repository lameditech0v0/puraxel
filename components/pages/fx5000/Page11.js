import Newsletter from "components/newsletter/Newsletter";

import { CheckCircle, CheckCircleOutline } from "@mui/icons-material";
import { Checkbox, createTheme, FormControlLabel } from "@mui/material";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import emailjs from "@emailjs/browser";
import newsletter from "components/newsletter/Newsletter";

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

function Page11() {
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
    <section id="fx5000__page11">
      {/* header*/}
      <article className="page6__inquiry">
        <div className="page6__header__text">
          <h1>?????? ??????</h1>
          <div className="page6__header__bg"></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} component="form" ref={form}>
          <div className="page6__inquiry__1">
            <div className="page6__inquiry__2">
              <label htmlFor="name">??????</label>
              <input
                id="name"
                {...register("to_customerName", {
                  required: true,
                  maxLength: 20,
                  // pattern: /^[A-Za-z]+$/i,
                })}
                placeholder="??????"
                name="to_customerName"
              />
            </div>
            <div className="page6__inquiry__2">
              <label htmlFor="tradeName">?????????</label>
              <input
                id="tradeName"
                {...register("to_customerCompanyName", { required: true })}
                placeholder="????????????"
                name="to_customerCompanyName"
              />
            </div>
          </div>
          <div className="page6__inquiry__1">
            <div className="page6__inquiry__2">
              <label htmlFor="phone">?????????</label>
              <input
                id="phone"
                {...register("to_customerTel", { required: true })}
                placeholder="010-0000-0000"
                name="to_customerTel"
              />
            </div>
            <div className="page6__inquiry__2">
              <label htmlFor="email">?????????</label>
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
              <label htmlFor="content">????????????</label>
              <textarea
                id="content"
                {...register("to_customerContent", { required: true })}
                placeholder="?????? ????????? ??????????????????"
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
            label="???????????? ?????? ??? ????????? ???????????????."
          />
          <button
            className="page6__btn"
            onClick={() => {
              handleSubmit(onSubmit);
            }}
            type="submit"
          >
            <p className="page6__desc__btn"> ?????? ????????????</p>
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

      {/* newsLetter */}
      <Newsletter />
    </section>
  );
}

export default Page11;
