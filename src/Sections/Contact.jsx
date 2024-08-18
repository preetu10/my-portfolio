import {
  FaArrowDown,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
    .sendForm('contact_service', 'template_c97th9i', form.current, {
      publicKey: import.meta.env.VITE_PUBLIC_KEY,
    })
    .then(
      () => {
        console.log('SUCCESS!');
        form.current.reset();
        toast.success('Email sent to Mahfuja Successfully!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      },
      (error) => {
        console.error('FAILED...', error);
        toast.error('Failed to send email!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      },
    );

  }
  return (
    <section id="contact">
      <div className="pt-5 bg-opacity-100"
      style={{
        backgroundImage: "url(./banner2.jpg)",
       
      }}>
        <div
          className="flex mt-10 pt-5 pb-10 mx-auto justify-center
      text-center text-2xl md:text-4xl divider divider-info w-4/5 text-white roboto-medium "
        >
          Let’s Connect!
        </div>
        <div className=" px-2 md:px-12">
          <div className="flex items-center justify-between pb-16 pt-5">
            <div className="flex flex-col md:flex-row  gap-2 md:gap-5 lg:gap-48 items-center justify-center md:max-w-5xl mx-auto">
              <div className="md:w-1/2">
                <p className=" text-base md:text-lg  px-1 text-sky-600">
                  Contact Info
                </p>
                <h1 className="text-3xl md:text-4xl roboto-bold text-white">
                  Get In Touch!
                </h1>
                <div>
                  <div className="flex flex-row gap-2 items-center pt-5 pb-1">
                    <FaPhone className="text-blue-700"></FaPhone>
                    <span className="roboto-bold text-base text-white hover:bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 hover:bg-clip-text hover:text-transparent ">
                      Phone Number{" "}
                    </span>
                  </div>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="pl-2 md:pl-8 text-sky-600 hover:bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 hover:bg-clip-text hover:text-transparent"
                  >
                    +8801777118790
                  </p>
                  <div className="flex flex-row gap-2 items-center pt-2 pb-1">
                    <MdEmail className="text-blue-700"></MdEmail>
                    <span className="roboto-bold text-base text-white hover:bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 hover:bg-clip-text hover:text-transparent ">
                      Email Address{" "}
                    </span>
                  </div>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="1100"
                    className="text-sky-600 hover:bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 hover:bg-clip-text hover:text-transparent pl-2 md:pl-8"
                  >
                    mahfujasolaiman77@gmail.com
                  </p>
                  <div className="flex flex-row gap-2 items-center pt-2 pb-1">
                    <FaLocationDot className="text-blue-700"></FaLocationDot>
                    <span className="roboto-bold text-base text-white hover:bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 hover:bg-clip-text hover:text-transparent">
                      Present Address{" "}
                    </span>
                  </div>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    className="pl-2 md:pl-8 text-sky-600 hover:bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 hover:bg-clip-text hover:text-transparent"
                  >
                    Chittagong, Bangladesh
                  </p>
                  <div className="flex flex-row  items-center pt-3 pb-3 ">
                    <p className="text-base md:text-lg pr-1 text-white hover:bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 hover:bg-clip-text hover:text-transparent">
                      Find Me On
                    </p>
                    <p data-aos="fade-down" data-aos-delay="300">
                      {" "}
                      <FaArrowDown className="text-white hover:text-sky-600"></FaArrowDown>
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center ">
                    <button
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      className="text-center  border-2 text-2xl btn btn-ghost btn-outline text-white py-1 px-3 text-transparent hover:bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400"
                    >
                      <a href="https://www.linkedin.com/in/mahfuja-yesmin-preety/">
                        <FaLinkedin />
                      </a>
                    </button>
                    <button
                      data-aos="fade-up"
                      data-aos-duration="1100"
                      className="text-center  border-2  text-2xl btn btn-ghost btn-outline text-white py-1 px-3 text-transparent hover:bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 "
                    >
                      <a href="https://www.facebook.com/profile.php?id=100009247509071&mibextid=ZbWKwL">
                        <FaFacebook />
                      </a>
                    </button>
                    <button
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      className="text-center  border-2  text-2xl btn btn-ghost btn-outline text-white py-1 px-3 text-transparent hover:bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 "
                    >
                      <a href="https://x.com/MahfujaPreety">
                        <FaTwitter />
                      </a>
                    </button>
                    <button
                      data-aos="fade-up"
                      data-aos-duration="1300"
                      className="text-center  border-2  text-2xl btn btn-ghost btn-outline text-white py-1 px-3 text-transparent hover:bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 "
                    >
                      <a href="https://github.com/preetu10">
                        <FaGithub />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 pt-5">
                <div className="card pt-5 border-2 hover:border-blue-700 bg-slate-300 w-96 shadow-2xl shadow-cyan-200">
                  <form className="card-body" ref={form} onSubmit={sendEmail}>
                    <h1 className="bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 text-3xl roboto-bold bg-clip-text text-transparent text-center">
                      Send Email
                    </h1>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-blue-900  roboto-medium">
                          Enter Your Full Name{" "}
                        </span>
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        placeholder="Enter name"
                        className="bg-slate-100 input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-blue-900  roboto-medium">
                          Enter Your Email{" "}
                        </span>
                      </label>
                      <input
                        type="email"
                        name="from_email"
                        placeholder="Enter email"
                        className="bg-slate-100 input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-blue-900 roboto-medium">
                          Write Message
                        </span>
                      </label>
                      <textarea
                        type="text"
                        name="message"
                        placeholder="Write here"
                        className="bg-slate-100 input input-bordered h-32"
                        required
                      />
                    </div>
                    <div className="form-control mt-1">
                      <button className="btn btn-ghost btn-outline bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 border-2 border-yellow-600 text-white text-xl roboto-regular hover:bg-cyan-300 mt-2 mb-3 mx-1 hover:border-blue-900">
                        Send Email
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
