import { FaDownload } from "react-icons/fa6";

const Navbar = () => {
  const pdfUrl = "./Mahfuja's_Resume.pdf";
  const links = (
    <>
      <li className="text-lg font-semibold">
        <a to="" href="#home">
          Home
        </a>
      </li>
      <li className="text-lg roboto-medium">
        <a href="#about">About Me</a>
      </li>
      <li className="text-lg roboto-medium">
        <a href="#skills">My Competence</a>
      </li>
      <li className="text-lg roboto-medium">
        <a href="#works">My Works</a>
      </li>
      <li className="text-lg roboto-medium">
        <a href="#contact">Contact Me</a>
      </li>
    </>
  );
  return (
    <div>
      <div
        className="navbar  bg-slate-700 md:bg-transparent md:fixed z-30 md:px-5
      "
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-stone-400 font-bold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52
              "
            >
              {links}
            </ul>
          </div>
          <a href="/" className="  bg-transparent px-2">
            <img
              src="./studio.png"
              alt=""
              className="w-12 h-12 md:w-18 md:h-18 border-0 "
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className="menu menu-horizontal px-1 
         text-stone-400
          "
          >
            {links}
          </ul>
        </div>
        <div className="navbar-end ">
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-ghost z-auto btn-outline bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 border-2 border-yellow-600 text-white text-lg md:text-xl roboto-regular hover:bg-cyan-300 mx-1 hover:border-blue-900">
           
              {" "}
              <FaDownload></FaDownload>Resume
          
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
