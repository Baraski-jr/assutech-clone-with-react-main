import { Link } from "react-router-dom";
import { ImageSkeleton } from "../skeleton/member-card-skeleton";

interface BlogCard {
    loading?: boolean;
    sys?: {
        id: string;
    }
    title: string;
    url: string;
    cover: {
        url: string;
    }
    date: string;
    tags: string[];
    author: {
      picture: {
        url: string;
      }
      name: string;
      role: string;
      companyName: string;
    }
  }


const BlogCard = ({ title, cover, url, tags, date, author, loading}:BlogCard) => {

    return (
        <Link to={url} className="bg-secondary flex-1 shadow-md w-full mx-auto md:mx-0 max-w-[30rem] md:max-w-[20rem] lg:max-w-[25rem] min-w-[20rem] md:w-[30%] lg:w-4/3">
            <figure>
                <div className="">
                    {
                        loading ?  <ImageSkeleton />
                            : (<img src={cover.url} alt="blog poster" className="max-h-[10rem] w-full object-cover object-top" />)
                    }
                </div>
                <figcaption className="py-5 px-8  space-y-5 h-full">
                    <div className="flex flex-wrap gap-2">
                        {
                            tags?.map((tag:string) => (
                                <p key={tag} className="bg-fourth text-slate-800 text-[.7rem] font-thin py-1 px-2">{tag}</p>
                            ))
                        }
                    </div>
                    <div className="text-slate-800 font-medium text-xl">
                        <h2 className=""> {title} </h2>
                    </div>
                    <div className="space-y-2">
                        <div className="text-sm font-medium">
                            <p>By {author.name} </p>
                        </div>
                        <div className="flex text-[.8rem] text-gray-400">
                            <p className=""> {author.role} ,{author.companyName} </p>
                            <p className="capitalize"> <span className="pr-0">·</span> {date.slice(0,10)}</p>
                        </div>
                    </div>
                </figcaption>
            </figure>
        </Link>
     );
}
 
export default BlogCard;