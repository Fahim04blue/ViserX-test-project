import Blog from "components/Home/blog";
import Footer from "components/Home/Footer";
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
      <Footer />
    </div>
  );
};

export default Home;
