/* eslint-disable react/no-unescaped-entities */

import { FaArrowDown } from "react-icons/fa";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter'
const Banner = () => {
  return (
    <div
    className="hero min-h-screen"
    style={{
      backgroundImage: "url(./banner.jpeg)",
    }}>
    <div className="hero-overlay bg-opacity-90"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-4xl">
      <div className="text-center text-white  max-w-4xl mx-auto">
  <h1 data-aos="zoom-in"  data-aos-duration="1200" className="text-4xl text-white  roboto-black">
    Hi, I'm
    <br />
    <span data-aos="zoom-in"  data-aos-duration="1200" className="bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 bg-clip-text text-transparent roboto-black text-7xl">
      {" "}
      Mahfuja Yesmin
    </span>
  </h1>
  <h1 className="text-2xl roboto-medium p-4">
    {" "}
    <Typewriter
            words={[" Full Stack Developer and Creative Problem Solver."]}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
  
  </h1>
 <div className="flex flex-row justify-center items-center pt-8 pb-4">
 <p className="text-lg px-2">
    Find Me On
    </p>
     <p data-aos="fade-down"  data-aos-delay="300"> <FaArrowDown></FaArrowDown></p>
 </div>
  <div className="flex flex-row gap-3 justify-center pb-16 lg:pb-2">
    <button className="text-center  border-2  text-2xl btn btn-ghost btn-outline text-white py-1 px-5 text-transparent hover:bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400">
      <a href="https://www.linkedin.com/in/mahfuja-yesmin-preety/">
        <FaLinkedin />
      </a>
    </button>
    <button className="text-center  border-2  text-2xl btn btn-ghost btn-outline text-white py-1 px-5 text-transparent hover:bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 ">
      <a href="https://www.facebook.com/profile.php?id=100009247509071&mibextid=ZbWKwL">
        <FaFacebook />
      </a>
    </button>
    <button className="text-center  border-2  text-2xl btn btn-ghost btn-outline text-white py-1 px-5 text-transparent hover:bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 ">
      <a href="https://x.com/MahfujaPreety">
        <FaTwitter />
      </a>
    </button>
    <button className="text-center  border-2  text-2xl btn btn-ghost btn-outline text-white py-1 px-5 text-transparent hover:bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 ">
      <a href="https://github.com/preetu10">
        <FaGithub />
      </a>
    </button>
  </div>
</div>
      </div>
    </div>
  </div>
  );
};

export default Banner;
{/* <div className="bg-[#111111]  min-h-screen">
<div className="text-center text-white  max-w-4xl mx-auto">
  <h1 className="text-4xl text-white pt-48 roboto-black">
    Hi, I'm
    <br />
    <span className="bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 bg-clip-text text-transparent roboto-black text-7xl">
      {" "}
      Mahfuja Yesmin
    </span>
  </h1>
  <h1 className="text-2xl roboto-medium p-4">
    {" "}
    MERN Stack Developer and Creative Problem Solver.
  </h1>
 <div className="flex flex-row justify-center items-center pt-8 pb-4">
 <p className="text-lg px-2">
    Find Me On
    </p>
     <p> <FaArrowDown></FaArrowDown></p>
 </div>
  <div className="flex flex-row gap-3 justify-center pb-16 lg:pb-2">
    <button className="text-center  border-2  text-2xl btn btn-ghost btn-outline text-white py-1 px-5 text-transparent hover:bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400">
      <a href="https://www.linkedin.com/in/mahfuja-yesmin-preety/">
        <FaLinkedin />
      </a>
    </button>
    <button className="text-center  border-2  text-2xl btn btn-ghost btn-outline text-white py-1 px-5 text-transparent hover:bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 ">
      <a href="https://www.facebook.com/profile.php?id=100009247509071&mibextid=ZbWKwL">
        <FaFacebook />
      </a>
    </button>
    <button className="text-center  border-2  text-2xl btn btn-ghost btn-outline text-white py-1 px-5 text-transparent hover:bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 ">
      <a href="https://x.com/MahfujaPreety">
        <FaTwitter />
      </a>
    </button>
    <button className="text-center  border-2  text-2xl btn btn-ghost btn-outline text-white py-1 px-5 text-transparent hover:bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 ">
      <a href="https://github.com/preetu10">
        <FaGithub />
      </a>
    </button>
  </div>
</div>
</div> */}