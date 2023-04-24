import React from "react";
import { ArrowOne, BookPath, HeroMark } from "../../assets/AppIcons";
import Hero from './../../assets/img/Hero_img.png'

const HeroSection = () => {
  return (
    <section className="hero-section grid grid-cols-12 gap-5  justify-center items-center h-min-screen h-auto relative auto-cols-auto">
      <div className="hero-heading grid col-span-10 mx-auto "></div>
      <div className="hero-left-section  grid col-start-2 md:col-start-2 col-span-10 sm:col-span-10   md:col-span-5 max-h-[31rem] items-between order-2 gap-24  md:order-none">
        <div className="hero-master-heading text-5xl lg:text-6xl 2xl:text-7xl font-semibold text-center md:text-left break-words whitespace-pre-wrap">
          Elevate your learning experience with{" "}
          <span className="text-orange-600 relative">
            LearnerLab
            <span className="absolute top-24 right-[-2rem] shrink ">
              <HeroMark />
            </span>
          </span>
        </div>
        <div className="hero-sub-heading lg:text-2xl 2xl:text-4xl text-center md:text-left text-gray-400 break-words whitespace-pre-wrap">
          Transform the way you Learn, Teach & Connect with Learner Lab's Innovative
          Solutions.
        </div>
        <div className="get-started-button text-center md:text-left ">
          {/* <button className="btn-get-started text-2xl font-semibold w-[19rem] h-[4rem] rounded-full bg-black text-neutral-50 relative">
            Get Started
            <span className="image-doodle-1 absolute right-[-8rem] bottom-[1rem] hidden md:flex">
              <ArrowOne />
            </span>
          </button> */}
        </div>
      </div>
      <div
        className="hero-right-section  col-start-2 grid col-span-10 sm:col-span-10 md:col-span-5 min-h-[48rem] shrink bg-contain bg-right bg-no-repeat"
        style={{ backgroundImage: `url(${Hero})` }}
      ></div>
      {/* <div className="image-doodle-1 absolute  md:left-[12rem] bottom-[16rem] transform scale-[65%] translate-x-[-16rem] lg:transform-none">
        <BookPath />
      </div> */}
      <div className="stats-container grid col-start-2 sm:col-start-2 col-span-10 sm:col-span-10 h-[7rem] md:h-[9.5rem] items-center justify-arund bg-orange-600 rounded-md mt-32 order-3 md:order-none">
        <div className="stat-item-container grid  col-span-2  text-center border-r-2 border-white h-[5.8rem]">
          <div className="stat-item-fig font-semibold text-2xl md:text-3xl text-white">
            2k+
          </div>
          <div className="stat-item-category font-semibold text-sm md:text-xl text-white">
            STUDENT ENROLLED
          </div>
        </div>
        <div className="stat-item-container grid  col-start-4 col-span-2 text-center border-r-2 border-white h-[5.8rem]">
          <div className="stat-item-fig font-semibold  text-2xl md:text-3xl text-white">
            57+
          </div>
          <div className="stat-item-category font-semibold text-sm md:text-xl text-white">
            INSTRUCTOR ONSET
          </div>
        </div>
        <div className="stat-item-container grid col-start-6 col-span-2 text-center border-r-2 border-white h-[5.8rem]">
          <div className="stat-item-fig font-semibold  text-2xl md:text-3xl text-white">
            250+
          </div>
          <div className="stat-item-category font-semibold text-sm md:text-xl text-white">
            WORKSHOPS EXECUTED
          </div>
        </div>
        <div className="stat-item-container grid col-start-8 col-span-2 text-center  h-[5.8rem]">
          <div className="stat-item-fig font-semibold  text-2xl md:text-3xl text-white">
            27+
          </div>
          <div className="stat-item-category font-semibold text-sm md:text-xl text-white">
            ACADEMIA AFFILIATED
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
