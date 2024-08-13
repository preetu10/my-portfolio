const About = () => {
    return (
        <div className="my-8 bg-slate-50">
            <div className="flex pt-5 pb-16 mx-auto justify-center">
           
            <h1 className="text-center text-5xl border-y-orange-800 border-2 py-8 w-4/5 border-x-0 roboto-medium bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 bg-clip-text text-transparent">About Me</h1>
            </div>
            <div className="flex flex-col md:flex-row py-5 gap-12 justify-between px-4 md:px-48 items-center">
                <div data-aos="zoom-in" data-aos-duration="1300" className="md:w-1/2 text-left ">
                    <img src="./me.jpg" alt="" className="w-[300px] h-[280px]  md:w-[480px] md:h-[450px] rounded-2xl" />
                </div>
                <div className="md:w-1/2  ">
                   <p className="text-xl roboto-regular-italic text-yellow-800">As an ambitious web developer currently pursuing a BSc (Engg) in Computer Science and Engineering at the University of Chittagong, I specialize in creating dynamic, user-centric web applications that solve real-world challenges. My expertise lies in utilizing MongoDB, Express.js, React, and Node.js to build scalable and efficient solutions. Driven by innovation, I continuously explore new technologies to enhance my work. Whether it's crafting intuitive user interfaces or tackling complex backend logic, I bring a meticulous approach to every project. My journey is fueled by a love for coding and a commitment to delivering high-quality, impactful digital experiences.</p>
                   <button data-aos="fade-up" data-aos-duration="1300"
     data-aos-anchor-placement="top-bottom" className="btn btn-ghost btn-outline bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 border-2 border-yellow-600 text-white text-xl roboto-regular hover:bg-cyan-300 my-4 mx-1 hover:border-blue-900">Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default About;