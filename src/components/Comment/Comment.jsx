import { Link } from "react-router-dom";

const Comment = ({ comment }) => {
  const { id, name, email } = comment;
  return (
    <div className="border rounded-md p-4 flex flex-col gap-2 justify-between">
      <div className="">
        <h1 className="md:text-2xl  font-bold ">
          <span className="text-blue-950"> User Id: </span>
          <span className="text-red-600">{id}</span>
        </h1>
        <section className="text-gray-800 text-wrap flex flex-col gap-2 ">
          <p>Name: {name}</p>
          <p>E-mail: {email}</p>
        </section>
      </div>

      <Link
        className="text-2xl font-semibold  text-blue-950 border mt-4 border-blue-950 text-center  py-1 rounded-md shadow-md hover:bg-blue-950 hover:text-white duration-500 "
        to={`/comment/${id}`}
      >
        Comment
      </Link>
    </div>
  );
};

export default Comment;
