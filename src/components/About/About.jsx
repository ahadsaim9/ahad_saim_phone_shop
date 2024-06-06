import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="px-2 mt-20 md:w-2/5 mx-auto text-nowrap h-[50vh] justify-center flex flex-col md:text-center ">
      <p className="text-3xl text-blue-950 italic text-center mb-5 font-bold  ">
        ASM STORE
      </p>
      <p className="md:text-2xl font-semibold">
        E-mail_Address:{" "}
        <span className="italic text-blue-900">ahadsaim9@gmail.com</span>
      </p>

      <p className="md:text-2xl font-semibold">
        Facebook_Link:
        <Link
          target="_blank"
          to={"https://www.facebook.com/ahadsaimasm?mibextid=ZbWKwL"}
        >
          <span className="underline text-blue-900 italic duration-500 hover:text-blue-950 text-[14px] md:text-2xl ">
            facebook.com/ahadsaim
          </span>
        </Link>
      </p>
    </div>
  );
};

export default About;
