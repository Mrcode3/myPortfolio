import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll/modules";
import "./nav.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-end items-center px-4 bg-[#0a192f] text-gray-300 z-10">
      {/* Menu */}
      <ul className="md:flex hidden">
        <li>
          <Link to="home" smooth={true} duration={500}>
            <div className="btn">
              <span>Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            <div className="btn">
              <span>About</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            <div className="btn">
              <span>Skills</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            <div className="btn">
              <span>Work</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            <div className="btn">
              <span>Contact</span>
            </div>
          </Link>
        </li>
      </ul>

      {/* Hamberger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile Menu  */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li> */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Mrcode3"
            >
              Github <FaGithub size={30} />
            </a>
          </li>{" "}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto: Zechao.Lin001@umb.edu"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>{" "}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://docs.google.com/document/d/1UBr38UtsDKclLNh8d45BMUwxComq-Sga/edit?usp=sharing&ouid=101235653066797145161&rtpof=true&sd=true"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
