import fire from "asset/svg/fire.svg";
import Cards from "./cards";

const HotItems = () => {
  return (
    <div className="mt-24 bg-cardHover h-80">
      <div className="flex justify-between container mx-auto">
        <div className="flex mt-10 gap-4">
          <img src={fire} alt="" />
          <h1 className="font-bold font-heading text-4xl leading-loose">
            Hot Item
          </h1>
        </div>
        <div className="mt-10">
          <button className="px-10 py-2  bg-oceanGreen text-white  rounded">
            See All Products
          </button>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default HotItems;
