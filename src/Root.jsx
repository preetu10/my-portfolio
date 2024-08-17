import { Outlet } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Root = () => {
    return (
        <div className="bg-slate-50">
            <Outlet></Outlet>
            <ToastContainer autoClose={3000} />
        </div>
    );
};

export default Root;