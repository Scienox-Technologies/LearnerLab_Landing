import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer-section-container text-white bg-black min-h-[37rem] grid grid-cols-12 grid-flow-row col-start-2 col-end-11 gap-5 gap-y-24  pt-[5rem]"
    >
      <div className="footer-wrapper grid col-span-11 grid-cols-12 ">
        <div className="brand-information-container text-left  col-span-4  col-start-2 h-20 hidden md:grid gap-y-4 ">
          <span className="brand-name text-2xl md:text-xl lg:text-[3rem] font-bold transform hover:scale-100 cursor-pointer delay-1000 linear hover:text-orange-400">
            Learner Lab
          </span>
          <span className="brand-slogan text-lg lg:text-xl font-bold">
            Expertise. Empowered. Everywhere
          </span>
          <span className="brand-address md:text-lg text-2xl">Mumbai, India 1102304</span>
        </div>

        <div className="footer-link-rows-container text-left grid col-span-10 md:col-span-7 col-start-2 md:col-start-6 grid-cols-12 justify-between">
          <div className="footer-link-list col-span-4 grid grid-col">
            <ul className="footer-list grid grid-flow-cols h-72">
              <li className="footer-list-item">
                <FooterItem path={"/"} text="Company" weight={"semibold"} />
              </li>
              <li className="footer-list-item">
                <FooterItem path={"/"} text="About" />
              </li>
              <li className="footer-list-item">
                <FooterItem path={"/"} text="Customers" />
              </li>
              <li className="footer-list-item">
                <FooterItem path={"/"} text="Careers" />
              </li>
              <li className="footer-list-item">
                <FooterItem path={"/"} text="Blogs" />
              </li>
            </ul>
          </div>
          <div className="footer-link-list col-span-4 grid grid-col ">
            <ul className="footer-list grid grid-flow-cols h-40">
              <li className="footer-list-item">
                <FooterItem path={"/"} text="Contact" weight={"semibold"} />
              </li>
              <li className="footer-list-item">
                <FooterItem path={"/"} text="Support" />
              </li>
              <li className="footer-list-item">
                <FooterItem path={"/"} text="Sales" />
              </li>
            </ul>
          </div>
          <div className="footer-link-list col-span-4 grid grid-col ">
            <ul className="footer-list grid grid-flow-cols h-40">
              <li className="footer-list-item">
                <FooterItem path={"/"} text="Resources" weight={"semibold"} />
              </li>
              <li className="footer-list-item">
                <FooterItem path={"/"} text="Podacast" />
              </li>
              <li className="footer-list-item">
                <FooterItem path={"/"} text="Help Center" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright grid col-span-10 col-start-2 grid-cols-12 border-t-2 border-gray-200 items-center">
        <div className="footer-copyright-text col-span-6 text-sm md:text-2xl text-gray-400 text-left">
          Copyright 2023 | All Rights Reserved.
        </div>
        <div className="footer-copyright- col-span-6 text-sm md:text-2xl text-gray-400 text-right">
          Scienox Pvt. Ltd.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FooterItem = ({ path, text, weight }) => {
  return (
    <Link
      to="path"
      className={` text-gray-400 max-h-2 hover:text-white hover:cursor-pointer font-bold  text-2xl font-${
        weight ? weight : "regular"
      } `}
    >
      {text}
    </Link>
  );
};
