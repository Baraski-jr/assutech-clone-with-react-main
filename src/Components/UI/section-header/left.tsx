interface Tittle {
    mainTitle: string;
    subTitle: string;
    subTitleColor?: string;
}
const LeftHeader = ({mainTitle, subTitle, subTitleColor}: Tittle) => {
    return ( 
        <div className="py-2 space-y-1">
            <p className="font-medium text-left text-primary text-md uppercase " style={{color: subTitleColor}} > {subTitle} </p>
            <div className="font-bold text-left md:leading-[1.3] text-[1.8rem] md:text-4xl">
                <p> {mainTitle} </p>
            </div>
        </div>
     );
}
export default LeftHeader;