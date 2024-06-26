import { Link } from "react-router-dom";

interface ProjectCard {
  mainTitle: string;
  subTitle: string;
  solutionPicture: {
    url: string;
  };
  urls: string;
  tags: string[];
}
const ProjectCard = ({mainTitle, subTitle, solutionPicture, urls, tags}: ProjectCard) => {
    
    return (
        <Link to={urls} className="block shadow-lg" >
            <figure className="bg-gray-100">
                <img src={solutionPicture.url} alt={mainTitle} className="w-[95%] h-[10rem] mx-auto object-cover object-top" />
                <figcaption className="px-3 divide-y-[0.1px] bg-secondary">
                    <div className="py-4 space-y-2">
                        <h2 className="text-thirdairy font-semibold text-2xl"> {mainTitle} </h2>
                        <h4 className="text-gray-800 font-bold text-sm"> {subTitle} </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 py-4">
                        {
                            tags.map(tag => (
                                <div key={tag} className="bg-primary text-secondary text-sm py-1 px-2">{tag}</div>
                            ))
                        }
                    </div>
                </figcaption>
            </figure>
        </Link>
     );
}
 
export default ProjectCard;