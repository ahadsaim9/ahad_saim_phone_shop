import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="text-center py-4 text-[20px] flex  justify-between items-center  px-5 sm:px-16 text-white bg-black ">
      <div>
        <Link
          className="text-4xl"
          target="_blank"
          to={"https://www.facebook.com/ahadsaimasm?mibextid=ZbWKwL"}
        >
          <FaFacebook></FaFacebook>
        </Link>
      </div>
      <p className="text-2xl italic text-center font-semibold ">ASM STORE</p>
      <span className="text-3xl ">
        <Link
          className="text-3xl"
          target="_blank"
          to={"https://www.linkedin.com/in/ahad-ali-81bab3278/"}
        >
          <BsLinkedin></BsLinkedin>
        </Link>
      </span>
    </div>
  );
};

export default Footer;
