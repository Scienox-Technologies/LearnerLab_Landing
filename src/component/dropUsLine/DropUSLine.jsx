import React from 'react'
import { DoodleReact, Polyhead } from '../../assets/AppIcons';
import SectionHeader from '../sectionHeader/SectionHeader';
import Drop from './../../assets/img/Drop.png'

const DropUSLine = () => {
  return (
    <section
      id="drop-us-line"
      className="drop-us-line-section-container grid grid-cols-12  gap-5"
    >
      <SectionHeader
        heading={"Drop us a line"}
        subHeading={"Connect with us. Start today"}
        polyHeader={<Polyhead color="cyan" />}
        headerDoodle={<DoodleReact />}
        left="120px"
        bottom="20rem"
      />
      <div className="form-container grid col-span-12 grid-cols-12 items-center ">
        <div className="contact-form-container col-span-12 xl:col-span-4 xl:col-start-2  order-last xl:order-none gap-y-5 ">
          <form action="submit" className="grid gap-y-16">
            <div className="field-rows grid grid-cols-2 gap-16">
              <FormField name="first_Name" placeholder={"First Name"} />
              <FormField name="last_Name" placeholder={"Last Name"} />
            </div>
            <div className="field-rows grid grid-cols-1 ">
              <FormField name="email" placeholder={"Email"} />
            </div>
            <div className="field-rows grid grid-cols-1 ">
              <FormField name="contact" placeholder={"Phone no."} />
            </div>
            <div className="field-rows grid grid-cols-1 ">
              <FormField
                name="contact"
                placeholder={"Write message here"}
                height={"232px"}
              />
            </div>
            <div className="field-rows grid grid-cols-1 ">
              <button
                type="submit"
                className="btn-submit  bg-black text-2xl w-[21rem] h-[5rem] rounded-full text-neutral-50"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="contact-form-artwork grid col-span-12 xl:col-span-6 xl:col-start-7 justify-center items-center ">
          {/* <div
            className="contact-form-img  flex w-[36rem] h-[44rem]  bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${Drop})` }}
          ></div> */}
        </div>
      </div>
    </section>
  );
}

export default DropUSLine


const FormField=({name, placeholder, height})=>{
  return (
    <input
      name={name}
      className={`bg-white w-full h-[${height?height:'24px'}] rounded-lg text-2xl border-2 border-zinc-300 p-3`}
      placeholder={placeholder}
    />
  );
}