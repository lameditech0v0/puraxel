import { Autoplay, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Page2() {
  return (
    <section id="fx5000__page2">
      {/* header */}
      <article className="fx5000__page2__header">
        <div className="fx5000__page2__header__text">
          <p className="fx5000__page2__header__text__p">
            PURAXEL FX-5000는 이렇게 다릅니다.
          </p>
          <h1>에스테틱 레이저의 시작</h1>
          <div className="fx5000__page2__header__text__bg"></div>
        </div>
      </article>
      {/* desc */}
      <article className="fx5000__page2__desc">
        <p className="fx5000__page2__desc__p1">
          PURAXEL FX-5000의 혁신적인 기술로
          <br />
          레이저, 에스테틱의 품격을 올리다!
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
