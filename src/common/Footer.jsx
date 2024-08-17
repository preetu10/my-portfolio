const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-slate-100 text-base-content rounded p-10 text-sm md:text-base roboto-medium">
        <nav className="grid grid-flow-col gap-4 ">
          <a href="#home" className="link link-hover bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 bg-clip-text text-transparent">Home</a>
          <a href="#about" className="link link-hover bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 bg-clip-text text-transparent">About Me</a>
          <a href="#skills" className="link link-hover bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 bg-clip-text text-transparent">My Competence</a>
          <a href="#works" className="link link-hover bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 bg-clip-text text-transparent">My Works</a>
          <a href="#contact" className="link link-hover bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 bg-clip-text text-transparent">Contact Me</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col ">
            <img src="./logo.png" alt="" className="w-16 h-16" />
          </div>
        </nav>
        <aside>
          <p className="bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 bg-clip-text text-transparent ">
            Copyright © {new Date().getFullYear()} - All right reserved by
            Mahfuja Yesmin
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
