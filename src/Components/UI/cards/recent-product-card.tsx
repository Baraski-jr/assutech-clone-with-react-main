import { useEffect, useState } from "react";

interface Card {
    id: number;
    image: string;
    name:string;
    subName: string;
    text: string
}
 
const RecentProductCard = () => {
    const url: string = "http://localhost:3000/recent-product";
    const [products, setProducts] = useState<Card[]>([])
    useEffect(()=> {
        const FetchData = async (url: string) => {
            const response = await fetch(url);
            const data = await response.json()
            console.log(data) 
            setProducts(data)
        }
        FetchData(url)
    }, [])
    return ( 
        <div className="md:flex lg:space-x-10 space-y-5 md:space-y-[0] md:gap-x-3">
            {products.map(({id, name, image, subName, text}) => (
                <div key={id} className="py-[2rem] md:flex-1 px-3 rounded-md bg-secondary w-[100%] lg:w-2/5 md:w-1/2 shadow-xl">
                    <figure className="flex flex-col py-[2rem] space-y-4 items-center">
                        <img className="w-[3rem]" src={image} alt={name} />
                        <figcaption className="space-y-4">
                            <h2 className="font-medium text-sm text-center"> {name} </h2>
                            <h3 className="font-bold md:text-5xl text-5xl lg:text-4xl text-center"> {subName} </h3>
                        </figcaption>
                    </figure>
                    <div className="border-t py-[2rem] font-medium text-center leading-7">
                        <p>{text}</p>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default RecentProductCard;