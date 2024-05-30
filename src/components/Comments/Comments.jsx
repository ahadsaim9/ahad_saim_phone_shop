import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";

const Comments = () => {
  const comments = useLoaderData();

  return (
    <div>
      <h1 className="text drop-shadow-sm text-3xl text-center my-5 text-blue-950 font-bold underline">
        Customer Comments: {comments.length}
      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 m-5">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment}></Comment>
        ))}
      </div>
    </div>
  );
};

export default Comments;
