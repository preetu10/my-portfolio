const MySkills = () => {
  const skills = [
    {
      name: "React.JS",
      src: "https://img.icons8.com/color/48/000000/react-native.png",
    },
    {
      name: "Express.JS",
      src: "https://img.icons8.com/ios/50/000000/express-js.png",
    },
    {
      name: "Node.JS",
      src: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
    },
    {
      name: "MongoDB",
      src: "https://img.icons8.com/color/48/000000/mongodb.png",
    },
    {
      name: "Firebase",
      src: "https://img.icons8.com/color/48/000000/firebase.png",
    },
    {
      name: "MySQL",
      src: "https://img.icons8.com/color/48/000000/mysql.png",
    },
    {
      name: "PostgreSQL",
      src: "https://img.icons8.com/color/48/000000/postgreesql.png",
    },
    {
      name: "Prisma",
      src: "https://img.icons8.com/?size=100&id=aqb9SdV9P8oC&format=png&color=000000",
    },
  ];
  const skills2 = [
    {
      name: "Tailwind CSS",
      src: "https://img.icons8.com/color/48/000000/tailwindcss.png",
    },
    {
      name: "JavaScript",
      src: "https://img.icons8.com/color/48/000000/javascript.png",
    },
    {
      name: "Java",
      src: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
    },
    {
      name: "PHP",
      src: "https://img.icons8.com/officel/40/000000/php-logo.png",
    },
    {
      name: "Stripe",
      src: "https://img.icons8.com/?size=100&id=23668&format=png&color=000000",
    },
    {
      name: "C",
      src: "https://img.icons8.com/color/48/000000/c-programming.png",
    },
  ];

  const skills3 = [
    {
      name: "C++",
      src: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
    },
    {
      name: "GitHub",
      src: "https://img.icons8.com/?size=100&id=12599&format=png&color=000000",
    },
    {
      name: "Vercel",
      src: "./vercel.png",
    },
    {
      name: "Trello",
      src: "https://img.icons8.com/?size=100&id=21049&format=png&color=000000",
    },
  ];
  return (
    <div className="my-12 bg-slate-50">
      <div
        className="flex mt-10 pt-10 pb-16 mx-auto justify-center
      text-center text-3xl md:text-5xl divider divider-info w-4/5 bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 bg-clip-text text-transparent roboto-medium "
      >
        Skills & Technologies I Know
      </div>

      <div data-aos="zoom-out" data-aos-duration="1200" className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 px-4 md:px-4  lg:px-32">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center border-2 border-yellow-600 text-blue-900 text-xl roboto-regular hover:bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400  gap-3 my-2 py-4 rounded-xl hover:text-white shadow-2xl shadow-cyan-100 hover:shadow-3xl hover:border-blue-700"
          >
            <img
              src={skill.src}
              alt={skill.name}
              className="h-10 w-10 rounded-full"
            />
            <p className="text-center roboto-medium text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
      <div data-aos="zoom-out" data-aos-duration="1200" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 md:px-8 lg:px-56">
        {skills2.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center border-2 border-yellow-600 text-blue-900 text-xl roboto-regular hover:bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400  gap-3 my-2 py-4 rounded-xl hover:text-white shadow-2xl shadow-cyan-100 hover:shadow-3xl hover:border-blue-700"
          >
            <img
              src={skill.src}
              alt={skill.name}
              className="h-10 w-10 rounded-full"
            />
            <p className="text-center roboto-medium text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
      <div data-aos="zoom-out" data-aos-duration="1200" className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-48 lg:px-96">
        {skills3.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center border-2 border-yellow-600 text-xl roboto-regular hover:bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400  gap-3 my-2 py-4 rounded-xl hover:text-white shadow-2xl shadow-cyan-100 hover:shadow-3xl hover:border-blue-700 text-blue-900 "
          >
            <img
              src={skill.src}
              alt={skill.name}
              className="h-10 w-10 rounded-full"
            />
            <p className="text-center roboto-medium  text-lg ">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
