import itemsCard from "fakeData/itemsCard";

const Cards = () => {
  return (
    <div className="mt-10 bg-white h-96 container mx-auto rounded-md shadow-lg">
      <div className="grid grid-cols-4 divide-x-2 h-full py-3  divide-solid divide-partition">
        {itemsCard.map((card) => (
          <div>
            <div className="flex justify-center mt-16">
              <img src={card.image} alt="" />
            </div>
            <div>
              <h1 className="text-center mt-12 font-bold font-heading text-xl">
                {card.title}
              </h1>
              <h4 className="text-center mt-3 text-lineThrough">
                {card.subtitle}
              </h4>
              <h1 className="text-center mt-4 text-oceanGreen font-semibold text-xl">
                {card.price}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
