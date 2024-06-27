import ProjectCard from "../Components/UI/cards/project-card";
import Hero from "../Components/UI/hero/hero";
import { gql } from "@apollo/client/core";
import { useQuery } from "@apollo/client";
import { ProjectCardSkeleton } from "../Components/UI/skeleton/member-card-skeleton";


const QUERY =  gql`
query GetProjects {
  assutechCaseStudiesCollection {
    items {
    sys {
      id
    }
    solutionPicture {
      url
    }
      mainTitle
      subTitle
      urls
      tags
    }
  } 
}
`

const Projects = () => {
  const {data, error, loading} = useQuery(QUERY)

  if(error) { console.log(error) }

  return (
    <div className="min-h-[95vh] space-y-1">
      <section>
        <Hero mainTitle={"Explore a Selection of Our Project Case Studies"}/>
      </section>
      
      {/* Cards section */}
      <section className="container w-[80%] md:w-[90%] md:max-w-[74rem] lg:max-w-[90rem] mx-auto py-5 md:py-8">
        <div className="">
          {
            loading ? <ProjectCardSkeleton /> :
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {
                data?.assutechCaseStudiesCollection.items.map(({mainTitle, subTitle, solutionPicture, urls, tags}:ProjectCard) => (
                <ProjectCard key={mainTitle}  mainTitle={mainTitle} subTitle={subTitle} solutionPicture={solutionPicture} urls={urls} tags={tags} loading={loading} />
                ))
              }
            </div>
          }
        </div>
      </section>
    </div>
  );
};
export default Projects;

