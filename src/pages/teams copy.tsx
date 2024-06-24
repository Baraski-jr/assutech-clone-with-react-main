import { useEffect, useState } from "react";
import MemberCard from "../Components/UI/cards/member-card";
import Hero from "../Components/UI/hero/hero";

const Team = () => {
  const url: string = "http://localhost:3000/team";
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const [members, setMembers] = useState<MemberCard[]>([])

  
  useEffect(() => {
    const FetchData = async (url: string) => {
      const response = await fetch(url);
      const data = await response.json();
      setMembers(data.cards);
    }
    FetchData(url);
  }, [])
  

  return (
    <div className="min-h-[95vh] space-y-1">
      <section>
        <Hero mainTitle={"The Team"} subTitle={"Behind every successful project are these amazing personalities, ready to deliver."} />
      </section>
      
      {/* Cards section */}
      <section className="container w-[95%] md:w-[90%] md:max-w-[74rem] lg:max-w-[90rem] mx-auto py-5 md:py-8">
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          members.map(({id, name, image, role, degree, description}:MemberCard) => (
            <MemberCard key={id} id={id} name={name} image={image} role={role} degree={degree} description={description}/>
          ))
        }
      </div>
      </section>
    </div>
  ); 
};
export default Team;
