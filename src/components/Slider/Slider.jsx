import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
const Slider = () => {
  return (
    <div className=" p-2 max-w-[1490px] h-auto mx-auto">
      <AwesomeSlider className=" h-auto xl:h-[690px] shadow-md mb-10">
        <div className="">
          <img
            className="w-full h-auto transition-all duration-300  cursor-pointer filter grayscale hover:grayscale-0"
            src="https://i.ibb.co/hm55QVt/galaxy-s24-ultra.webp"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-screen transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
            src="https://i.ibb.co/dr21xBC/iphone-15-pro-max.webp"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-screen transition-all duration-300  cursor-pointer filter grayscale hover:grayscale-0"
            src="https://i.ibb.co/QpSwgW8/macbook-air.webp"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-screen transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
            src="https://i.ibb.co/Fscg0MN/pixel-8a.webp"
            alt=""
          />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
