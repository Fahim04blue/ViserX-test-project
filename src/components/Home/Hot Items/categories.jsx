import categoryCard from "fakeData/categoryCard";
import more from "asset/svg/categories/more.svg";
import soldCategory from "fakeData/soldCategory";
import rectangle4 from "asset/svg/rectangle4.svg";
import { AiFillStar } from "react-icons/ai";
import { VscDebugStackframeDot } from "react-icons/vsc";
import { HiShoppingCart } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";

const Categories = () => {
  return (
    <div className="mt-72 container mx-auto">
      <div className="  divide-y-2 divide-solid divide-partition">
        <div></div>
        <div></div>
      </div>
      <div className=" grid grid-cols-6 mt-20  gap-12 ">
        {categoryCard.map((card) => (
          <div className="category__card ">
            <div className="category__card--img">
              <img src={card.icon} alt="" />
            </div>
            <h1 className="text-center mt-4 font-heading font-semibold">
              {card.name}
            </h1>
          </div>
        ))}
        <div className="category__card bg-porcelain">
          <div className="category__card--img">
            <img src={more} alt="" />
          </div>
          <h1 className="text-center mt-4 font-heading font-semibold">
            More Category
          </h1>
        </div>
      </div>
      <div className="mt-24 grid grid-cols-3 gap-10">
        <h1 className="sold__category">Most Sold Laptop</h1>
        <h1 className="sold__category">Most Sold Camera</h1>
        <h1 className="sold__category">Most Sold Headphone</h1>
        {soldCategory.map((sold) => (
          <div className="rounded-lg bg-porcelain border-gray-200 overflow-hidden w-80 h-32 flex py-5 pl-4 pr-3 gap-6">
            <img src={rectangle4} alt="" />
            <div>
              <span className="font-heading font-semibold text-nileBlue">
                {sold.title}
              </span>
              <div className="flex gap-1 items-center mt-5">
                <AiFillStar color="#ffc200" />
                <span className="text-sm">4.8</span>
                <VscDebugStackframeDot />
                <HiShoppingCart color="#5A7184" />
                <span className="text-sm font-semibold">{sold.units}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center">
          <h1 className="text-oceanGreen font-bold">Leaderboard details</h1>
          <IoIosArrowForward color=" #36B37E" />
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-oceanGreen font-bold">Leaderboard details</h1>
          <IoIosArrowForward color=" #36B37E" />
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-oceanGreen font-bold">Leaderboard details</h1>
          <IoIosArrowForward color=" #36B37E" />
        </div>
      </div>
      <div className=" mt-24  divide-y-2 divide-solid divide-partition">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Categories;
