import { Link } from "react-router-dom";

interface BlogCard {
    id: number;
    title: string;
    image: string;
    url: string;
    tags: string[];
    poster: {
      name: string;
      role: string;
      company: string;
    }
  }
const BlogCard = ({id, title, image, url, tags, poster}: BlogCard) => {

    return (
        <Link to={url}  key={id} className="bg-secondary flex-1 shadow-md w-full mx-auto md:mx-0 max-w-[30rem] md:max-w-[20rem] lg:max-w-[25rem] min-w-[20rem] md:w-[30%] lg:w-4/3">
            <figure>
                <div className="">
                    <img src={image} alt="blog poster" className="max-h-[10rem] w-full object-cover object-top" />
                </div>
                <figcaption className="py-5 px-8  space-y-5 h-full">
                    <div className="flex flex-wrap gap-2">
                        {
                            tags?.map((tag:string) => (
                                <p key={tag} className="bg-fourth text-slate-800 text-xs font-thin py-1 px-2">{tag}</p>
                            ))
                        }
                    </div>
                    <div className="text-slate-800 font-medium text-xl">
                        <h2 className=""> {title} </h2>
                    </div>
                    <div className="space-y-2">
                        <div className="text-sm font-medium">
                            <p>By {poster.name} </p>
                        </div>
                        <div className="flex space-x-1 text-xs font-semibold text-gray-400">
                            <p>{poster.company}, {poster.role} </p>
                            <div className="flex space-x-1">
                                <span>·</span>
                                <p>June 02, 2023</p>
                            </div>
                        </div>
                    </div>
                </figcaption>
            </figure>
        </Link>
     );
}
 
export default BlogCard;