import headerCard from "fakeData/headerCard";
import cardPic from "asset/svg/card.svg";

const BannerCard = () => {
  return (
    <div className="grid grid-cols-3 container mx-auto mt-10 gap-10 pb-10">
      {headerCard.map((card) => (
        <div class="rounded-lg bg-white border-gray-200 overflow-hidden w-80 h-32 flex py-5 pl-4 pr-3 gap-6">
          <div>
            <img src={cardPic} alt="cardPic" />
          </div>

          <div>
            <span className="font-semibold leading-snug">{card.name}</span>
            <span className="block font-bold leading-5 mt-2 tracking-wide">
              {card.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerCard;
