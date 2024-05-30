import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h1 className=" font-bold shadow-md h-screen items-center flex justify-center text-6xl shadow-orange-200 text-red-700">
        Oops....!!!
      </h1>
      <p>Sorry an unexpected error has occurred</p>
      <p>
        <i>{error.statusText || error.message} </i>
      </p>
      <div>{error.status === 404 && <div>{error.message}</div>}</div>
    </div>
  );
};

export default ErrorPage;
