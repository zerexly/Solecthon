import Swiper from "swiper";
import "swiper/css";
import { SwiperSlide } from "swiper/element";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import TextD from "@/helpers/textHelpers";
import { FaArrowUp } from "react-icons/fa";
let swiper: any;
const goToSlide = (index: number) => {
  if (swiper.current) {
    swiper.current.slideTo(index);
  }
};

const C_Slider = () => {
  swiper = useRef<Swiper | null | undefined>(null);
  const [active_Swiper, setActiveSwiper] = useState<number | any>(0); // Use state to store active slide index
  const [scrollPosition, setScrollPosition] = useState(0);
  function GetIndexes (){
    const indexes = [];
    for (let i = 0; i < TextD.Models.length; i++) {
      indexes.push(i);
    }
    return indexes;
  }
  const activeSwipers: any = GetIndexes(); 

  const BButtons = () => {
    return (
      <>
        {activeSwipers.map((activeSwiperValue: number, index: number) => (
          <div key={index}>
            {active_Swiper !== activeSwiperValue ? (
              <Button
                label={
                  TextD.Models && TextD.Models[`${activeSwiperValue}`]?.name
                }
              />
            ) : (
              <Button label="X" />
            )}
          </div>
        ))}
      </>
    );
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    const HandleClick = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const className = scrollPosition > 100 ? "ac" : "ia";
  useEffect(() => {
    if (swiper.current === null) {
      swiper.current = new Swiper(".ModelsContainer", {
        loop: false,
        autoplay: false,
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

    // console.log(swiper);
    if (!swiper.current) return;
    swiper.current.on("slideChange", function () {
      setActiveSwiper(swiper.current?.activeIndex);
    });
  }, []);

  return (
    <>
      <div
        className={`${className === "ia" ? "hidden" : className}`}
        aria-label={`${className}`}
        id="T"
      >
        <div aria-label="Scroll-Top">
          <button
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="rounded-md bg-green-600 p-3 hover:bg-green-800 hover:-translate-y-5 shadow-lg animate-bounce shadow-slate-700 duration-700 delay-200 transition-all"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
      {/* <div className="FollowCursor hover:scale-90" ></div> */}
      <section className="mt-[5%] swiper ModelsContainer ">
        <div className="swiper-wrapper">
          {TextD.Models.map((m: any) => {
            return (
              <div className="M_Container swiper-slide" key={m.index}>
                <div className="grid grid-cols-2 xsm:grid-cols-1 xxsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mr-10 ml-10 place-items-center M_Start">
                  <div key={`T_${m.index}`}>
                    <h1
                      className="M-Name font-bold font-sans xsm:text-2xl xxsm:text-xl text-3xl md:text-4xl lg:text-5xl
                    
                    "
                    >
                      {m.name}
                    </h1>
                  </div>
                  <div
                    className="M-Images flex justify-center hover:scale-110 transition-all duration-100 ease-in-out"
                    key={m.index + 1}
                  >
                    <Image
                      width={5000}
                      height={5000}
                      src={`${m.image}`}
                      alt={`${m.name}`}
                      key={m.index + 1}
                      className="w-[500px] h-[350px] object-contain object-center "
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className=" overflow-x-hidden">
        <div>
          <div className="button-container">
            <BButtons />
          </div>
        </div>
      </section>
      <section>
        <div className=" flex justify-center">
          <div className="mt-14 flex h-10 w-10 items-center justify-center rounded-full ">
            <svg
              className="h-6 w-6 animate-bounce text-white"
              fill="[0]"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>{" "}
        <br />
        <div>
          <svg
            className={`darksvg fill relative w-max  `}
            x="0px"
            y="0px"
            viewBox="0 186.5 1920 113.5"
          >
            <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300"></polygon>
          </svg>
        </div>
      </section>
    </>
  );
};

export default C_Slider;

const Button = ({ label }: string | any) => {
  const FindIndex = (x: string) => {
    for (let i = 0; i < TextD.Models.length; i++) {
      if (TextD.Models[i].name === x) {
        return i as number;
      }
    }
  };
  if (label === "W" || label === "X") {
    return (
      <div className="button-container">
        <button className=" rounded-md rounded-s-3xl rounded-e-2xl rounded-t-lg rounded-r-2xl rounded-br-md border xxsm:p-2 xsm:p-2 lg:p-4 xl:p-4 md:p-4 p-4">
          Buy It
        </button>
        <hr className="line xxsm:w-4 xsm:w-9 sm:w-9 md:w-10 lg:w-[100px] xl:w-[100px] w-[100px]" />
      </div>
    );
  }
  return (
    <div className="button-wrapper">
      <button
        className="button"
        onClick={() => {
          const index = FindIndex(label);
          if (typeof index === "number") {
            goToSlide(index);
          }
        }}
      >
        {label}
      </button>
      <p> &bull;</p>
      <hr className="line xxsm:w-4 xsm:w-9 sm:w-9 md:w-10 lg:w-[100px] xl:w-[100px] w-[100px]" />
    </div>
  );
};
