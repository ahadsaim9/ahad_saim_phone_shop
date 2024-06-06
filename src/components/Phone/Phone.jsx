import { Link } from "react-router-dom";

const Phone = ({ phone }) => {
  const { brand, image, phone_name, slug } = phone;

  return (
    <div>
      <Link
        to={`/product/${slug}`}
        className="border gap-2 flex text-wrap  flex-col h-full  p-5 hover:p-7 duration-1000 rounded-md shadow-md"
      >
        <img className="max-w-full h-auto" src={image} alt="" />
        <section className="mt-4  flex flex-col  gap-2 h-full ">
          <h4 className="text-3xl font-bold  text-blue-900 py-3"> {brand} </h4>
          <p className="text-2xl  text-gray-600 font-semibold  ">
            {phone_name}
          </p>
        </section>
        <Link
          to={`/product/${slug}`}
          className=" block font-semibold  bg-gray-300 border rounded-md my-5 hover:bg-blue-900 duration-500 w-full  hover:text-white border-blue-900 text-blue-900 text-center px-3 py-1"
        >
          <button> Phone Details</button>
        </Link>
      </Link>
    </div>
  );
};

export default Phone;
