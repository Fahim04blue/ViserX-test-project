import blog from "asset/svg/blog.svg";
import save from "asset/svg/save.svg";
import blogCard from "fakeData/blogCard";
import { AiOutlineArrowRight } from "react-icons/ai";

const Blog = () => {
  return (
    <div className="mt-32 container mx-auto">
      <div className="flex justify-center gap-2">
        <img src={blog} alt="" />
        <h1 className="font-heading font-bold text-nileBlue text-4xl">
          Read our Blog
        </h1>
      </div>
      <h1 className="text-center text-blueBayoux">
        Check our latest article to get inspiring content for shopping
      </h1>
      <div className="mt-10 grid grid-cols-3 gap-10">
        {blogCard.map((card) => (
          <div className="rounded-lg bg-porcelain border-gray-200 w-80 h-full relative   ">
            <div className="flex justify-center mt-8">
              <img className="w-10/12" src={card.image} alt="" />
            </div>

            <h1 className="mt-5 ml-9 text-xl font-heading font-bold text-nileBlue ">
              {card.title}
            </h1>
            <p className="mt-5 ml-9 text-sm text-blueBayoux">{card.subtitle}</p>
            <div className="flex items-center gap-3 mt-5 ml-9 pb-6">
              <span className="font-bold text-oceanGreen ">Read More</span>
              <span>
                <AiOutlineArrowRight color="#36B37E" />
              </span>
            </div>
            <div className="absolute top-0 right-0 mt-12 mr-16">
              <img src={save} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
