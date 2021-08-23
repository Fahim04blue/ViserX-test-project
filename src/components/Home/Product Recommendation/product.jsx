import ProductCards from "./productCards";

const Product = () => {
  return (
    <div className="mt-24">
      <h1 className="text-center font-bold font-heading text-4xl leading-loose tracking-wide">
        Product Recommendation
      </h1>
      <p className="text-center text-blueBayoux leading-relaxed">
        You can choose what our recommendation product here
      </p>
      <ProductCards />
    </div>
  );
};

export default Product;
