interface Title {
    mainTitle: string;
    subTitle?: string;
}
const Hero = ({mainTitle, subTitle}: Title) => {
    return ( 
        <main className="min-h-[37dvh] portrait:lg:min-h-[20dvh] md:min-h-[57vh] bg-watooTijay bg-cover flex items-end text-secondary">
            <div className="container w-[95%] md:w-[90%] md:max-w-[74rem] lg:max-w-[90rem] mb-8 md:mb-24 mx-auto space-y-5">
                <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">{mainTitle}</h1>
                <h3 className="font-semibold text-md md:text-xl pl-2">{subTitle}</h3>
            </div>
        </main>
     );
}
 
export default Hero;