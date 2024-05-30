import { IoClose } from "react-icons/io5";
import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { id, name, website, email, address, phone } = user;
  const { city, street, suite, zipcode } = address;

  const navigate = useNavigate();
  const closeBtn = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1 className="text-4xl text-gray-800 drop-shadow-lg font-bold text-center my-5">
        User Details
      </h1>
      <section className="md:w-1/2  flex mx-auto relative ">
        <div className="border rounded-md p-4 flex flex-col gap-2 w-full">
          <h1 className="text-2xl font-bold text-red-700">User Id: {id}</h1>
          <section className=" font-semibold text-slate-700 flex flex-col gap-1">
            <p>User Name: {name}</p>
            <p>Phone No: {phone}</p>
            <p>E-mail: {email}</p>
            <p>Website: {website}</p>
            <p>
              Address : {city}, <br /> {street}, {suite}, {zipcode}
            </p>
          </section>
          <button
            className="absolute top-3 text-black right-3 text-3xl  "
            onClick={closeBtn}
          >
            <IoClose />
          </button>
        </div>
      </section>
    </div>
  );
};

export default UserDetails;
