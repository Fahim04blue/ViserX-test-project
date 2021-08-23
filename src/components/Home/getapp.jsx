import rectangle6 from "asset/svg/rectangle6.svg";
import rectangle7 from "asset/svg/rectangle7.svg";

const GetApp = () => {
  return (
    <div className="mt-24 bg-sun h-full ">
      <div className="flex items-center justify-between container mx-auto">
        <img className="pt-14" src={rectangle6} alt="" />
        <h1 className="text-5xl font-heading font-bold text-white">
          Download Ehya now
          <span className="block">and Get Promo Everyday</span>
          <div className="flex gap-3 mt-10 ">
            <img className="rounded-md" src={rectangle7} alt="" />
            <img className="rounded-md" src={rectangle7} alt="" />
          </div>
        </h1>
      </div>
    </div>
  );
};

export default GetApp;
