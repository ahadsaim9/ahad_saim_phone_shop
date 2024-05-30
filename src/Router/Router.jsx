import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../components/Home/Home";
import Contact from "../components/Contact/Contact";
import About from "../components/About/About";
import Comments from "../components/Comments/Comments";
import Products from "../components/Products/Products";
import Users from "../components/Users/Users";
import PhoneDetails from "../components/PhoneDetails/PhoneDetails";
import CommentPage from "../components/CommentPage/CommentPage";
import UserDetails from "../components/UserDetails/UserDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/products",
        loader: () =>
          fetch("https://openapi.programming-hero.com/api/phones?search=apple"),
        element: <Products></Products>,
      },
      {
        path: "/product/:productId",
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/phone/${params.productId}`
          ),
        element: <PhoneDetails></PhoneDetails>,
      },

      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/comments",
        loader: () => fetch(`https://jsonplaceholder.typicode.com/comments`),
        element: <Comments></Comments>,
      },
      {
        path: "/comment/:commentId",
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/comments/${params.commentId} `
          ),
        element: <CommentPage></CommentPage>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
      },
    ],
  },
]);

export default router;
