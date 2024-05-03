"use client"; // <===== REQUIRED
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Our custom button component
import LogoSliderButtons from "./LogoSliderButtons";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface LogoSliderProps {
  data: Slide[];
}

const LogoSlider: React.FC<LogoSliderProps> = ({ data }) => {
  return (
          <Swiper
            autoplay={true}
            navigation={true}
            pagination={true}
            loop={true}
            slidesPerView="auto"
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1025: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {data.map(({ id, image, tagline, title, buttons }) => (
              <SwiperSlide key={id}>
                <div
                  className=""
                  style={{
                    background: `url(${image}) center center scroll no-repeat`,
                  }}
                >
                  <Image
                    src="/logo_1.png"
                    alt="Logo"
                    className="opacity-0	"
                    width={149}
                    height={88}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
  );
};

export default LogoSlider;
