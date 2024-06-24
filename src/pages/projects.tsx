import { useEffect, useState } from "react";
import ProjectCard from "../Components/UI/cards/project-card";
import Hero from "../Components/UI/hero/hero";

const Projects = () => {
  const url: string = "http://localhost:3000/projects";
  const [projects, setProjects] = useState<ProjectCard[]>([]);

  useEffect(() => {
    const FetchData = async (url: string) => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.cards)
      setProjects(data.cards);
    }

    FetchData(url);
  }, [])

  return (
    <div className="min-h-[95vh] space-y-1">
      <section>
        <Hero mainTitle={"Explore a Selection of Our Project Case Studies"}/>
      </section>
      
      {/* Cards section */}
      <section className="container w-[80%] md:w-[90%] md:max-w-[74rem] lg:max-w-[90rem] mx-auto py-5 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {
            projects.map(({id, name, describ, image, url, tags}:ProjectCard) => (
              <ProjectCard key={id} id={id} name={name} describ={describ} image={image} url={url} tags={tags} />
            ))
          }
        </div>
      </section>
    </div>
  );
};
export default Projects;

