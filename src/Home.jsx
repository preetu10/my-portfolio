import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import About from "./Sections/About";
import Banner from "./Sections/Banner";
// import Education from "./Sections/Education";
import MySkills from "./Sections/MySkills";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            {/* <Education></Education> */}
            <MySkills></MySkills>
            <Footer></Footer>
        </div>
    );
};

export default Home;