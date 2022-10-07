import Image from "next/image";
import p1 from "public/main/page4/product1.png";
import p2 from "public/main/page4/product2.png";
import p3 from "public/main/page4/product3.png";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
function Page4() {
  return (
    <section id="page4">
      <articel className="page4__header">
        <p>가장 많이 찾는</p>
        <h1>퓨라셀 인기 제품</h1>
        <div className="page4__header__bg"></div>
      </articel>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={2000}
        navigation={true}
        spaceBetween={40}
        slidesPerView={3}
      >
        <SwiperSlide className="swiper__product">
          <section>
            <figure className="swiper__product__img">
              <Image src={p1} />
            </figure>
            <article className="swiper__product__text">
              <h1>퓨라셀 me</h1>
              <p className="swiper__product__text__p1">
                전문적으로 사용하던 프락셔널 레이저의 효능을
                <br /> 직접 확인하실 수 있습니다. <br />
                하루 10분, 이제 집에서 관리하세요.
              </p>
              <p className="swiper__product__text__p2">1,800,000원</p>
            </article>
          </section>
        </SwiperSlide>
        <SwiperSlide className="swiper__product">
          <section>
            <figure className="swiper__product__img">
              <Image src={p2} />
            </figure>
            <article className="swiper__product__text">
              <h1>퓨라셀 me</h1>
              <p className="swiper__product__text__p1">
                전문적으로 사용하던 프락셔널 레이저의 효능을
                <br /> 직접 확인하실 수 있습니다. <br />
                하루 10분, 이제 집에서 관리하세요.
              </p>
              <p className="swiper__product__text__p2">1,800,000원</p>
            </article>
          </section>
        </SwiperSlide>
        <SwiperSlide className="swiper__product">
          <section>
            <figure className="swiper__product__img">
              <Image src={p3} />
            </figure>
            <article className="swiper__product__text">
              <h1>퓨라셀 me</h1>
              <p className="swiper__product__text__p1">
                전문적으로 사용하던 프락셔널 레이저의 효능을
                <br /> 직접 확인하실 수 있습니다. <br />
                하루 10분, 이제 집에서 관리하세요.
              </p>
              <p className="swiper__product__text__p2">1,800,000원</p>
            </article>
          </section>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Page4;
