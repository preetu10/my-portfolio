import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("./projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);
  return (
   <section id="works">
     <div className="py-5 bg-slate-50">
      <div
        className="flex mt-10 pt-10 pb-16 mx-auto justify-center
      text-center text-2xl md:text-4xl divider divider-info w-4/5 bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 bg-clip-text text-transparent roboto-medium "
      >
        Dive Into My Work!
      </div>
      <div>
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-right"
            data-aos-duration="1300"
            className="card flex flex-col md:card-side bg-base-100 shadow-xl my-5 py-5 px-5 mx-4"
          >
            <figure className="rounded-xl border-2 md:w-1/2 mt-12 md:mt-0 ">
              <img
                src={project.homepage}
                alt={project.project_name}
                className=""
              />
            </figure>
            <div className="card-body px-1 md:px-8 md:w-1/2">
              <div className="badge badge-outline bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 text-white text-lg px-3 py-4 absolute top-5 right-5 roboto-medium hover:border-2 hover:border-blue-900">
                {project.type}
              </div>

              <h2 className="card-title roboto-bold bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 bg-clip-text text-transparent text-3xl">
                {project.project_name}
              </h2>
              <span className="text-lg roboto-regular text-yellow-800">
                {" "}
                {project.description}
              </span>
              <span className="text-xl roboto-medium text-blue-800">
                {" "}
                Key Features:
              </span>
              <ul className="list-outside">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-lg md:p-1">
                    <GiCheckMark className="text-blue-700 text-lg inline mr-2" />
                    <span className="text-yellow-800 roboto-regular">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12">
                <a
                  className="bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 bg-clip-text text-transparent roboto-medium hover:shadow-2xl hover:shadow-cyan-200 text-lg"
                  href={project.live_link}
                >
                  Visit {project.project_name}
                </a>
                <a
                  href={project.github_link}
                  className="inline items-center justify-center"
                >
                  <div className="flex flex-row items-center gap-1">
                    <FaGithub className="text-lg text-blue-700 "></FaGithub>
                    <span className="bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 bg-clip-text text-transparent roboto-medium hover:shadow-2xl hover:shadow-cyan-200 text-lg ">
                      GitHub
                    </span>
                  </div>
                </a>
              </div>
              <div className="card-actions py-2">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="badge badge-outline bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 text-white text-base roboto-medium p-3 hover:border-2 hover:border-blue-900"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
         <button
            data-aos-anchor-placement="top-bottom"
            className="btn btn-ghost btn-outline bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 border-2 border-yellow-600 text-white text-xl roboto-regular hover:bg-cyan-300 my-4 mx-1 hover:border-blue-900"
          >
            Show All 
          </button>
          </div>
    </div>
   </section>
  );
};

export default Projects;
