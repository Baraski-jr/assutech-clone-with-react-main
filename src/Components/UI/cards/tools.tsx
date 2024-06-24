import { useEffect, useState } from "react";

interface Tool {
    id: string;
    name: string;
    image: string;
    text: string;
}
const Tools = () => {
    const [tools, setTools] = useState<Tool[]>([])
    const url: string = "http://localhost:3000/tools"
    useEffect(() => {
        const FetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setTools(data)
        }
        FetchData()
    }, [])
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map(({id, name, text}) => (
                <div key={id} className="grid justify-self-center border-2 rounded-md px-5 py-5 text-center hover:border-rose-300 transition-all duration-200">
                    <h3 className="font-semibold text-base">{name}</h3>
                    <p className="text-base text-slate-900 leading-7">{text}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Tools;