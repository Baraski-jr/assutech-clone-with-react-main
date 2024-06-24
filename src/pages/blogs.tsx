import { useEffect, useState } from "react";
import BlogCard from "../Components/UI/cards/blog-card";
import Hero from "../Components/UI/hero/hero";


const Blogs = () => {
  const url: string = "http://localhost:3000/blogs";
  const [blogs, setBlosgs] = useState<BlogCard[]>([]);

  useEffect(() => {
      const FetchData = async (url: string) => {
        const response = await fetch(url);
        const data = await response.json()
        setBlosgs(data.cards)   
        console.log(data.cards[0].poster)
      }
      FetchData(url)
    }, [])
  return (
    <div className="min-h-[95vh] space-y-1">
      <section>
        <Hero mainTitle={"Tech Talks"} subTitle={"We distill the Trends, Thoughts and Technologies."} />
      </section>
      <section className="container w-[95%] md:w-[90%] md:max-w-[74rem] lg:max-w-[90rem] mx-auto py-12">
        <div className="flex flex-wrap gap-5 lg:gap-8">
          {
            blogs.map(({id, title, image, url, tags, poster}:BlogCard) => (
                <BlogCard key={id} id={id} title={title} image={image} tags={tags} poster={poster} url={url} />
            ))
          }
        </div>
      </section>
    </div>
  );
};
export default Blogs;