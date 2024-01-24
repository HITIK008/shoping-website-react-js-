import React from "react";
//import women photo
import WomanImg from "../img/woman_hero.png";
//import Link
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
  
      <div className="conatiner mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center">
            <div className="flex justify-center items-center mb-2 bg-red-400 font-bold" >New Trend </div>
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">HP'S SALE STYLISH <br/>
          <span className="font-semibold">Womens</span></h1>

          
          <Link to={'/'} className="self-start uppercase font-bold border-b-2 border-primary">
          Discover More

          </Link>
        </div>

        <div className="hidden lg:block">
       <img src={WomanImg} alt=""/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
