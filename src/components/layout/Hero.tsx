import Image from "next/image";
import HeaderFooter from "@/components/layout/layout";

export default function Home() {
  return (
    <HeaderFooter>
      <div className="relative w-full min-h-screen flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-[1]">
        </div>
        
        {/* Content */}
        <div className="relative z-[2] flex flex-col justify-center items-center bg-[#172755]/85 min-h-screen w-full px-36 gap-10">
          <h3 className="text-[60px] leading-[48px] font-semibold text-white mt-60 text-center">
            Empowering Your Business with Cutting- <br />
            <span className="block mt-8">Edge Solutions</span>
          </h3>
          <p className="text-xl text-center text-white mt-8 max-w-3xl">
            Join us in transforming the way you operate for better efficiency and growth.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button className="border border-gray-800 py-4 px-9 w-96 rounded-md text-white focus:outline-none">
              Enter Your Email Address
            </button>
            <button className="bg-[#EF2AB2] text-white py-4 px-6 rounded-md focus:outline-none">
              Get Started Today
            </button>
          </div>
          
          {/* Image */}
          <div className="flex justify-center mb-6">
            <img 
              src="https://s3-alpha-sig.figma.com/img/ffb9/be62/9ee525d77d9a9a5b6f0ce3ed7580fc7e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PVpRU9mnEg4wxpP98LRPk8L8hzSZVKRrj9QNoa-bk2ReZ~V~k-KmM5P85aHHNmccHy~Tl3RUoK-YdsKU5-iJYJc7CF2UtGbzNPcuNQaNUe3Lo55bjSzlIdbxrbWzr~PoEIJblnpUnUkVsXQavAMdYERtpd8HslX5s-LyQHNQuyqEUTnUgvTCb4L9jUFbx6nF9uGrZ3QfW4aptxRdJU5VRsjjGnLxVe62YH-pgRZymScNzgXV0ZzbEVouxEKzdPiGV1aNV7qjQ4N94c1S2eKUUWy5I-SrpVoeQgaq4Le2L1L0JolQ8DGkSzr-uZVvqKrz~Wji99E-l~FVANJBIoeMLA__"
              alt="Business Image"
              className="w-[700px] h-[300px]"
            />
          </div>
        </div>
      </div>
    </HeaderFooter>
  );
}
