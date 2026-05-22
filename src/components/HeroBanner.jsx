import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import BANNER_DATA from "../data/banner-data.json";

export default function HeroBanner() {
  return (
    <section className="hero-banner relative">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
      >
        {BANNER_DATA.map((item, index) => (
          <SwiperSlide key={item.id}>
            <picture className="block max-h-[1080px] w-full">
              <source media="(max-width: 1023px)" srcSet={item.image_mb_url} />
              <source media="(min-width: 1024px)" srcSet={item.image_url} />
              <img
                className="hero-banner__img h-full w-full object-cover object-center"
                src={item.image_url}
                alt={item.title}
                width={1920}
                height={1080}
                fetchPriority={index === 0 ? "high" : "low"}
                loading={index === 0 ? "eager" : "lazy"}
                decoding={index === 0 ? "sync" : "async"}
              />
            </picture>
            <div className="hero-banner__content absolute bottom-0 left-0 w-full bg-trans500 px-3 pb-10 pt-6 lg:px-6 lg:py-10">
              <div className="grid grid-cols-1 gap-[10px] lg:grid-cols-3">
                <div>
                  <p className="hero-banner__subtitle mb-2 font-poppins text-[10px]/[15px] font-semibold tracking-normal text-white lg:font-arial lg:text-xs/[14px] lg:font-bold">
                    {item.subtitle}
                  </p>
                  <h2 className="hero-banner__title mb-4 font-roboto text-4xl/[42px] font-normal tracking-normal text-white lg:font-arial lg:text-14/[64px]">
                    {item.title}
                  </h2>
                  <p className="hero-banner__description mb-4 font-poppins text-[10px]/[15px] font-normal tracking-normal text-white lg:font-arial lg:text-xs/[14px]">
                    {item.description}
                  </p>
                  <div className="hero-banner__action space-x-2">
                    {item.buttons.map((btn, index) => (
                      <a
                        key={btn.label}
                        className={`hero-banner__btn group inline-block border px-6 py-[11px] font-poppins text-[12px]/[18px] font-semibold tracking-[-0.2px] transition-all duration-200 ease-out lg:font-arial lg:text-xs/[14px] lg:font-bold ${
                          index === 0
                            ? "border-white bg-white text-black hover:border-white hover:bg-transparent hover:text-white"
                            : "border-white bg-transparent text-white hover:border-transparent hover:bg-white hover:text-black"
                        }`}
                        href={btn.url}
                      >
                        <span className="inline-block transition-transform duration-200 ease-out group-hover:scale-110">
                          {btn.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
