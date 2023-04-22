import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer-section-container text-white bg-black min-h-[37rem] grid grid-cols-12 col-start-2 col-end-11 gap-5 gap-y-24  pt-[5rem]"
    >
      <div className="footer-wrapper grid col-span-11 grid-cols-12 ">
        <div className="brand-information-container text-left grid col-span-4  col-start-2">
          <div className="brand-name text-[3.5rem] font-bold transform hover:scale-110 cursor-pointer delay-1000 linear hover:text-orange-400">
            Jageo
          </div>
          <div className="brand-slogan text-2xl font-bold">
            Expertise. Empowered. Everywhere
          </div>
          <div className="brand-address text-xl ">Mumbai, India 1102304</div>
        </div>
        <div className="footer-link-rows-container grid col-span-7 col-start-6 grid-cols-12 justify-between">
          <div className="footer-link-list col-span-4 grid grid-col">
            <ul className="footer-list">
              <li className="footer-list-item">
                <FooterItem path={"/"} text="Resources" weight={"semibold"} />
              </li>
              <li className="footer-list-item">
                <FooterItem path={"/"} text="Resources" />
              </li>
              <li className="footer-list-item">
                <FooterItem path={"/"} text="Resources" />
              </li>
              <li className="footer-list-item">
                <FooterItem path={"/"} text="Resources" />
              </li>
            </ul>
          </div>
          <div className="footer-link-list col-span-4 grid grid-col ">
            <ul className="footer-list">
              <li className="footer-list-item">
                <FooterItem path={"/"} text="Resources" weight={"semibold"} />
              </li>
              <li className="footer-list-item">
                <FooterItem path={"/"} text="Resources" />
              </li>
              <li className="footer-list-item">
                <FooterItem path={"/"} text="Resources" />
              </li>
              <li className="footer-list-item">
                <FooterItem path={"/"} text="Resources" />
              </li>
            </ul>
          </div>
          <div className="footer-link-list col-span-4 grid grid-col ">
            <ul className="footer-list">
              <li className="footer-list-item">
                <FooterItem path={"/"} text="Resources" weight={"semibold"} />
              </li>
              <li className="footer-list-item">
                <FooterItem path={"/"} text="Resources" />
              </li>
              <li className="footer-list-item">
                <FooterItem path={"/"} text="Resources" />
              </li>
              <li className="footer-list-item">
                <FooterItem path={"/"} text="Resources" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer

const FooterItem=({path, text, weight})=>{
    return (
      <Link
        to="path"
        className={` text-gray-400 max-h-2 hover:text-white hover:cursor-pointer font-${weight?weight:'regular'} `}
      >
        {text}
      </Link>
    );
}