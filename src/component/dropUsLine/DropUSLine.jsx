import React from "react";
import { DoodleReact, Polyhead } from "../../assets/AppIcons";
import SectionHeader from "../sectionHeader/SectionHeader";
import Drop from "./../../assets/img/Drop.png";

const DropUSLine = () => {
  return (
    <section
      id="drop-us-line"
      className="drop-us-line-section-container grid grid-cols-12  gap-y-16 md:gap-5 lg:gap-y-64"
    >
      <SectionHeader
        heading={"Drop us a line"}
        subHeading={"Connect with us. Start today"}
        polyHeader={<Polyhead color="orange" />}
        headerDoodle={<DoodleReact />}
        left="200px"
        bottom="20rem"
      />
      <div className="form-container grid col-span-12 grid-cols-12 items-center ">
        <div className="contact-form-container  grid col-start-2  lg:col-start-2 col-span-10 lg:col-span-4   order-last xl:order-none gap-y-5   transform translate-y-[-8rem]">
          <form action="submit" className="grid gap-y-6 md:gap-y-10">
            <div className="field-rows grid grid-rows lg:grid-cols-2  gap-y-6 lg:gap-16">
              <FormField
                name="first_Name"
                placeholder={"First Name"}
                type={"text"}
              />
              <FormField
                name="last_Name"
                placeholder={"Last Name"}
                type={"text"}
              />
            </div>
            <div className="field-rows grid grid-cols-1 ">
              <FormField name="email" placeholder={"Email"} type={"email"} />
            </div>
            <div className="field-rows grid grid-cols-1 ">
              <FormField
                name="contact"
                placeholder={"Phone no."}
                type={"number"}
              />
            </div>
            <div className="field-rows grid grid-cols-1 ">
              <FormField
                name="contact"
                placeholder={"Write message here"}
                height={"true"}
                type={"text"}
              />
            </div>
            <div className="field-rows grid grid-cols-1  justify-center">
              <button
                type="submit"
                className="btn-submit  bg-black text-lg md:text-2xl w-36  h-12 md:w-[21rem] md:h-[5rem] rounded-full text-neutral-50"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="contact-form-artwork grid col-start-2  col-span-12 xl:col-span-5 xl:col-start-7 justify-center items-center transform scale-[40%] sm:scale-[70%] translate-y-[-4rem]   xl:scale-100 md:translate-none">
          <div
            className="contact-form-img  flex w-[36rem] h-[44rem]   bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${Drop})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default DropUSLine;

const FormField = ({ name, placeholder, height, type }) => {
  let ht = height ? `h-[height}]` : "h-12";
  return (
    <input
      name={name}
      type={type}
      className={`bg-white w-full ${height ? "h-36" : "h-12"} ${
        height ? "md:h-64" : "md:h-16"
      } rounded-lg text-xl  md:text-2xl border-2 border-zinc-300 p-3`}
      placeholder={placeholder}
    />
  );
};
