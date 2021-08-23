import Blog from "components/Home/blog";
import GetApp from "components/Home/getapp";
import Banner from "components/Home/Header/banner";
import Categories from "components/Home/Hot Items/categories";
import HotItems from "components/Home/Hot Items/hotItems";
import Product from "components/Home/Product Recommendation/product";

const Home = () => {
  return (
    <div>
      <Banner />
      <Product />
      <HotItems />
      <Categories />
      <Blog />
      <GetApp />
    </div>
  );
};

export default Home;
