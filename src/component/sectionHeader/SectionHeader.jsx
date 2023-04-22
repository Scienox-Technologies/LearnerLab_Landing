import React from "react";

const SectionHeader = ({
  heading,
  subHeading,
  headerDoodle,
  polyHeader,
  left,
  top,
  bottom,
  right,
}) => {
  console.log()

  return (
    <div className="benefit-section-header-container grid  col-start-2 col-span-10 relative">
      <div className="section-header-heading text-3xl md:text-5xl font-bold text-left z-10">
        {heading}
      </div>
      <div className="section-header-sub-heading text-lg md:text-3xl font-semibold text-left text-gray-500 z-10">
        {subHeading}
      </div>
      <div className="poly-header transform scale-50 md:scale-100 absolute left-[-2rem] md:left-0 bottom-1 md:bottom-7 z-0">
        {polyHeader}
      </div>
      <div
        className={`poly-header absolute   ${
          left ? "left-[" + left + "]" : ""
        } ${right ? "right-[" + right + "]" : ""}  ${
          top ? "top-[" + top + "]" : ""
        } ${
          bottom ? "bottom-[" + bottom + "]" : ""
        } transform scale-50 md:transform-none z-0`}
      >
        {headerDoodle}
      </div>
    </div>
  );
};

export default SectionHeader;
