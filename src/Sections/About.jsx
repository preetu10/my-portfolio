/* eslint-disable react/no-unescaped-entities */
import { FaDownload } from "react-icons/fa6";

const About = () => {
  return (
    <div className="my-12 bg-slate-50">
      <div
        className="flex mt-10 pt-10 pb-16 mx-auto justify-center
      text-center  text-3xl md:text-5xl divider divider-info w-4/5 bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 bg-clip-text text-transparent roboto-medium "
      >
        Who am I?
      </div>
      <div className="flex flex-col lg:flex-row py-5 gap-5 lg:gap-12 justify-between px-4 lg:px-48 items-center">
        <div
          data-aos="zoom-in"
          data-aos-duration="1300"
          className="md:w-1/2 text-left "
        >
          <img
            src="./me.jpg"
            alt=""
            className="w-[300px] h-[280px]  md:w-[500px] md:h-[420px] rounded-2xl"
          />
        </div>
        <div className="lg:w-1/2  ">
          <p className="text-lg lg:text-xl roboto-regular-italic text-yellow-800">
            I am an ambitious web developer currently pursuing a BSc (Engg) in
            Computer Science and Engineering at the University of Chittagong. I
            specialize in creating dynamic, user-centric web applications that
            solve real-world challenges. My expertise lies in utilizing MongoDB,
            Express.js, React, and Node.js to build scalable and efficient
            solutions. Driven by innovation, I continuously explore new
            technologies to enhance my work. Whether it's crafting intuitive
            user interfaces or tackling complex backend logic, I bring a
            meticulous approach to every project. My journey is fueled by a love
            for coding and a commitment to delivering high-quality, impactful
            digital experiences. I love to solve creative problems and available
            for new challenges.
          </p>
          <button
            data-aos="fade-up"
            data-aos-duration="1300"
            data-aos-anchor-placement="top-bottom"
            className="btn btn-ghost btn-outline bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 border-2 border-yellow-600 text-white text-xl roboto-regular hover:bg-cyan-300 my-4 mx-1 hover:border-blue-900"
          >
            <FaDownload />
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
