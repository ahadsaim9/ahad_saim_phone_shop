import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="fixed top-0 right-0 w-full color-1 z-10 ">
      <div className="flex   relative justify-between h-16  px-5 items-center shadow-lg">
        <NavLink to="/">
          <h1 className="text-white md:text-2xl font-bold italic  ">
            ASM STORE
          </h1>
        </NavLink>
        <ul
          className={` absolute duration-1000  ${
            open ? "top-16 right-0" : "-right-[300px] top-16 "
          } p-5 md:p-0 rounded-bl-md   md:static md:flex gap-6 text-[20px] text-white font-bold color-1 md bg-transparent`}
        >
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " border-b-orange-500 border-b-2"
                  : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-orange-500 border-b-2"
                  : ""
              }
              to="/products"
            >
              Products
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-orange-500 border-b-2"
                  : ""
              }
              to="/comments"
            >
              Comments
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-orange-500 border-b-2"
                  : ""
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-orange-500 border-b-2"
                  : ""
              }
              to="/users"
            >
              Users
            </NavLink>
          </li>
        </ul>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden  "
        >
          {open ? (
            <MdClose className="text-2xl  md:hidden"></MdClose>
          ) : (
            <MdMenu className="text-2xl md:hidden"></MdMenu>
          )}
        </button>
      </div>
    </section>
  );
};

export default Navbar;
