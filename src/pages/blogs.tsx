import { gql } from "@apollo/client/core";
import BlogCard from "../Components/UI/cards/blog-card";
import Hero from "../Components/UI/hero/hero";
import { useQuery } from "@apollo/client";

const QUERY = gql`
query {
  blogPostCollection {
    items {
      sys { id }
      title
      url
      cover { url }
      date
      tags
      author {
        name
        picture { url }
        role
        companyName
      }
    }
  }
}
` 

const Blogs = () => {
  const {data, error, loading} = useQuery(QUERY);
  if (error) {console.log(error)}

  console.log(data)

  const blogs = data? data. blogPostCollection.items : [];

  return (
    <div className="min-h-[95vh] space-y-1">
      <section>
        <Hero mainTitle={"Tech Talks"} subTitle={"We distill the Trends, Thoughts and Technologies."} />
      </section>
      <section className="container w-[95%] md:w-[90%] md:max-w-[74rem] lg:max-w-[90rem] mx-auto py-12">
        <div className="flex flex-wrap gap-5 lg:gap-4">
          {
            blogs.map(({sys, title, cover, url, tags, date, author}:BlogCard) => (
                <BlogCard key={sys?.id} title={title} cover={cover} tags={tags} author={author} url={url} date={date} loading={loading} />
            ))
          }
        </div>
      </section>
    </div>
  );
};
export default Blogs;