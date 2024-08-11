import Lottie from "lottie-react";
import animation from "./assets/animation.json"
import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div className="max-w-7xl mx-auto  bg-white">
           <div className="flex  ">
           <h1 className="mt-16 max-w-xl h-72 text-center mx-auto">
            <Lottie animationData={animation} loop={true}  />
            <button className="text-center text-lg btn btn-outline btn-info p-2 font-semibold">
               <Link to="/">
               Go to Home
               </Link>
                </button>
            </h1>
           
           </div>
        </div>
    );
};

export default Error;