import React from 'react'
import { DoodleReact, Polyhead } from '../../assets/AppIcons';
import SectionHeader from '../sectionHeader/SectionHeader';
import TC_5 from './../../assets/img/univ/tc-1.png'
import TC_1 from './../../assets/img/univ/tc-2.png'
import TC_2 from './../../assets/img/univ/tc-3.png'
import TC_3 from './../../assets/img/univ/tc-4.png'
import TC_4 from './../../assets/img/univ/tc-5.png'

const OurTrustedCircle = () => {
    const trustedData = [TC_1, TC_2, TC_3, TC_4, TC_5];
  return (
    <section
      id="our-trusted-circle"
      className="our-trusted-circle-section-container grid grid-cols-12 col-start-2 gap-5 gap-y-24"
    >
      {/* Heading of Section */}
      <SectionHeader
        heading={"Our Trusted Circle"}
        subHeading={"Trusted Connections, Lasting Partnerships"}
        polyHeader={<Polyhead color="cyan" />}
        headerDoodle={<DoodleReact />}
        left="120px"
        bottom="20rem"
      />

      <div className="trusted-circle-image-grid col-span-12 grid col-start-2 grid-rows-auto grid-cols-3 justify-between items-center gap-y-24">
        {trustedData?.map((val, index) => {
          return (
            <div
              className="logo-image-container min-w-[4rem] max-w-[10rem] grayscale hover:grayscale-0"
              key={`tc-${index}`}
            >
              <img src={val} width="100%" height="100%" alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OurTrustedCircle