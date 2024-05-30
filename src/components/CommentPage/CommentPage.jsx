import { IoClose } from "react-icons/io5";
import { useLoaderData, useNavigate } from "react-router-dom";

const CommentPage = () => {
  const comment = useLoaderData();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <section>
      <h1 className="text drop-shadow-sm text-3xl text-center my-5 text-blue-950 font-bold underline">
        Comment
      </h1>
      <div className="sm:w-1/2 relative mx-auto text-wrap mt-8 shadow-lg p-10 ">
        <p className=" text-gray-500 ">{comment.body}</p>
        <button
          className="absolute top-3 text-black right-3 text-3xl  "
          onClick={handleGoBack}
        >
          <IoClose />
        </button>
      </div>
    </section>
  );
};

export default CommentPage;
