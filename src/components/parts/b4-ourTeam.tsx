import TextD from "@/helpers/textHelpers";
import Image from "next/image";

const C_B4: React.FC = () => {

  return (
    <>
      <section>
        <div className="flex justify-center mt-[10%] mb-10">
          <p className="text-center text-3xl font-mono">Team Members</p>
        </div>
        <div className="TWrapper grid grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 xxsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20 gap-y-6 mr-[7%] ml-[7%] mb-[5%] ">
          {TextD.Team.map((data, index) => {
            return (
              <>
                <div className="Card- relative" key={index + data.name.length}>
                  <div className="TeamBgAnimation absolute translate-x-[5%] translate-y-5"></div>
                  <div className="TeamBgAnimation2 absolute translate-x-[80%] translate-y-28"></div>
                  <div className="rounded-md glass overflow-hidden">
                    <div>
                      <div className="label absolute bg-[#df37373f] z-30 translate-x-[-48%] translate-y-[-90%] -rotate-45 w-72 p-1 shadow-lg ">
                        <p className="text-center font-sans text-gray-900 font-bold">
                          {data.designation}
                        </p>
                      </div>
                      <div className="PImg1 flex justify-center mt-3 mb-5 relative overflow-hidden">
                        <Image
                          src={`${data.image}`}
                          alt={`${data.name}`}
                          width={1000}
                          height={1000}
                          draggable={false}
                          loading="lazy"
                          className=" h-[200px] w-[200px] rounded-full object-cover object-center "
                        />
                      </div>
                      <div>
                        <p className="text-center font-bold text-lg font-sans ">
                          {data.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default C_B4;
