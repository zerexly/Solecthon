/**
 * B2 : Body Section 2
 * P: Parts of the page
 */

import TextD from "@/helpers/textHelpers";
import Image from "next/image";


const C_B2: React.FC = () => {
  return (
    <>
      {/**Section B2_P1 */}
      <section className="bodyS">
        <section className="mb-[5%] relative ml-20 md:ml-20 lg:ml-20 xl:ml-20 sm:ml-4 xsm:ml-4 xxsm:ml-2 grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 xxsm:grid-cols-1 gap-10">
          <div>
            <p className="font-bold font-mono text-start text-2xl left-6">
              A STEP TOWARDS STABILITY.
            </p>
            <Image width={500} height={500} loading="lazy"
              src="https://solecthon-recruitment.netlify.app/assets/images/footer-shape-3.png"
              alt=""
              className="rotate-180"
            />
          </div>
          <div className="relative flex justify-end pt-32 lg:pt-32 md:pt-32 sm:pt-24 xsm:pt-10 xxsm:pt-5">
            <p>
              From a design project of any complexity — to the embodiment. We
              create interiors « turnkey »: we prepare design documentation, do
              construction and finishing work, decorate.
            </p>
          </div>
        </section>
        <hr className="rounded-lg border-zinc-700 ml-64" />
        {/**Section B2_P2 */}
        <section className="mb-[30%] flex justify-end bg-gray mt-[100px]">
          <div className="S2-wrapper">
            <div className=" right-0 h-[100%] ">
              <div className="absolute justify-end z-10 right-0 mr-10">
                <Image width={500} height={500} loading="lazy"
                  src="https://solecthon-recruitment.netlify.app/assets/images/footer-shape-2.png"
                  alt=""
                  className="rotate-180 w-[100px] justify-end "
                />
              </div>
              <div className=" grid justify-end grid-cols-2">
                <div className=" justify-start ml-20 md:ml-20 lg:ml-20 xl:ml-20 sm:ml-4 xsm:ml-4 xxsm:ml-2">
                  <p className="text-2xl font-sans font-bold mt-10 md:text-2xl lg:text-2xl xl:text-2xl sm:text-lg xsm:text-lg xxsm:text-xl">
                    WORLDS BEST SOLAR ELECTRIC AUTONOMOUS CAR
                  </p>
                  <div className="flex justify-center mt-10">
                    <button className="bg-gradient-to-tr from-red-700 to-orange-500 rounded-md p-4 ">
                      Our Sub-Systems
                    </button>
                  </div>
                </div>
                <div className="flex justify-end  right-0 mr-10">
                  <Image width={500} height={500} loading="lazy" 
                    draggable={false}
                    src="/V_1.jpeg"
                    alt=""
                    className="w-[50%] h-full object-cover rounded-md hover:scale-110  cursor-pointer md:block lg:block xl:block sm:block xsm:hidden xxsm:hidden "
                  />
                </div>
                <hr className=" border-zinc-800 rounded-md" />
              </div>
            </div>
          </div>
          
        </section>
        
        {/**Section B2_P3 Services_Map(<void>) */}
        <div
          aria-label="SubSystem-Heading"
          className="uppercase font-mono text-2xl text-center pt-[5%]"
        >
          <p>How We Create Our Cars From Scratch</p>
        </div>
        <section className=" mI flex justify-center py-10  pb-[30%] sm:pb-[50%]">
          <MobileSubSystem />
          <div className="MI mt-[0%] md:block lg:block  sm:hidden xsm:hidden xxsm:hidden ">
            <Image width={500} height={500} loading="lazy"
              draggable={false}
              src="https://solecthon-recruitment.netlify.app/assets/images/6.0-main-removebg-preview.png"
              alt="Main"
              className="flex justify-center ml-[1%] MITabImage"
            />
            {TextD.SubSystem.map((service, index) => {
              return (
                <>
                  <div className="SI">
                    <img  loading="lazy"
                      src={`${service.image}`}
                      alt=""
                      className="rounded-full max-h-40 max-w-sm sm:max-w-xs sm:max-h-20 "
                    />
                    <h1 className="text-black font-sans font-bold text-start text-lg">
                      {service.headings}
                    </h1>
                    <p>{service.description}</p>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </section>
      <section>
        <hr className="border border-gray-800 mr-[30%]" />
        <P_AboutStart />
      </section>
    </>
  );
};
export default C_B2;

const MobileSubSystem: React.FC = () => {
  return (
    <div
      className="hidden md:hidden lg:hidden xl:hidden sm:block xsm:block xxsm:block"
      aria-label="MobileSubSystem"
    >
      <div className="grid gap-x-20 gap-y-10 sm:grid-cols-2 xsm:grid-cols-1 xxsm:grid-cols-1 mr-10 ml-10">
        {TextD.SubSystem.map((service, index) => {
          return (
            <div
              aria-label={`${service.headings}`}
              key={index + service.headings.length}
            >
              <div className="Wrapper ">
                <div
                  aria-label={`${index}Image-SubSystem`}
                  className="flex justify-center mb-3"
                >
                  <Image
                    draggable={false}
                    src={`${service.image}`}
                    alt={`${service.headings}`}
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                </div>
                <p className="text-center text-lg font-bold text-gray-600">
                  {service.headings}
                </p>
                <p className="text-center text-gray-300">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const P_AboutStart: React.FC = () => {

  return (
    <>
      <div className="flex justify-center items-center bg-gray-900 pt-10 pb-10 ">
        <div className="relative">
          {/* <div className="revolving-circle"></div> */}
          <div className="text-center font-mono font-bold text-4xl relative z-10 Text_AboutUs bg-gray-900 pb-[30%]">
            About Us
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div
          className={` xsm:w-[30%] xxsm:w-[20%] sm:w-[30%] md:w-[5%] lg:w-[5%] xl:w-[5%]
        lg:mt-[15%] lg:ml-[3%] 
        md:mt-[15%] md:ml-[3%]
        xsm:ml-[10%]
        xxsm:ml-[5%]
         md:absolute lg:absolute xl:absolute sm:block xsm:block xxsm:block 
         sm:ml-[10%]  
        sm:bg-gray-900 xsm:bg-gray-900 xxsm:bg-gray-900
        
        B2_LogoI_Center  left-[43%] absolute  w-[10%] shadow-xl shadow-black hover:shadow-slate-900 cursor-pointer hover:border border-pink-400`}
        >
          <Image width={500} height={500} loading="lazy"
            draggable={false}
            src="https://solecthon-recruitment.netlify.app/assets/images/solgo.png"
            alt=""
          />
        </div>
      </div>
      <div className="wrapper bg-gray-900">
        <div className="grid grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 xxsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xlg:grid-cols-2 ">
          <div className="cursor-pointer">
            <Image 
              draggable={false}
              width={1000}
              height={1000}
              src="https://solecthon-recruitment.netlify.app/assets/images/about-abs-banner.png"
              alt=""
              className="sm:hidden xsm:hidden xxsm:hidden md:block lg:block xlg:block"
            />
          </div>
          <div className="xxsm:mt-[10%]">
            <div className=" p-10">
              <p className="text-4xl font-bold font-mono justify-start text-start">
                WE&apos;RE COMMITED TO MEET THE QUALITY
              </p>
              <p className="text-justify">
                Here at vcet solecthon we work hard to make our car perfect and
                different from the world! We never stop learning , new ideas
                implement everytime which makes us differenet from the herd.
              </p>
            </div>
            {/**Boxes as Content Containers */}
            <div className="grid grid-cols-2 gap-x-5 gap-y-3 mr-10 ml-10 sm:mr-3 xsm:mr-3 xxsm:mr-3 sm:ml-3 xsm:ml-3 xxsm:ml-3">
              {TextD.AboutUsBoxes.map((box, index) => {
                return (
                  <div
                    className="flex justify-center items-center bg-gradient-radial from-orange-400 to-red-700 rounded-md hover:from-orange-400 hover:to-orange-500 cursor-pointer hover:scale-110 transition-all duration-100"
                    key={`Id B ${index.toExponential()}`}
                  >
                    <div className="flex justify-center items-center flex-col p-5  ">
                      <p className="text-4xl font-bold font-mono justify-start text-start ">
                        {box.heading}
                      </p>
                      <p className="text-justify">{box.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
