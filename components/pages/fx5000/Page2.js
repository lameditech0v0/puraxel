import Image from "next/image";
import { Autoplay, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import p1 from "public/main/banner/home_main_01.webp";
import p2 from "public/main/banner/home_main_02.webp";
import p3 from "public/main/banner/home_main_03.webp";
import p4 from "public/main/banner/home_main_04.webp";
import p5 from "public/main/banner/home_main_05.webp";

function Page2() {
  return (
    <section id="me__page2">
      {/* header */}
      <article className="me__page2__header">
        <div className="me__page2__header__text">
          <p className="me__page2__header__text__p">
            PURAXEL FX-5000는 이렇게 다릅니다.
          </p>
          <h1>에스테틱 레이저의 시작</h1>
          <div className="fx5000__page2__header__text__bg"></div>
        </div>
      </article>
      {/* desc */}
      <article className="me__page2__desc">
        <p className="me__page2__desc__p1">
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
        <SwiperSlide className="s1">
          <div>
            <Image src={p1} alt="" layout={"responsive"} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="s2">
          <div>
            <Image src={p2} alt="" layout={"responsive"} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="s3">
          <div>
            <Image src={p3} alt="" layout={"responsive"} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="s4">
          <div>
            <Image src={p4} alt="" layout={"responsive"} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="s5">
          <div>
            <Image src={p5} alt="" layout={"responsive"} />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Page2;
