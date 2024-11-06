import Image from "next/image";
import HeaderFooter from "@/components/layout/layout"
import {backgroundIMage} from "../../public/icons/index"
export default function Home() {
  return (
    <HeaderFooter>
      <div className="w-full h-full flex flex-col ">
        
        <div className="w-full h-fit flex relative bg-white">
          <div className="w-[20%] h-full absolute z-[3]">

          </div>
          <div className="w-full px-36 flex gap-10 flex-col justify-center h-full absolute z-[4] bg-[#172755]/85">
              <h3 className="w-fit text-[60px] leading-[48px] font-semibold text-white mt-10">Empowering Your Business with Cutting- <br /><span className="flex justify-center mt-8">Edge Solutions</span></h3>
              <p className="text-xl items-center text-white px-72 mt-8">Join us in transforming the way you operate for better efficiency and growth.</p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
               <button className="border border-gray-800 py-4 w-96 px-9 rounded-md focus:outline-none">
                Enter Your Email Address
              </button>
              <button className="bg-[#EF2AB2] text-white py-4 px-6 rounded-md focus:outline-none">
              Get Started Today
              </button>
          </div>
          </div>
          <div className="h-[703px] w-full object-cover" style={{
          }}>

          </div>
        </div>
      </div>
    </HeaderFooter>
  );
}
