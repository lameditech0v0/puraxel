import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import banner from "public/main/page1/banner1.png";

function Page1() {
  return (
    <section id="banner">
      <Swiper>
        <SwiperSlide>
          <div>
            <Image src={banner} layout={"responsive"} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner} layout={"responsive"} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner} layout={"responsive"} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner} layout={"responsive"} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner} layout={"responsive"} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner} layout={"responsive"} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Page1;
