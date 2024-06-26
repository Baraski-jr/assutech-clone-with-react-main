import { gql, useQuery } from "@apollo/client";

interface Card {
    sys: { id: string; }
    picture: { url: string; }
    mainTitle: string;
    subitle: string;
    description: string;
}

const QUERY =  gql`
query GetProjects {
  recentProductsCardCollection {
    items {
      sys {
        id
      }
      picture {
        url
      }
      mainTitle
      subitle
      description
    }
  }
}
`
 
const RecentProductCard = () => {
    const {data, error} = useQuery(QUERY)
    if (error) {console.log(error)}

    const products = data ? data. recentProductsCardCollection.items : []
    return ( 
        <div className="md:flex lg:space-x-10 space-y-5 md:space-y-[0] md:gap-x-3">
            {products.map(({sys, mainTitle, subitle, picture, description}: Card) => (
                <div key={sys.id} className="py-[2rem] md:flex-1 px-3 rounded-md bg-secondary w-[100%] lg:w-2/5 md:w-1/2 shadow-xl">
                    <figure className="flex flex-col py-[2rem] space-y-4 items-center">
                        <img className="w-[3rem]" src={picture.url} alt={mainTitle} />
                        <figcaption className="space-y-4">
                            <h2 className="font-medium text-sm text-center"> {mainTitle} </h2>
                            <h3 className="font-bold md:text-5xl text-5xl lg:text-4xl text-center"> {subitle} </h3>
                        </figcaption>
                    </figure>
                    <div className="border-t py-[2rem] font-medium text-center leading-7">
                        <p>{description}</p>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default RecentProductCard;