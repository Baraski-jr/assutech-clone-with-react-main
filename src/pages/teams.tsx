import MemberCard from "../Components/UI/cards/member-card";
import Hero from "../Components/UI/hero/hero";
import { gql, useQuery } from "@apollo/client";
import { MemberSkeleton } from "../Components/UI/skeleton/member-card-skeleton";

const QUERY =  gql`
  query GetMembers {
    assutechTeamsCollection {
      items {
        picture { url }
        name
        role
        degree
        description
      }
    }
  }
`

const Team = () => {
  
  const { data, error, loading } = useQuery(QUERY)
  
  if (error) {
    console.log(error)
  }
  else {
    console.log(data?.assutechTeamsCollection?.items)
  }

 
  return (  
    <div className="min-h-[95vh] space-y-1">

      <section>
        <Hero mainTitle={"The Team"} subTitle={"Behind every successful project are these amazing personalities, ready to deliver."} />
      </section>
      
      {/* Cards section */}
      <section className="container w-[95%] md:w-[90%] md:max-w-[74rem] lg:max-w-[90rem] mx-auto py-5 md:py-8">
        {
          loading ? <MemberSkeleton /> :
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
              data?.assutechTeamsCollection?.items.map(({ name, picture, role, degree, description}:MemberCard) => (
                <MemberCard key={name} name={name} picture={picture} role={role} degree={degree} description={description} loading={loading}/>
              ))
            }
        </div>

        }

      </section> 
    </div>
  ); 
};


export default Team;