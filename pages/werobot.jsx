import Navbar from "@/components/Navbar";
import ModelItem from "@/components/ModelItem";
import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

const model3 = () => {
  return (
    <>
      <Navbar
        position="absolute"
        textColor={"text-[#ffffff]"}
        logoColor={"invert"}
      />
      <div className="w-full h-screen bg-model-we-robot-details">
        <div className="flex flex-col justify-between h-full py-10">
          <div className="flex flex-col mt-12 max-w-[90%] mx-auto">
          <div className="flex flex-col">
            <h1 className="text-4xl text-white font-mono font-medium text-left pt-20">WE,<br /> ROBOT</h1>
          </div>
          </div>
          <div className="w-full h-32 md:w-[50%] max-w-[90%] mx-auto flex justify-center text-white">
            <div className="flex flex-col w-full items-center justify-around">
              <div className="w-full md:w-[40%] flex flex-col md:flex-row items-center justify-center mx-auto pt-6">
                <Link
                  href="/"
                  className="hover:bg-white/90 hover:text-black mr-2 w-full mx-auto text-center m-2 my-2 md:my-0 rounded-t rounded-bl text-white text-sm h-full cursor-pointer border-4 duration-300"
                >
                  <span className="py-1 mt-1 flex items-center justify-center h-full my-auto">
                    Order Now
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="bg-black py-16 w-full mx-auto text-center text-3xl -tracking-wide text-white flex items-center justify-center">
        The Future Is Autonomous
      </h1>
      <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/We-Robot-Carousel-Slide-2-Robovan-Desktop.png" />
      <Footer />
    </>
  );
};

export default model3;
