import { IoClose } from "react-icons/io5";
import { useLoaderData, useNavigate } from "react-router-dom";

const PhoneDetails = () => {
  const data = useLoaderData();
  console.log(data.data);

  const { brand, image, name, slug } = data.data;

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <section>
      <h1 className="text-blue-900 md:text-3xl mt-20 text-center my-6 font-bold underline border-black ">
        Products: {slug}
      </h1>
      <div className="m-8  h-auto w-full md:w-1/3 mx-auto relative ">
        <div className="border w-full h-auto   mx-auto flex flex-col text-center justify-between p-10  rounded-md shadow-md">
          <img
            className="items-center mx-auto max-w-[300px] h-auto"
            src={image}
            alt=""
          />
          <section className="mt-4">
            <h4 className="text-3xl font-bold  text-blue-900 py-3">{brand} </h4>
            <p className="text-2xl text-gray-600 font-semibold ">{name}</p>
          </section>

          <section>
            <button
              className="absolute top-3 text-black right-3 text-3xl  "
              onClick={handleGoBack}
            >
              <IoClose />
            </button>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PhoneDetails;
