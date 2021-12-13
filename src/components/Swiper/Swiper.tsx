// Import Swiper React components
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Image } from "@chakra-ui/react";
import { SwiperItem } from "./SwiperItem";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

export function Swiper() {
  return (
    <SwiperComponent
      spaceBetween={5}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // style={{ color: "yellow" }}
    >
      <SwiperSlide style={{ position: "relative" }}>
        <SwiperItem
          path="/Europe"
          image="/images/europe.jpg"
          imageAlt="Europe"
          title="Europa"
          description="O continente mais antigo."
        />
      </SwiperSlide>

      <SwiperSlide style={{ position: "relative" }}>
        <SwiperItem
          path="/Asia"
          image="/images/asia.jpg"
          imageAlt="Asia"
          title="Ásia"
          description="O maior continente."
        />
      </SwiperSlide>

      <SwiperSlide style={{ position: "relative" }}>
        <SwiperItem
          path="/America"
          image="/images/eua.jpg"
          imageAlt="America"
          title="América"
          description="O continente de dois hemisférios."
        />
      </SwiperSlide>

      <SwiperSlide style={{ position: "relative" }}>
        <SwiperItem
          path="/Africa"
          image="/images/africa.jpg"
          imageAlt="Africa"
          title="Africa"
          description="O continente das pirâmides e faraós."
        />
      </SwiperSlide>

      <SwiperSlide style={{ position: "relative" }}>
        <SwiperItem
          path="/Oceania"
          image="/images/oceania.jpg"
          imageAlt="Oceania"
          title="Oceania"
          description="O continente dos cangurus."
        />
      </SwiperSlide>
    </SwiperComponent>
  );
}
