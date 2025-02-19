import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import About from "./Sections/About";
import Banner from "./Sections/Banner";
import Contact from "./Sections/Contact";
// import Education from "./Sections/Education";
import MySkills from "./Sections/MySkills";
import Projects from "./Sections/Projects";

const Home = () => {
    return (
        <div>
             <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            {/* <Education></Education> */}
            <MySkills></MySkills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;