import React from "react";
import logo from "/logo-black.png";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div className=" footer text-secondary sm:footer-horizontal p-10 max-w-[1440px] mx-auto">
      <div data-aos="fade-up" data-aos-delay={100}>
        <img className="size-28" src={logo} alt="" />
        <p className="text-4xl font-bold mb-2 signika-font">WarmPaws</p>
        <p>
          Trusted care for your furry, feathered, or finned friends <br />{" "}
          because they’re family.
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay={200}>
        <h6 className="title-footer">Our Services</h6>
        <a className="footer-link">Popular Winter Care Services</a>
        <a className="footer-link">Veterinary Care</a>
        <a className="footer-link">Pet Boarding / Daycare</a>
        <a className="footer-link">Dog Walking Services</a>
        <a className="footer-link">Pet Nutrition & Feeding</a>
        <a className="footer-link">Pet Training & Behavior Coaching</a>
      </div>

      <div data-aos="fade-up" data-aos-delay={400}>
        <h6 className="title-footer">Privacy Policy</h6>
        <a className="footer-link">Terms of use</a>
        <a className="footer-link">Privacy policy</a>
        <a className="footer-link">Cookie policy</a>
      </div>

      <div data-aos="fade-up" data-aos-delay={300} className="text-black/70">
        <h6 className="title-footer">Contact Info</h6>
        <a className="footer-link">
          {" "}
          <p className="flex items-center gap-1 mt-1 ">
            <IoCall />
            +00 120 3456 789
          </p>
        </a>
        <a className="footer-link">
          <p className="flex items-center gap-1 mt-1 ">
            <IoMdMail />
            info@warmpaws.com  
          </p>
        </a>
        <a className="footer-link">
          <p className="flex items-center gap-1 mt-1 ">
            <IoMdMail />
            support@warmpaws.com
          </p>
        </a>
        <a className="footer-link">
          <p className="flex items-center gap-1 mt-1 ">
            <IoMdMail />
            contact@warmpaws.com
          </p>
        </a>
        <div className="flex items-center gap-6 mt-1">
          <FaFacebook className="cursor-pointer" size={28} />
          <PiInstagramLogoFill className="cursor-pointer" size={28} />
          <FaXTwitter className="cursor-pointer" size={28} />
          <TbBrandYoutubeFilled className="cursor-pointer " size={28} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
