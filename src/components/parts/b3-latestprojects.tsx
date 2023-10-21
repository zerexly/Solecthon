import React, { useEffect, useState } from "react";
import Image from "next/image";
import TextD from "@/helpers/textHelpers";

const C_B3: React.FC = () => {
  const ColourShuffle = [
    "bg-blue-800",
    "bg-orange-800",
    "bg-green-800",
    "bg-yellow-800",
    "bg-red-800",
    "bg-pink-800",
  ];

  const [colors, setColors] = useState(Array(6).fill(""));
  function shuffleArray() {
    const newColors = [];
    for (let i = 0; i < 6; i++) {
      newColors.push(
        ColourShuffle[Math.floor(Math.random() * ColourShuffle.length)]
      );
    }
    setColors(newColors);
  }
  useEffect(() => {
    const intervalId = setInterval(shuffleArray, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  interface Props {
    image: string;
    Name: string;
    description: string;
  }


  return (
    <>
      <section>
        <div id="light" className="mt-5 absolute top-[50%] translate-y-28">
          {colors.map((colorClass, index) => (
            <div
              key={index}
              id={`l${index}`}
              className={`box h-[15px] rounded-full ${colorClass} animateL`}
            ></div>
          ))}
        </div>

        <div className="Wrapper mt-[10%] mb-10 mr-10 ml-20 sm:mr-1 xsm:mr-1 xxsm:mr-1 sm:ml-1 xsm:ml-1 xxsm:ml-1 ">
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold text-white uppercase text-center font-mono mb-[7%]">
              Latest Projects
            </h1>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 xxsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
            {TextD.LatestProjects.map((Cd, index) => {
              return (
                <div className="glass filter relative" key={index}>
                  <div className="H mb-5 rounded-md hover:scale-125 cursor-pointer duration-100 transition-all ">
                    <Image
                      src={`${Cd.Image}`}
                      alt={`${Cd.Name}`}
                      width={1000}
                      height={1000}
                      draggable={false}
                    />
                  </div>
                  <div className="content">
                    <h2 className="text-white text-3xl font-bold">{Cd.Name}</h2>
                    <p className="text-white text-xl font-bold">
                      {Cd.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default C_B3;
