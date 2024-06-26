import { gql, useQuery } from "@apollo/client";

interface Tool {
    sys: {
        id: string;
    }
    title: string;
    description: string;
}

const QUERY =  gql`
query GetProjects {
  customSolutionsCardCollection {
    items {
      sys {
        id
      }
      title
      description
    }
  }
}
`

const Tools = () => {
    const {data, error} = useQuery(QUERY)
    if (error) {console.log(error)}

    const tools = data? data.customSolutionsCardCollection.items: [];

    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map(({sys, title, description}: Tool) => (
                <div key={sys.id} className="grid justify-self-center border-2 rounded-md px-5 py-5 text-center hover:border-rose-300 transition-all duration-200">
                    <h3 className="font-semibold text-base">{title}</h3>
                    <p className="text-base text-slate-900 leading-7">{description}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Tools;