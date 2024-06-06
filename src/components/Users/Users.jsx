import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h1 className="text-blue-900 text-3xl text-center my-6 font-bold underline mt-20">
        User: {users.length}
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 md:p-5 gap-8 max-w-[1500px] mx-auto">
        {users.map((user) => (
          <User user={user} key={user.id}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
