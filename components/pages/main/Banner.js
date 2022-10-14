import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import p1 from "public/main/banner/home_main_01.webp";
import p2 from "public/main/banner/home_main_02.webp";
import p3 from "public/main/banner/home_main_03.webp";
import p4 from "public/main/banner/home_main_04.webp";
import p5 from "public/main/banner/home_main_05.webp";

function Banner() {
  return (
    <section id="banner">
      {/* swiper */}
      <Swiper
        className="swiper__banner"
        modules={[Navigation]}
        speed={2000}
        loop={true}
        slidesPerView={1}
        navigation={true}
      >
        {/* desc */}
        <div className="desc">
          <h1>‘홀’로 빛나다</h1>
          <p>레이저의 미세한 홀이 당신의 피부를 지켜줍니다.</p>
        </div>
        <div className="btn__top">
          <div className="red"></div>
          <Link href="https://lmdt.cafe24.com/">
            <a target="_blank" rel="noopener noreferrer" className="shop">
              쇼핑몰 바로가기
            </a>
          </Link>
          <svg
            width="1.9792vw"
            height="1.2500vw"
            viewBox="0 0 38 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.486486 12.2444H36M36 12.2444L24.8108 1M36 12.2444H0M36 12.2444L24.6575 23"
              stroke="#1A1A1A"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="btn__bottom">
          <div className="black"></div>
          <Link href="#page6">
            <a className="inquery">문의 신청 하기</a>
          </Link>
          <svg
            width="1.9792vw"
            height="1.2500vw"
            viewBox="0 0 38 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.486486 12.2444H36M36 12.2444L24.8108 1M36 12.2444H0M36 12.2444L24.6575 23"
              stroke="#1A1A1A"
              strokeWidth="2"
            />
          </svg>
        </div>
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

export default Banner;
