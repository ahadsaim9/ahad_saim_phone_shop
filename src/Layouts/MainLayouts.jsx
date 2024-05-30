import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayouts = () => {
  return (
    <div className="flex flex-col justify-between h-svh bg-transparent w-full">
      <section>
        <nav>
          <Navbar></Navbar>
        </nav>
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
