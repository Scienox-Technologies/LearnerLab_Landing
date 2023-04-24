import React from "react";
import {
  Course,
  DoodleReact,
  Educator,
  Expert,
  Instructor,
  Polyhead,
} from "../../assets/AppIcons";
import SectionHeader from "../sectionHeader/SectionHeader";

const OurBenefitSection = () => {
  return (
    <section
      id="our-benefit"
      className="our-section-section-container grid grid-cols-12 gap-5 gap-y-32"
    >
      {/* Heading of Section */}
      <SectionHeader
        heading={"Our Benefit list"}
        subHeading={"Professional Learning Solutions, Simplified"}
        polyHeader={<Polyhead color="orange" />}
        headerDoodle={<DoodleReact />}
        left="200px"
        bottom="4rem"
      />

      {/* Body of a Section */}
      <div className="benefit-item-grid-container grid  grid-flow-row lg:grid-flow-col col-start-2 col-span-10 grid-cols-12  gap-y-12 md: gap-x-0 md:gap-x-14 ">
        {benefitData.map((val, index) => {
          return (
            <BenefitItems
              heading={val.heading}
              desc={val.desc}
              icon={val.icon}
              index={index}
              key={`id-${index}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OurBenefitSection;

const BenefitItems = ({ heading, desc, icon, index }) => {
  return (
    <div
      className={`benefit-item-container grid  col-span-12 md:col-span-6 lg:col-span-3 gap-y-0 md:gap-y-4  items-start`}
      key={`item-${index}`}
    >
      <div className="benefit-header-mobile grid grid-flow-row col-span-10 grid-cols-12 items-center  lg:hidden">
        <div className="benefit-item-icon grid col-span-2 transform scale-50 translate-x-[-1.2rem]">
          {icon}
        </div>
        <div className="benefit-item-heading  grid col-span-6 text-[1.5rem] font-bold leading-[100%] text-left">
          {heading}
        </div>
      </div>

      <div className="benefit-item-icon hidden lg:flex">{icon}</div>
      <div className="benefit-item-content grid gap-y-4">
        <div className="benefit-item-heading w-2/3 text-[2rem] hidden font-bold leading-[100%] text-left items-end lg:flex">
          {heading}
        </div>
        <div className="benefit-item-sub-heading text-md md:text-xl font-semibold text-gray-500 text-justify nowrap">
          {desc}
        </div>
      </div>
    </div>
  );
};

const benefitData = [
  {
    id: 1,
    heading: "Educator Connect",
    desc: "Get paid for your engaging workshops and events by connecting with educational institutions on Jageo - the smart platform for freelance educators.",
    icon: <Educator />,
  },
  {
    id: 2,
    heading: "Course Centralization",
    desc: "Connect with educational institutes and manage your courses hassle-free with Jageo - the smart, all-in-one platform for freelance educators.",
    icon: <Course />,
  },
  {
    id: 3,
    heading: "Instructor Discovery",
    desc: "Access a pool of freelance instructors quickly and easily with Jageo - the smart solution to finding the perfect fit for your educational institution.",
    icon: <Instructor />,
  },
  {
    id: 4,
    heading: "Expert-led Learning",
    desc: "Build your future with quality course content and expert-led learning on Jageo - the smart platform for students. Get skills to start building your future.",
    icon: <Expert />,
  },
];
