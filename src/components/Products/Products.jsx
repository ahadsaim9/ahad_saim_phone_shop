import { useLoaderData } from "react-router-dom";
import Phone from "../Phone/Phone";

const Products = () => {
  const PhonesData = useLoaderData();
  const phones = PhonesData.data;

  return (
    <div>
      <h1 className="text-blue-900 text-3xl text-center my-6 font-bold underline">
        Products: {phones.length}
      </h1>
      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 md:p-5 gap-8 max-w-[1500px] mx-auto  ">
        {phones.map((phone, idx) => (
          <Phone key={idx} phone={phone}></Phone>
        ))}
      </section>
    </div>
  );
};

export default Products;
