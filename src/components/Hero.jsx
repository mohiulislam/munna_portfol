import React from "react";
import Avater from "../assets/images/avater.jpg";

function Hero() {
  return (
    <section className=" w-full grid grid-cols-12 justify-items-center  items-center  mt-36">
      <div className="col-span-6 font-Righteous text-secondary">
        <h1 className="text-3xl">
          Hello,
          <br /> I am here,
          <br />
          To help you,
          <br /> to grow your <br /> business digitally.
        </h1>
      </div>
      <div className="flex h-52 w-52 col-span-6  rounded-lg back">
        <img src={Avater} alt="" />
      </div>
    </section>
  );
}

export default Hero;
