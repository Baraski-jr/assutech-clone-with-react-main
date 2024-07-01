import ViewCard from "../Components/UI/cards/case-studies-view-card";
import HeaderCard from "../Components/UI/cards/case-studies/header-card";
import CaseStudiesHero from "../Components/UI/hero/case-studies-hero";

const CaseStudiesView = () => {
    return ( 
        <main>
            <section className="relative bg-primary">
                <CaseStudiesHero />
            </section>
            {/* About */}
            <section className="bg-secondary py-[5rem]">
                <div className="container shadow-md w-[90%] p-10">
                    <header className="p-2">
                        <h4 className="text-sm text-red-700 uppercase">About</h4>
                    </header>
                    <figure className="space-y-4">
                        <div className="bg-slate-200 p-3 w-fit">
                            <img src="" alt="Logo" />
                        </div>
                        <figcaption className="space-y-3">
                            <h3 className="text-3xl font-semibold">Marble - Elections Made Easy</h3>
                            <p className="text-thirdairy">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit est ullam provident dolorum sint culpa, doloribus eveniet consequuntur, quas fugiat quibusdam illo rerum quidem earum dolor possimus voluptatum dolore temporibus iure impedit laudantium non recusandae? Veniam provident reprehenderit earum impedit laborum ducimus non corporis exercitationem explicabo totam, optio, numquam expedita!
                            </p>
                        </figcaption>
                    </figure>
                </div>
            </section>
            {/* Goal */}
            <section className="">
                <div className="py-7">
                    <HeaderCard />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    <ViewCard />
                    <ViewCard />
                    <ViewCard />
                    <ViewCard />
                </div>
            </section>
            {/* Challenges */}
            <section>
                <div className="">
                    <HeaderCard />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    <ViewCard />
                    <ViewCard />
                    <ViewCard />
                    <ViewCard />
                </div>
            </section>
            {/* Solutions */}
            <section className="">
                <HeaderCard />
                <div className="">
                    <img src="" alt="Image" />
                </div>
            </section>
            {/* Process */}
            <section className="">
                
            </section>
        </main>
     );
}
 
export default CaseStudiesView;