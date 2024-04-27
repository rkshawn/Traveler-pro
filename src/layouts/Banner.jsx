import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../src/index.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div className="md:mt-5 md:mx-6">
        <h1 className="text-center">Next to heavens</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
          className="rounded-lg w-[500px] h-[300px]"
            src=" https://i.ibb.co/nLFKmWB/jonas-kool-EJGVd-CGHof8-unsplash.jpg
"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
          className="rounded-lg w-[500px] h-[300px]"
            src="https://i.ibb.co/q5sgPjL/shifaaz-shamoon-ok-VXy9t-G3-KY-unsplash.jpg

"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
          className="rounded-lg w-[500px] h-[300px]"
            src="  https://i.ibb.co/NC31t3k/claudio-testa-SO3-Jt-E3g-Zo-unsplash.jpg

"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
          className="rounded-lg w-[500px] h-[300px]"
            src=" https://i.ibb.co/6gC1Hf0/kermit-nicou-j7-Eww2-Pv-Svk-unsplash.jpg

"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
          className="rounded-lg w-[500px] h-[300px]"
            src="https://i.ibb.co/NLvxGPy/maxim-hopman-rts-Oc4q65-B4-unsplash.jpg
"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
