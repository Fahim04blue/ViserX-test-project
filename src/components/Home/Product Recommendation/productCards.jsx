import rectangle2 from "asset/svg/rectangle2.svg";
import rectangle3 from "asset/svg/rectangle3.svg";
import heart from "asset/svg/heart.svg";
import heart2 from "asset/svg/heart2.svg";

const ProductCards = () => {
  return (
    <div className="grid grid-cols-4 container mx-auto gap-10 mt-20">
      <div className="card">
        <div className="pt-3 flex justify-end pr-3">
          <img src={heart} alt="" />
        </div>
        <div className="flex justify-center">
          <img src={rectangle2} alt="" />
        </div>
        <div>
          <p className="card__heading">Modena Juice & Vege Blender Silver</p>
          <div className="card__subHeading">
            <p className="font-semibold leading-5">$1,500.00</p>
            <p className="line-through text-lineThrough">$2,000.00</p>
          </div>
          <div className="flex justify-center">
            <button className="card__btn">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-cardHover border-gray-200 w-64 h-96 overflow-hidden">
        <div className="pt-3 flex justify-end pr-3">
          <img src={heart2} alt="" />
        </div>
        <div className="flex justify-center">
          <img src={rectangle2} alt="" />
        </div>
        <div>
          <p className="card__heading">Leica M3 with APO- Summicron 50mm 1:2</p>
          <div className="card__subHeading">
            <p className="font-semibold leading-5">$1,500.00</p>
            <p className="line-through text-lineThrough">$2,000.00</p>
          </div>
          <div className="flex justify-center">
            <button className="px-20 py-2 mt-5 bg-oceanGreen text-white  rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="pt-3 flex justify-end pr-3">
          <img src={heart} alt="" />
        </div>
        <div className="flex justify-center">
          <img src={rectangle2} alt="" />
        </div>
        <div>
          <p className="card__heading">
            Asus Zenbook Pro 13” <span className="block">UX-430 US 2018</span>{" "}
          </p>
          <div className="card__subHeading">
            <p className="font-semibold leading-5">$1,500.00</p>
            <p className="line-through text-lineThrough">$2,000.00</p>
          </div>
          <div className="flex justify-center">
            <button className="card__btn">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="card__special">
        <p className="card__heading text-white">Apple Watch 4 2020</p>
        <div className="mt-3 ">
          <p className="text-white flex justify-center gap-2 ">
            <span className="card__specail--clock">10</span> :
            <span className="card__specail--clock">25</span> :
            <span className="card__specail--clock">54</span>
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <img src={rectangle3} alt="" />
        </div>
        <div className="flex justify-center">
          <button className="card__special--btn">Buy Now $1,500.00</button>
        </div>
      </div>

      <div className="card">
        <div className="pt-3 flex justify-end pr-3">
          <img src={heart} alt="" />
        </div>
        <div className="flex justify-center">
          <img src={rectangle2} alt="" />
        </div>
        <div>
          <p className="card__heading">
            Asus Zenbook Pro 13” <span className="block">UX-430 US 2018</span>
          </p>
          <div className="card__subHeading">
            <p className="font-semibold leading-5">$1,500.00</p>
            <p className="line-through text-lineThrough">$2,000.00</p>
          </div>
          <div className="flex justify-center">
            <button className="card__btn">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="pt-3 flex justify-end pr-3">
          <img src={heart} alt="" />
        </div>
        <div className="flex justify-center">
          <img src={rectangle2} alt="" />
        </div>
        <div>
          <p className="card__heading">Modena Juice & Vege Blender Silver</p>
          <div className="card__subHeading">
            <p className="font-semibold leading-5">$1,500.00</p>
            <p className="line-through text-lineThrough">$2,000.00</p>
          </div>
          <div className="flex justify-center">
            <button className="card__btn">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="pt-3 flex justify-end pr-3">
          <img src={heart} alt="" />
        </div>
        <div className="flex justify-center">
          <img src={rectangle2} alt="" />
        </div>
        <div>
          <p className="card__heading">Leica M3 with APO- Summicron 50mm 1:2</p>
          <div className="card__subHeading">
            <p className="font-semibold leading-5">$1,500.00</p>
            <p className="line-through text-lineThrough">$2,000.00</p>
          </div>
          <div className="flex justify-center">
            <button className="card__btn">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="pt-3 flex justify-end pr-3">
          <img src={heart} alt="" />
        </div>
        <div className="flex justify-center">
          <img src={rectangle2} alt="" />
        </div>
        <div>
          <p className="card__heading">
            iPad Pro 2018 with <span className="block">256GB - Black</span>{" "}
          </p>
          <div className="card__subHeading">
            <p className="font-semibold leading-5">$1,500.00</p>
            <p className="line-through text-lineThrough">$2,000.00</p>
          </div>
          <div className="flex justify-center">
            <button className="card__btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
