import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Page1() {
  return (
    <section id="banner">
      <div className="desc">
        <h1>홀로 빛나다</h1>
        <p>
          레이저의 미세한 홀이 <br />
          당신의 피부를 지켜줍니다.
        </p>
        <div className="btn__top">
          <div className="red"></div>
          <a href="#" className="shop">
            쇼핑몰 바로가기
          </a>
          <svg
            width="38"
            height="24"
            viewBox="0 0 38 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.486486 12.2444H36M36 12.2444L24.8108 1M36 12.2444H0M36 12.2444L24.6575 23"
              stroke="#1A1A1A"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="btn__bottom">
          <div className="black"></div>
          <a href="#" className="inquery">
            문의 신청 하기
          </a>
          <svg
            width="38"
            height="24"
            viewBox="0 0 38 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.486486 12.2444H36M36 12.2444L24.8108 1M36 12.2444H0M36 12.2444L24.6575 23"
              stroke="#1A1A1A"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={2000}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
      >
        <SwiperSlide className="s1"></SwiperSlide>
        <SwiperSlide className="s2"></SwiperSlide>
        <SwiperSlide className="s3"></SwiperSlide>
        <SwiperSlide className="s4"></SwiperSlide>
        <SwiperSlide className="s5"></SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Page1;
