import { Autoplay, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Page2() {
  return (
    <section id="me__page2">
      {/* header */}
      <article className="me__page2__header">
        <div className="me__page2__header__text">
          <p className="me__page2__header__text__p">
            PURAXEL-ME는 이렇게 다릅니다.
          </p>
          <h1>나만의 퓨라셀-미(美)를 만납니다.</h1>
          <div className="me__page2__header__text__bg"></div>
        </div>
      </article>
      {/* desc */}
      <article className="me__page2__desc">
        <p className="me__page2__desc__p1">
          전문적으로만 사용되던 레이저를
          <br />
          이제부터 집에서도 안전하게 직접 관리할 수 있습니다.
        </p>
        <p className="me__page2__desc__p2">
          퓨라셀에 사용된 미용 레이저(Er:Yag, 2940nm)의 경우 수분에 대한 에너지
          흡수도가 높아 레이저 조사 시 피부의 물분자 결합을 깨면서
          <br /> 나오는 높은 에너지로 피부표면을 순간적으로 증발시켜 미세한 홀을
          만드는 원리입니다.
        </p>
      </article>
      {/* image */}
      <Swiper
        modules={[Autoplay, Scrollbar]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={2000}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
      >
        {/* swiperPage */}
        <SwiperSlide className="s1"></SwiperSlide>
        <SwiperSlide className="s2"></SwiperSlide>
        <SwiperSlide className="s3"></SwiperSlide>
        <SwiperSlide className="s4"></SwiperSlide>
        <SwiperSlide className="s5"></SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Page2;
