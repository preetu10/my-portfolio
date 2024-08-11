import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import About from "./Sections/About";
import Banner from "./Sections/Banner";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;