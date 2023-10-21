import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
const Data = [
  {
    linkName: "Home",
    link: "/",
    part: 1,
  },
  {
    linkName: "About Us",
    link: "/about",
    part: 2,
  },
  {
    linkName: "Projects",
    link: "/projects",
    part: 2,
  },
  {
    linkName: "Team",
    link: "/team",
    part: 2,
  },
  {
    linkName: "Contact Us",
    link: "/contact",
    part: 3,
  },
];
const Navbar: React.FC = () => {
  const [active, setActive] = useState(false);
  const StateUpdate = () => {
    setActive(!active);
  };
  useEffect(() => {
    if (active === false) {
      document.body.style.overflow = "unset";
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      document.body.style.overflow = "hidden";
    }
  }, [active]);
  return (
    <div className="flex  bg-zinc-950 text-black shadow-sm font-mono font-bold">
      <nav className="h-screen w-[70px] md:w-[70px] lg:w-[70px] sm:w-[50px] xsm:w-[50px] xxsm:w-[50px] xl:w-[70px] z-[100] fixed top-0 left-0 bg-transparent  justify-center">
        <div className="">
          {active === true ? (
            <div className="text-white fixed left-[calc(45vw)] xl:left-[calc(45vw)] lg:left-[calc(45vw)] md:left-[calc(45vw)] sm:left-[calc(20vw)] xsm:left-[calc(20vw)] xxsm:left-[calc(20vw)] md:top-0 lg:top-0 xl:top-0 sm:top-10 xsm:top-10 xxsm:top-10 mt-5">
              <Image
                width={1000}
                height={1000}
                loading="lazy"
                src="https://solecthon-recruitment.netlify.app/assets/images/solgo.png"
                alt="Logo"
                draggable={false}
                className={`object-cover object-center mt-0  ${
                  active ? " left-[calc(92vw/2.2)] fixed w-[40px]" : ""
                } transition-all duration-1000 ease-in-out  rounded-full LBorderAnimation
              w-[60px] md:w-[60px] lg:w-[60px] xl:w-[60px] sm:w-[50px] xsm:w-[40px] xxsm:w-[30px]
              sm:top-2 xsm:top-2 xxsm:top-2 md:top-0 lg:top-0 xl:top-0
              `}
              />
              <div className="text-3xl font-bold font-mono text-center">
                Solecthon
              </div>
              <div className="text-md mt-5 text-center">
                A step towards stability
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <Image
                width={1000}
                height={1000}
                loading="lazy"
                src="https://solecthon-recruitment.netlify.app/assets/images/solgo.png"
                alt="Logo"
                draggable={false}
                className={`object-cover object-center mt-10 w-[60px] ${
                  active ? " left-[calc(100vh/1.1)] fixed w-[40px]" : ""
                } transition-all duration-1000 ease-in-out  rounded-full LBorderAnimation
              w-[60px] md:w-[60px] lg:w-[60px] xl:w-[60px] sm:w-[50px] xsm:w-[40px] xxsm:w-[30px]`}
              />
            </div>
          )}
          <div
            className={`flex justify-center hamburger-s ${
              active ? "active" : ""
            }`}
            onClick={StateUpdate}
          >
            {active === false ? (
              <RxHamburgerMenu
                className={`text-4xl text-white hover:scale-110 md:text-2xl lg:text-4xl xl:text-4xl sm:text-xl xsm:text-xl xxsm:text-xl `}
              />
            ) : (
              <RxCross1
                className={`text-4xl text-white hover:rotate-180 hover:text-red-500 md:text-2xl lg:text-4xl xl:text-4xl sm:text-xl xsm:text-xl xxsm:text-xl`}
              />
            )}
          </div>
        </div>
      </nav>
      {active === false ? (
        <></>
      ) : (
        <>
          <div className="flex flex-col h-screen w-screen">
            <div
              className={`flex-grow w-full transition-all duration-300 fade-in-out ${
                active ? "active" : ""
              }`}
            >
              <div className="w-full pl-[10%]">
                <div className="lg:mr-[40%] xl:mr-[40%] md:mr-[40%] duration-200 transition-all mt-[calc(100vh/2)] xl:mt-[calc(100vh/2)] lg:mt-[calc(100vh/2)] md:mt-[calc(100vh/2)] sm:mt-[calc(100vh/2.5)] xsm:mt-[calc(100vh/2.5)] xxsm:xsm:mt-[calc(100vh/2.5)]">
                  <div className="container grid grid-flow-row grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 xsm:grid-cols-1 xxsm:grid-cols-1 gap-y-5 sm:ml-[30%] xsm:ml-[30%] xxsm:ml-[30%] text-white">
                    {Data.filter((x) => x.part === 1).map((data) => (
                      <div key={data.linkName}>
                        <Link
                          href={`${data.link}`}
                          className={`hover:text-red-500 hover:text-lg hover:uppercase underline-offset-8 transition-all duration-1000 ease-in-out`}
                        >
                          {data.linkName}
                        </Link>
                      </div>
                    ))}

                    {Data.filter((x) => x.part === 2).map((data) => (
                      <div key={data.linkName}>
                        <Link
                          href={`${data.link}`}
                          className={`hover:text-red-500 hover:text-lg hover:uppercase underline-offset-8 transition-all duration-1000 ease-in-out`}
                        >
                          {data.linkName}
                        </Link>
                      </div>
                    ))}

                    {Data.filter((x) => x.part === 3).map((data) => (
                      <div key={data.linkName}>
                        <Link
                          href={`${data.link}`}
                          className={`hover:text-red-500 hover:text-lg hover:uppercase underline-offset-8 transition-all duration-1000 ease-in-out`}
                        >
                          {data.linkName}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <footer className=" text-gray-700 py-4">
              <div className="flex items-center justify-center">
                {/* <img
        src="https://solecthon-recruitment.netlify.app/assets/images/solgo.png"
        alt="Logo"
        className="object-cover object-center w-5 h-5 mr-2"
      /> */}
                <p className="text-md">© 2021-2023 Solecthon</p>
              </div>
            </footer>
          </div>
        </>
      )}
    </div>
  );
};
export default Navbar;
