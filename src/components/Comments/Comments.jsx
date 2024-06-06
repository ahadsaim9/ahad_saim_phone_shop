import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";

const Comments = () => {
  const comments = useLoaderData();

  return (
    <div>
      <h1 className="text drop-shadow-sm text-wrap text-2xl md:text-3xl text-center my-20 text-blue-950 font-bold underline">
        Customer Comments: {comments.length}
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 p-2 md:p-5 xl:grid-cols-4 gap-4 md:m-5 m-2 max-w-[1500px] mx-auto ">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment}></Comment>
        ))}
      </div>
    </div>
  );
};

export default Comments;
