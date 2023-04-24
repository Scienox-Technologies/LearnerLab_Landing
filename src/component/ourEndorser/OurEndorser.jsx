import React from "react";
import { DoodleReact, Polyhead } from "../../assets/AppIcons";
import SectionHeader from "../sectionHeader/SectionHeader";

const OurEndorser = () => {
  return (
    <section
      id="our-endorser"
      className="our-endorser-section-container grid grid-cols-12  gap-x-5 gap-y-44"
    >
      {/* Heading of Section */}
      <SectionHeader
        heading={"Our Endorser"}
        subHeading={"Professional Learning Solutions, Simplified"}
        polyHeader={<Polyhead color="orange" />}
        headerDoodle={<DoodleReact />}
        left="250px"
        bottom="24rem"
      />

      <div className="endorser-item-row-container grid col-span-12  col-start-2 col-end-12 grid-rows-1 grid-cols-1 xl:grid-cols-12 justify-between gap-y-[10rem] md:gap-5  ">
        {endorserData.map((val, index) => {
          return (
            <Endorser
              role={val.role}
              name={val.name}
              path={val.path}
              msg={val.msg}
              index={index}
              key={`id-end-${index}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OurEndorser;

const endorserData = [
  {
    id: "1",
    path: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    msg: "Attending the Jageo workshop was a truly enriching experience. The instructors were knowledgeable and engaging, and the curriculum was tailored to our needs.",
    name: "Rahul Krishnan",
    role: "Student",
  },
  {
    id: "2",
    path: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    msg: "The Jageo workshop was top-notch. The content was relevant and up-to-date, and the instructors were passionate about sharing their expertise. ",
    name: "Dr. Vijay Singh",
    role: "Senior Professor",
  },
  {
    id: "3",
    path: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    msg: "I was thoroughly impressed by the Jageo workshop. The instructors were able to break down complex topics into easily understandable concepts",
    name: "Jay Verma",
    role: "Instructor, AR/VR",
  },
];

const Endorser = ({ path, msg, name, role, index }) => {
  return (
    <div
      className="endroser-item-container grid col-span-12  md:col-span-4 justify-center top-32 "
      key={`endo-item-${index}`}
    >
      <div className="endorser-content-container flex w-[376px] h-[376px] rounded-[50px] border-2  border-orange-500 place-content-end p-12 flex-col gap-y-12 relative ">
        <div className="user-avatar-container w-[9.5rem] h-[9.5rem] flex  rounded-full border-2 border-orange-600 text-center justify-center items-center absolute left-[115px] top-[-75px]">
          <div
            className="user-avatar-img w-[8.4rem] h-[8.4rem] flex  rounded-full bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${path})`,
            }}
          ></div>
        </div>
        <div className="user-endrosing-msg col-span-4 text-md text-gray-500 text-left font-semibold">
          {msg}
        </div>
        <div className="user-identity-container">
          <div className="user-name text-lg font-bold text-black">{name}</div>
          <div className="user-name text-md  font-italic text-gray-600">
            {role}
          </div>
        </div>
      </div>
    </div>
  );
};
