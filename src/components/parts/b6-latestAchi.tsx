import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import Image from "next/image";
import { SwiperSlide } from "swiper/element";
import { SwiperRef } from "swiper/react";
import TextD from "@/helpers/textHelpers";
let swiperr: any;

const C_B6: React.FC = () => {
  swiperr = useRef<SwiperRef | null | undefined>(null);
  const [active_Swiper, setActiveSwiper] = useState<number | any>(0);

  useEffect(() => {
    if (swiperr.current === null) {
      swiperr.current = new Swiper(".AchiContainer", {
        loop: false,
        direction: "horizontal",

        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
          reverseDirection: true,
        },
        effect: "coverflow",
        cubeEffect: {
          shadow: true,
          slideShadows: true,
        },
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        spaceBetween: 0,
      });
    }

    console.log(swiperr);
    if (!swiperr.current) return;
    swiperr.current.on("slideChange", function () {
      setActiveSwiper(swiperr.current?.activeIndex);
    });
  }, []);
  let z :number= swiperr.current?.slides.length ?? NaN;
  let y :number= swiperr.current?.activeIndex + 1;
  let c :number = 0;
  for(let i = 0; i < TextD.LatestAchievements.length; i++){
    c ++;
  }
  if(isNaN(y)) y=1;
  if(isNaN(z)) z=c;

  return (
    <>
    <div className="mt-[10%] mb-[calc(5%)] text-center uppercase">
            <p className="text-2xl font-mono">OUR LATEST ACHIEVEMENTS</p>
        </div>
      <section className=" mb-[calc(10%)] swiper AchiContainer relative ">
        
        <div className="swiper-wrapper">
          {TextD.LatestAchievements.map((m, index) => {
            return (
              <div className="M_Container swiper-slide" key={index}>
                <div className="grid grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 xxsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mr-10 ml-10 place-items-center M_Start">
                  <div key={`T_${m.AchievementName.length}`}>
                    <h1 className="M-Name font-bold font-sans text-3xl md:text-3xl lg:text-5xl sm:pt-16 xsm:pt-20 xxsm:pt-16 md:pt-20 ">
                      {m.AchievementName}
                    </h1>
                  </div>
                  <div
                    className="M-Images flex justify-center hover:scale-110 transition-all duration-100 ease-in-out rounded-md "
                    key={1 + index + m.AchievementName.length}
                  >
                    <Image
                      width={1000}
                      height={1000}
                      src={`${m.AchievementImage}`}
                      alt={`${m.AchievementName}`}
                      key={2 + index + m.AchievementName.length}
                      className="w-[500px] h-[350px] object-contain object-center rounded-md "
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute top-0 left-7">
          <div className="text-center">
           <div className=" bg-gradient-to-br from-orange-400 to-pink-500"></div>
            <div className="text-lg font-bold text-white  div-2 rounded-md bg-gradient-to-br from-zinc-900 to-transparent drop-shadow-md shadow-md  shadow-slate-400 p-3 md:p-3 lg:p-3 xl:p-3 sm:p-2 xsm:p-1 xxsm:p-1"> 
              <p>{y}/{z}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default C_B6;
