import { MdPrivacyTip } from "react-icons/md";
import { AiFillRightSquare, AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import {
  FaShippingFast,
  FaMoneyCheckAlt,
  FaInstagramSquare,
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaMailBulk,
  FaLocationArrow,
} from "react-icons/fa";
import Link from "next/link";
// import `Router from "@/h`elpers/`routers";
const Data: any = [
  {
    Buttons: {
      Insta: "/",
      Fb: "/",
      LinkedIn: "/",
    },
  },
  {
    ContactInfo: [
      {
        Icon: <FaPhone />,
        Title: "Team No.",
        Info: "+91 77096 13664",
        Link: "tel:+91 77096 13664",
        NoTitleUsage : false,
      },
      {
        Icon: <FaPhone />,
        Title: "Captain No.",
        Info: "+91 77096 13664",
        Link: "tel:+91 77096 13664",
        NoTitleUsage : false,
      },
      {
        Icon: <FaPhone />,
        Title: "General Manager No.",
        Info: "+91 77096 13664",
        Link: "tel:+91 77096 13664",
        NoTitleUsage : false,
      },
      {
        Icon: <FaMailBulk />,
        Title: "Team Email",
        Info: "xxx@gmail.com",
        Link: "mailto:xxx@gmail.com",
        NoTitleUsage : true,
      },
      {
        Icon: <FaLocationArrow />,
        Title: "Adres xxx YYY zzz",
        Info: "Adres xxx YYY zzz",
        Link: "https://goo.gl/maps/xxxxx",
        NoTitleUsage : true,
      },
    ],
  },
];
export default function Footer() {
  return (
    <main>
      <footer className="bg-gray-900">
        <div className="max-w-max m-auto text-gray-900 flex flex-wrap justify-center pb-10">
          <div className=" justify-start  w-[100px] mt-10 mr-20 mb-10">
            <Image width={500} height={500} loading="lazy"
              src="/Logo.png"
              alt="Logo"
              className="rounded-full relative mb-4"
            />

            <div className=" text-white grid grid-cols-3 absolute gap-x-5">
              {Object.keys(Data[0].Buttons).map((i, index) => {
                return (
                  <div className="" key={index + i.length + i}>
                    <a
                      href={Data[0].Buttons[i]}
                      className="text-white font-sans font-bold text-start text-lg"
                    >
                      {i === "Insta" ? (
                        <>
                          <FaInstagram className="text-2xl text-pink-700 hover:text-pink-900 hover:-translate-y-2 duration-200 transition-all" />{" "}
                        </>
                      ) : i === "Fb" ? (
                        <>
                          <FaFacebook className="text-2xl text-blue-600 hover:text-blue-800 hover:-translate-y-2 duration-200 transition-all" />
                        </>
                      ) : i === "LinkedIn" ? (
                        <>
                          <FaLinkedin className="text-2xl text-blue-400 hover:text-blue-500 hover:-translate-y-2 duration-200 transition-all" />
                        </>
                      ) : (
                        i
                      )}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Col-1 */}
          <div className="p-5 w-[auto]">
            <div className="text-xl uppercase text-gray-400 font-medium mb-6">
              Contact Info
            </div>
            {Data[1].ContactInfo.map((i: any, index: any) => {
              return (<div className=" rounded-lg" key={index + i.Title}>
                    <p className="text-sm uppercase text-gray-500 font-semibold mb-2">{i.NoTitleUsage === true ? null : i.Title}</p>
                <Link
                  href={i.Link}
                  className="my-3 text-gray-300 hover:text-red-600 text-sm font-medium flex items-center hover:scale-110 duration-200 transition-all"
                  key={index + i.Info.length + i.Title}
                >
                  
                    <div className="flex items-center">
                      <div className="mr-2 hover:scale-110">{i.Icon}</div>
                      <div className="text-sm  text-gray-400 hover:scale-110 duration-200 transition-all">{i.Info}</div>
                    </div>
                  
                </Link></div>
              );
            })}
          </div>
          
        </div>
        <div className="flex justify-center text-center mb-1  bg-gradient-to-r from-zinc-900 to-gray-800 rounded-lg">
        <p>© 2021-2023 Solecthon</p>
        </div>
      </footer>
    </main>
  );
}
