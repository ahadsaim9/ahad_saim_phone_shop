import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, address, phone } = user;
  const { city, street, suite, zipcode } = address;
  return (
    <div className="border rounded-md p-4 flex flex-col gap-2">
      <h1 className="text-2xl font-bold text-red-700">User Id: {id}</h1>
      <section className=" font-semibold text-slate-700 flex flex-col gap-1">
        <p>User Name: {name}</p>
        <p>Phone No: {phone}</p>
        <p>E-mail: {email}</p>
        <p>
          Address : {city}, <br /> {street}, {suite}, {zipcode}
        </p>
        <Link
          to={`/user/${id}`}
          className=" border rounded-md my-5 hover:bg-blue-900 duration-500 hover:text-white border-blue-900 text-blue-900 text-center px-3 py-1"
        >
          Show Details
        </Link>
      </section>
    </div>
  );
};

export default User;
