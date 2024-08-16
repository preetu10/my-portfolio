import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="pt-5 bg-slate-800">
      <div
        className="flex mt-10 pt-5 pb-10 mx-auto justify-center
      text-center text-3xl md:text-5xl divider divider-info w-4/5 text-white roboto-medium "
      >
       Let’s Connect!
      </div>
  <div className=" px-2 md:px-12">
  <div className="flex items-center justify-between pb-16 pt-5">
  <div className="flex flex-col md:flex-row  gap-2 md:gap-5 lg:gap-48 items-center justify-center md:max-w-5xl mx-auto">
    <div className="md:w-1/2">
        <p className=" text-base md:text-lg  px-1 text-sky-600">Contact Info</p>
      <h1 className="text-3xl md:text-4xl roboto-bold text-white">Get In Touch!</h1>
      <div>
        <div className="flex flex-row gap-2 items-center py-2">
            <FaPhone className="text-blue-700"></FaPhone>
            <span className="roboto-bold text-base text-white ">Phone Number: </span><span
            className="bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 bg-clip-text text-transparent">+8801777118790</span>
        </div>
        <div className="flex flex-row gap-2 items-center py-2">
        <MdEmail className="text-blue-700"></MdEmail>
            <span className="roboto-bold text-base bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 bg-clip-text text-transparent ">Email Address: mahfujasolaiman77@gmail.com</span>
        </div>
        <div className="flex flex-row gap-2 items-center py-2">
        <FaLocationDot className="text-blue-700"></FaLocationDot>
            <span className="roboto-bold text-base bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 bg-clip-text text-transparent ">Present Address: Chittagong, Bangladesh</span>
        </div>
      </div>
    </div>
   <div className="md:w-1/2 pt-5">
   <div className="card pt-5 border-2 hover:border-blue-700 bg-base-100 w-96 shadow-2xl shadow-cyan-200">
      <form className="card-body">
        <h1 className="bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 text-3xl roboto-bold bg-clip-text text-transparent text-center">Send Email</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-blue-900  roboto-medium">Enter Your Email </span>
          </label>
          <input type="email" placeholder="Enter email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-blue-900 roboto-medium">Write Message</span>
          </label>
          <textarea type="text" placeholder="Write here" className="input input-bordered h-32" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-ghost btn-outline bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 border-2 border-yellow-600 text-white text-xl roboto-regular hover:bg-cyan-300 my-4 mx-1 hover:border-blue-900">Send Email</button>
        </div>
      </form>
    </div>
   </div>
  </div>
</div>
  </div>
    </div>
  );
};

export default Contact;
