import Button from "../../buttons";

const CaseStudiesHero = () => {
    return ( 
        <div className="bg-wavePattern bg-80% bg-right-top bg-no-repeat min-h-full ">
          <div className="bg-primary bg-opacity-80 min-h-[85vh] md:min-h-[100vh] portrait:lg:min-h-[50dvh]  grid place-content-center">
              <div className="text-secondary text-center space-y-7 xl:pt-10">
                <h1 className="font-bold text-2xl md:text-5xl lg:text-6xl xl:text-[4rem]"> MARBLE GAMBIA </h1>
                <h2 className="font-bold text-xl md:text-3xl lg:text-3xl xl:text-[3rem]">A Cross-Platform Election Information App</h2>
                <a className="block pt-2" href="http://">
                    <Button color={"#861206"} text={"visit site"} bgColor={"#F9F9F9"}  />      
                </a>
               </div>
          </div>
        </div>
     );
}
 
export default CaseStudiesHero;