import "react-awesome-button/dist/styles.css";
import Slider from "../Slider/Slider";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <section>
        <Slider></Slider>
      </section>

      <div className=" mt-6 max-w-[1490px] h-auto mx-auto  shadow shadow-gray-400 rounded-md p-5 ">
        <h1 className="mb-8  text-3xl font-bold italic ">Best Selling~~~</h1>
        <section className="grid gap-x-5  sm:grid-cols-2 md:grid-cols-5">
          <Link
            to={"http://127.0.0.1:5173/product/apple_iphone_13_mini-11104"}
            className="w-full p-5 hover:p-4 duration-300 mb-9 flex flex-col justify-between items-center gap-1 shadow shadow-gray-400 rounded-md"
          >
            <img
              className="w-full h-auto transition-all duration-300  cursor-pointer filter grayscale hover:grayscale-0"
              src="https://i.ibb.co/zZynr5w/apple-iphone-13-mini.jpg"
              alt=""
            />
            <p className="text-3xl text-blue-950 font-semibold">Apple </p>
            <p className="text-2xl font-semibold"> iPhone 13 mini</p>
            <section className="font-bold text-[18px] ">
              <del className="text-gray-700 ">$120999</del>
              <p className="text-gray-900 ">109999</p>
            </section>
          </Link>

          <Link
            to={"http://127.0.0.1:5173/product/apple_iphone_13_pro_max-11089"}
            className="w-full p-5 mb-9 hover:p-4 duration-300 flex flex-col justify-between items-center gap-1 shadow shadow-gray-400 rounded-md"
          >
            <img
              className="w-full h-auto transition-all duration-300  cursor-pointer filter grayscale hover:grayscale-0"
              src="https://i.ibb.co/DGRT6Ss/apple-iphone-13-pro-max.jpg"
              alt=""
            />
            <p className="text-3xl text-blue-950 font-semibold">Apple </p>
            <p className="text-2xl font-semibold"> iPhone 13 Pro Max</p>
            <section className="font-bold text-[18px] ">
              <del className="text-gray-700 ">$179999</del>
              <p className="text-gray-900 ">159999</p>
            </section>
          </Link>
          <Link
            to={"http://127.0.0.1:5173/product/apple_iphone_13-11103"}
            className="w-full p-5 mb-9 hover:p-4 duration-300 flex flex-col justify-between items-center gap-1 shadow shadow-gray-400 rounded-md"
          >
            <img
              className="w-full h-auto transition-all duration-300  cursor-pointer filter grayscale hover:grayscale-0"
              src="https://i.ibb.co/Jr0t6fX/apple-iphone-13.jpg"
              alt=""
            />
            <p className="text-3xl text-blue-950 font-semibold">Apple </p>
            <p className="text-2xl font-semibold"> iPhone 13</p>
            <section className="font-bold text-[18px] ">
              <del className="text-gray-700 ">$122999</del>
              <p className="text-gray-900 ">129999</p>
            </section>
          </Link>
          <Link
            to={"http://127.0.0.1:5173/product/apple_iphone_12_mini-10510"}
            className="w-full p-5 mb-9 hover:p-4 duration-300 flex flex-col justify-between items-center gap-1 shadow shadow-gray-400 rounded-md"
          >
            <img
              className="w-full h-auto transition-all duration-300  cursor-pointer filter grayscale hover:grayscale-0"
              src="https://i.ibb.co/xqmMBWL/apple-iphone-12-mini-1.jpg"
              alt=""
            />
            <p className="text-3xl text-blue-950 font-semibold">Apple </p>
            <p className="text-2xl font-semibold"> iPhone 12 Mini </p>
            <section className="font-bold text-[18px] ">
              <del className="text-gray-700 ">$99999</del>
              <p className="text-gray-900 ">91999</p>
            </section>
          </Link>
          <Link
            to={"http://127.0.0.1:5173/product/apple_iphone_12_pro_max-10237"}
            className="w-full p-5 mb-9 hover:p-4 duration-300 flex flex-col justify-between items-center gap-1 shadow shadow-gray-400 rounded-md"
          >
            <img
              className="w-full h-auto transition-all duration-300  cursor-pointer filter grayscale hover:grayscale-0"
              src="https://i.ibb.co/SxCskXd/apple-iphone-12-pro-max.jpg"
              alt=""
            />
            <p className="text-3xl text-blue-950 font-semibold">Apple </p>
            <p className="text-2xl font-semibold"> iPhone 12 Pro Max</p>
            <section className="font-bold text-[18px] ">
              <del className="text-gray-700 ">$149999</del>
              <p className="text-gray-900 ">133999</p>
            </section>
          </Link>
        </section>
      </div>

      <Link
        to={"/Products"}
        className=" mt-6 max-w-[1490px] h-auto mx-auto  shadow shadow-gray-400 rounded-t-lg "
      >
        <img
          className="w-full h-auto rounded-t-lg "
          src="https://i.ibb.co/L1fm7zQ/smartwatch-collections.webp"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Home;
