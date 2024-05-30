import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex  relative justify-between px-5 items-center shadow-lg">
      <NavLink to="/">
        <img
          className="w-16"
          src="https://i.ibb.co/bRq7hN0/Beauty-Plus-20191015170251408-save.jpg"
          alt=""
        />
      </NavLink>
      <ul className=" absolute right-0 top-16 p-5 md:p-0 rounded-bl-md md:bg-white bg-gray-900 md:static md:flex gap-6 text-[20px] text-blue-800 font-bold">
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-800 underline" : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-800 underline" : ""
            }
            to="/products"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-800 underline" : ""
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-800 underline" : ""
            }
            to="/comments"
          >
            Comments
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-800 underline" : ""
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-800 underline" : ""
            }
            to="/users"
          >
            Users
          </NavLink>
        </li>
      </ul>

      <button onClick={() => setOpen((prev) => !prev)} className="md:hidden ">
        {open ? (
          <MdClose className="text-2xl  md:hidden"></MdClose>
        ) : (
          <MdMenu className="text-2xl md:hidden"></MdMenu>
        )}
      </button>
    </div>
  );
};

export default Navbar;
