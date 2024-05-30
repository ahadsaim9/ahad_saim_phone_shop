import { Link } from "react-router-dom";

const Phone = ({ phone }) => {
  const { id, brand, image, phone_name, slug } = phone;
  return (
    <div>
      <Link
        to={`/product/${slug}`}
        className="border w-full mx-auto flex flex-col justify-between p-5 hover:p-7 duration-1000 rounded-md shadow-md"
      >
        <img className="max-w-full h-auto" src={image} alt="" />
        <section className="mt-4">
          <h4 className="text-3xl font-bold  text-blue-900 py-3"> {brand} </h4>
          <p className="text-2xl text-gray-600 font-semibold ">{phone_name}</p>
          <p>{id}</p>
          <Link
            to={`/product/${slug}`}
            className=" block font-semibold  bg-gray-300 border rounded-md my-5 hover:bg-blue-900 duration-500 w-full  hover:text-white border-blue-900 text-blue-900 text-center px-3 py-1"
          >
            <button> Phone Details</button>
          </Link>
        </section>
      </Link>
    </div>
  );
};

export default Phone;
