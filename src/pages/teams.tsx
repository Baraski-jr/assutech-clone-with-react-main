import { useCallback, useEffect, useState } from "react";
import MemberCard from "../Components/UI/cards/member-card";
import Hero from "../Components/UI/hero/hero";
import { client } from "../client";
import SpinnerLoader from "../Components/UI/skeleton/loader";
import MemberSkeleton from "../Components/UI/skeleton/member-card-skeleton";

const Team = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [members, setMembers] = useState<MemberCard[]>([])

  const cleanUpData = useCallback((rawData: any[]) => {
    const cleanMembers = rawData.map((member) => {
      const {sys, fields} = member
      const {id} = sys
      const name = fields.name
      const description = fields.description
      const role = fields.role
      const picture = fields.picture.fields.file.url
      const degree = fields.degree

      return ( {id, picture, name, role, degree, description})
    })
    setMembers(cleanMembers)
  },[])

  const getTeam = useCallback(async () => {

    setIsLoading(true)
    try {
      const response = await client.getEntries({ content_type: "assutechTeams"});
      const responseData = response.items
      cleanUpData(responseData)   
         
      if (responseData) { cleanUpData(responseData) }
      else { setMembers([]) }
      setIsLoading(false)

    } catch (error) { 
        console.log(error)
        setIsLoading(false)
      }
  }, [cleanUpData])

  useEffect(() => {
    getTeam()
  }, [getTeam])

  // if(isLoading) return <SpinnerLoader />

  return (
    <div className="min-h-[95vh] space-y-1">
      <section>
        <Hero mainTitle={"The Team"} subTitle={"Behind every successful project are these amazing personalities, ready to deliver."} />
      </section>
      
      {/* Cards section */}
      <section className="container w-[95%] md:w-[90%] md:max-w-[74rem] lg:max-w-[90rem] mx-auto py-5 md:py-8">
        {
          isLoading ? <MemberSkeleton /> :
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
              members.map(({isLoading , id, name, picture, role, degree, description}:MemberCard) => (
                <MemberCard key={id} id={id} name={name} picture={picture} role={role} degree={degree} description={description} isLoading={isLoading}/>
              ))
            }
        </div>

        }

      </section>
    </div>
  ); 
};
export default Team;
