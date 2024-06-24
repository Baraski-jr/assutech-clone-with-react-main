interface Tittle {
    mainTitleOne: string;
    mainTitleTwo?: string;
    subTitle: string; 
}
const CenterHeader = ({mainTitleOne, mainTitleTwo, subTitle}: Tittle) => {
    return ( 
        <div className="flex flex-col md:items-center py-5 space-y-4">
            <p className="font-medium text-left md:text-center text-primary text-md uppercase "> {subTitle} </p>
            <div className="font-bold text-left md:text-center md:leading-[1.3] text-[1.8rem] md:text-[36px]">
                <p> {mainTitleOne} </p>
                <p> {mainTitleTwo} </p>
            </div>
        </div>
     );
} 
export default CenterHeader;