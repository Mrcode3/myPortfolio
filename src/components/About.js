import React from "react";
import "./about.css";

const About = () => {
  return (
    // <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
    //   <div className="flex flex-col justify-center items-center w-full h-full">
    //     <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
    //       <div className="sm:text-right pb-8 pl-4">
    //         <p className="text-4xl font-bold inline border-b-4 border-pink-600">
    //           About
    //         </p>
    //       </div>
    //       <div></div>
    //     </div>
    //     <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
    //       <div className="sm:text-right text-4xl font-bold">
    //         <p>Hey.Nice to meet you. Please take a look around.</p>
    //       </div>
    //       <div>
    //         <p>
    //           I am pursuing my bachelor’s degree of computer science at
    //           University of Massachusetts Boston. I am passionate about learning
    //           new technologies and applying what I learned to build awesome
    //           projects. I am also actively looking for an internship opportunity
    //           to start my career in web development.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="about">
      <div class="book">
        <div class="cover">
          <span>About Me</span>
        </div>
        <div class="content">
          <p>
            I am pursuing my bachelor’s degree of computer science at University
            of Massachusetts Boston. I am passionate about learning new
            technologies and applying what I learned to build awesome projects.
            I am also actively looking for an internship opportunity to start my
            career in web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
