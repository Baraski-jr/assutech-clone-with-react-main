import Button from "../../buttons";

const HomeHero = () => {
    return ( 
        <div className="bg-wavePattern bg-80% bg-right-top bg-no-repeat">
          <div className="bg-primary bg-opacity-80 pt-[10rem] md:pt-[9rem] lg:pt-[6rem] px-5 min-h-[85vh] md:min-h-[85vh] mg:bg-slate-500">
            <div className="container md:w-[90%] mad:max-w[90%] lg:max-w-[90rem] mx-auto text-secondary space-y-9 md:space-y-6 lg:space-y-5">
              <h1 className="font-bold text-2xl md:text-5xl lg:text-6xl xl:text-[4rem] lg:pr-4">
                Fit-for-purpose software solutions that deliver business goals
              </h1>
              <p className="text-[.75rem] md:text-[1rem] font-normal">
                Using software to help your business adapt to
                <span className="block md:inline relative pl-2 font-normal opacity-80 after:absolute after:w-[4rem] md:after:w-[90%] after:py-[.5px] after:bg-white after:-bottom-2 after:left-2 after:rounded-full">
                  what is next.
                </span>
              </p>
              {/* Button */}
              <div className="pt-5">
                <Button text="Request free quotation" color="#861206" bgColor="#fff" />
              </div>
              {/* Down arrow button */}
              <div className="pt-5">
                <a href="#solution" className="flex justify-center items-center mx-auto  w-[2.5rem] h-[2.5rem] rounded-full bg-red-50">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[20px] h-[20px] justify-center items-center text-primary font-bold"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
     );
}
 
export default HomeHero;