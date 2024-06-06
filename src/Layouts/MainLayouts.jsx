import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Ring } from "react-awesome-spinners";

const MainLayouts = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);

  return (
    <div className="flex flex-col justify-between h-svh bg-transparent w-full">
      <section>
        <nav>
          <Navbar></Navbar>
        </nav>
        <div className="mt-20">
          {navigation.state === "loading" ? (
            <p className="h-screen items-center text-center text-3xl ">
              Loading..... <Ring />
            </p>
          ) : (
            <Outlet></Outlet>
          )}
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
