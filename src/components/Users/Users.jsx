import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h1 className="text-blue-900 text-3xl text-center my-6 font-bold underline">
        User: {users.length}{" "}
      </h1>
      <div className="grid md:grid-cols-3 gap-5 mx-4">
        {users.map((user) => (
          <User user={user} key={user.id}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
