import React, { useState } from "react";
import { Boat, DoodleReact, Polyhead } from "../../assets/AppIcons";
import SectionHeader from "../sectionHeader/SectionHeader";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Robot from "../../assets/img/bits/robot.jpg";

const OurBestBits = ({ index }) => {
  const [navigator, setNavigator] = useState(0);

  const handleNavLeft = () => {
    navigator != 0 && setNavigator(() => navigator - 1);
  };
  const handleNavRight = () => {
    navigator + 6 < bitData?.length && setNavigator(() => navigator + 1);
    console.log("de", navigator, navigator + 6);
  };

  return (
    <section
      id="bestBits"
      className="our-best-bit-section-container relative grid grid-cols-12  col-start-2 gap-5 gap-y-32 "
    >
      {/* Heading of Section */}
      <SectionHeader
        heading={"Our Best Bit"}
        subHeading={"Quality Content, Expert Learning"}
        polyHeader={<Polyhead color="violet" />}
        headerDoodle={<DoodleReact />}
        left="65"
        bottom="20"
      />

      <div className="bit-carausel col-span-12 grid grid-cols-6  col-start-2 col-end-12 xl:col-end-12  gap-44  items-center    relative ">
        {bitData
          .slice(
            navigator,
            `${navigator + 6 < bitData.length && navigator + 6}`
          )
          .map((val, index) => {
            return (
              <div className="bit-item-container ">
                <div
                  className={`bit-item-img-card grid col-span-2  rounded-[56px]   bg-cover bg-center bg-no-repeat ${
                    index === 2 || index === 3
                      ? "h-[466px] w-[260px]"
                      : "h-[394px] w-[210px]"
                  }`}
                  style={{
                    backgroundImage: `url(${val.path})`,
                  }}
                ></div>
                <div className="bit-item-img-caption grid col-span-2 text-center text-2xl font-semibold">
                  {val.caption}
                </div>
              </div>
            );
          })}
        <div className="nav-btn-container absolute left-[-2.5rem] top-48">
          <button
            className="nav-btn-caraousel w-20 h-20 bg-black flex text-white font-semibold justify-center items-center rounded-full hover:bg-grey-700 hover:cursor-pointer"
            onClick={() => handleNavLeft()}
          >
            <FiChevronLeft size={44} />
          </button>
        </div>
        <div className="nav-btn-container absolute right-0 top-48">
          <button
            className="nav-btn-caraousel w-20 h-20 flex text-white bg-black font-semibold justify-center items-center rounded-full hover:bg-grey-700 hover:cursor-pointer"
            onClick={() => handleNavRight()}
          >
            <FiChevronRight size={44} />
          </button>
        </div>
      </div>

      <div className="boat-doodle grid col-start-9 col-span-5 absolute right-12  bottom-[-8rem]">
        <Boat />
      </div>
    </section>
  );
};





const bitData = [
  {
    id: 1,
    path: "https://images.unsplash.com/photo-1593376893114-1aed528d80cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80",
    caption: "AI",
  },
  {
    id: 2,
    path: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    caption: "Data Science",
  },
  {
    id: 3,
    path: "https://images.unsplash.com/photo-1621072146621-a734295132d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80",
    caption: "Cyber Security",
  },
  {
    id: 4,
    path: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    caption: "Robotics",
  },
  {
    id: 5,
    path: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80",
    caption: "AR/VR",
  },
  {
    id: 6,
    path: "https://images.unsplash.com/photo-1647101958033-25284bb10325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    caption: "Holograms",
  },
  {
    id: 7,
    path: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    caption: "Machine Learning",
  },
  {
    id: 8,
    path: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    caption: "Full Stack",
  },
  {
    id: 9,
    path: "https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    caption: "Frontend Dev",
  },
  {
    id: 10,
    path: "https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    caption: "DevOps",
  },
];

export default OurBestBits;
