import Navbar from "./navbar";
import rectangle from "asset/svg/rectangle.svg";
import header from "asset/svg/header.svg";
import dot from "asset/svg/dot.svg";
import BannerCard from "./bannerCard";

const Banner = () => {
  return (
    <div className="bg-porcelain">
      <Navbar />

      <div className="container mx-auto mt-10 flex  content-center justify-between">
        <div>
          <img src={rectangle} alt="rectangle" />
          <p className="mt-3 font-bold text-5xl font-heading">
            Get Special Watch <span className="block">with Special Prices</span>
          </p>
          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="bullets">
              <img src={dot} alt="dot" />
              <p>Newest OS Support</p>
            </div>
            <div className="bullets">
              <img src={dot} alt="dot" />
              <p>Water and Dust Resistant</p>
            </div>
            <div className="bullets">
              <img src={dot} alt="dot" />
              <p>Long lasting battery life</p>
            </div>
            <div className="bullets">
              <img src={dot} alt="dot" />
              <p>Get a 20% Cashback right now</p>
            </div>
          </div>

          <div className="mt-8">
            <input
              type="text"
              placeholder="Insert your email"
              className="pr-96 pl-3 py-4 leading-5  rounded-md "
            />
            <input
              type="submit"
              value="Join Pre-Order"
              className="-ml-44 px-8 py-2 rounded-lg bg-oceanGreen text-white"
            />
          </div>
        </div>
        <div>
          <img src={header} alt="header" />
        </div>
      </div>

      <BannerCard />

      <div className="grid grid-cols-3 container mx-auto gap-10 pb-10">
        <div className="white__bar"></div>
        <div class="h-0.5 relative w-80 rounded overflow-hidden">
          <div class="white__bar absolute"></div>
          <div class="h-0.5 bg-denim absolute w-1/2"></div>
        </div>
        <div className="white__bar"></div>
      </div>
    </div>
  );
};

export default Banner;
