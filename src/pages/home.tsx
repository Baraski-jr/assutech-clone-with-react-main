import Button from "../Components/buttons";
import BlogCard from "../Components/UI/cards/blog-card";
import TestimonialCard from "../Components/UI/cards/testimonial-card";
import Tools from "../Components/UI/cards/tools";
import ScrollLogos from "../Components/UI/cards/logo-scroll";
import CenterHeader from "../Components/UI/section-header/center";
import LeftHeader from "../Components/UI/section-header/left";
import think from "../assets/Background/think.webp";
import RecentProductCard from "../Components/UI/cards/recent-product-card";
import ContactForm from "../Components/UI/cards/contact-form";
import { gql, useQuery } from "@apollo/client";
import HomeHero from "../Components/UI/hero/home-hero";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const QUERY = gql`
  query {
    blogPostCollection {
      items {
          sys { id }
          title
          url
          cover { url }
          date
          tags
          author {
              picture { url }
              name
              role
              companyName
          }
      }
  }
}
` 

const Home = () => {
  const {data} = useQuery(QUERY)
  const blogs =  data? data. blogPostCollection.items : []
  const limitedblogs = blogs.slice(0, 3);

  return ( 
    <main>
      {/* // Hero Section */}
      <section className="relative bg-primary">
        <HomeHero />
      </section>
      {/* Auto scroll logo */}
      <section className="relative -top-12 left-0 md:inset-x-0 lg:w md:w-[90%] shadow-lg w-full mx-auto bg-secondary">
        <ScrollLogos />
      </section>
      {/* Second Section */}
      <section id="solution" className="space-y-7 container max-w-[90%] mad:max-w[90%] lg:max-w-[90rem] mx-auto min-h-[85vh] portrait:md:min-h-[50dvh] px-5 pb-12 bg-secondary">
        <div className="">
          <CenterHeader mainTitleOne={"Customer-focused solutions that"} mainTitleTwo={"run on all devices. Anywhere."} subTitle={"CUSTOM SOLUTIONS WE PROVIDE"} />
        </div>
        <div className="container w-[95%] md:w-[85%] mad:max-w[90%] lg:max-w-[95rem] mx-auto">
          <Tools />
        </div>
      </section>
      <section className="after:absolute after:w-full after:py-[.8rem] after:bg-rose-200 after:-bottom-4 after:-rotate-[.7deg] after:z-10 min-h-[70dvh] portrait:md:min-h-[45dvh]  pb-12 lg:flex flex-wrap py-28 relative bg-thirdiary">
        <div className="container w-[95%] md:w-[85%] mad:max-w[90%] lg:max-w-[95rem] mx-auto">
          <div className="flex flex-wrap space-y-5 md:space-y-0">
            <div className="md:w-full lg:w-5/12 space-y-3">
              <LeftHeader mainTitle={"Modern problems require modern solutions"} subTitle={"RECENT PRODUCTS"} />
              <p className="font-medium text-base leading-7 md:mr-10 sm:mr-0 lg:pr-6">
                At Assutech our approach to software development is people-focused and results-oriented while remaining alive to the realities of our rapidly changing world. We trust teams to work directly with customers to understand the goals and provide solutions in a fast and incremental way. Centered around adaptive planning, self-organization, and short modular deliverables.
              </p>
              <div className="py-8">
                <Button color={"#fff"} text={"Get Started"} bgColor={"#861206"} />
              </div>
            </div>
            {/* Products Cards */}
            <div className="lg:w-7/12">
              <RecentProductCard  />
            </div>
          </div>
        </div>
      </section>
      {/* WatooTijay Third Section */}
      <section className="z-20 bg-rose-200 bg-opacity-50 relative">
          <div className=" bg-watooTijay mix-blend-multiply bg-cover">
          <div className="flex flex-col justify-center container max-w-[90%] md:w-[85%] mad:max-w[90%] lg:max-w-[90rem] mx-auto min-h-[40dvh] portrait:md:min-h-[20dvh] px-5 py-12">
            <div className="text-secondary space-y-2">
              <p className="font-medium">#WatooTijay</p>
              <div className="font-semibold md:text-[3.5rem] text-[2.1rem] md:leading-1.3">
                <h1>You have ideas. We have solution.</h1>
                <h1>Time to join forces.</h1>
              </div>
              <div className="py-5">
                <Button color={"#861206"} text={"let's get to work"} bgColor={"#F8CCC8"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Fouth Section */}
      <section className="">
        <div className="min-h-[55vh] md:min-h-[60vh] lg:min-h-[85vh] portrait:md:min-h-[30dvh] flex flex-col justify-center">
          <div className="space-y-5 portrait:lg:space-y-2">
            <div className="px-4 lg:pb-14">
              <CenterHeader mainTitleOne={"Stories of Satisfaction"} subTitle={"CUSTOMER REVIEWS"} />
            </div>
            <TestimonialCard />
          </div>
        </div>
      </section>
      {/* Tech Talk */}
      <section className="bg-primary">
        <div className="bg-wavePattern bg-90% bg-right-top bg-no-repeat">
          <div className="bg-primary bg-opacity-80">
            <div className="container w-[95%] mad:max-w[90%] md:w-[85%] lg:max-w-[90rem] mx-auto min-h-[95vh] py-5 portrait:md:min-h-[50dvh] ">
              <div className="">
                <div className="space-y-5 text-secondary pt-10 ">
                  <LeftHeader mainTitle={"We love talking tech. If you do too, this may be the space for you."} subTitle={"TECH TALKS"} subTitleColor={"#fff"} />
                </div>
                <div className="py-5 hidden md:block">
                  <Button color={"#fff"} text={"Explore All"} bgColor={"transparent"} border={"1px solid #fff"} />
                </div>
                <div className="mt-3">
                  <div className="flex flex-wrap lg:flex-nowrap md:flex-wrap gap-5 lg:gap-5">
                  {
                    limitedblogs.map(({sys, title, cover, url, tags, date, author}:BlogCard) => (
                        <BlogCard key={sys?.id} title={title} cover={cover} tags={tags} author={author} url={url} date={date} />
                    ))
                  }
                  </div>
                </div>
                <div className="md:hidden py-5 relative -left-5">
                  <Button color={"#ffcdc8"} text={"Explore All Blogs"} icon={"+"} bgColor={"transparent"} /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Think Big */}
      <section className="">
        <figure className="bg-primary">
          <div className="">
            <img className="w-full" src={think} alt="Think Big" />
          </div>
          <figcaption className="bg-wavePattern bg-80% bg-[120%] bg-no-repeat">
            <div className="py-8 md:py-16 bg-primary bg-opacity-90">
              <div className="font-extrabold text-3xl mx-auto text-center text-secondary leading-10">
                <p>Think Big. Think Different. Think Assutech.</p>
              </div>
            </div>
          </figcaption>
        </figure>
      </section>
      {/* Statistics */}
      <section className="py-8 min-h-[50dvh] md:min-h-[70dvh] portrait:md:min-h-[25dvh]  flex flex-col justify-center items-center space-y-10">
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
          {({ isVisible }: { isVisible: boolean }) => (
            <>
              <header className="text-center space-y-2 py-5">
                <h4 className="text-primary text-sm">STATISTICS</h4>
                <h2 className="font-semibold text-xl md:text-3xl">Honouring Our Journey</h2>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="text-center text-lg text-slate-700 space-y-3">
                  <h1 className="text-primary font-bold text-4xl md:text-6xl">
                    {isVisible ? <CountUp duration={2.75} delay={0.5} suffix="+" end={20} /> : null}
                  </h1>
                  <p className="">AssuTechies on board</p>
                </div>
                <div className="text-center text-lg text-slate-700 space-y-3">
                  <h1 className="text-primary font-bold text-4xl md:text-6xl">
                    {isVisible ? <CountUp duration={2.75} delay={0.5} suffix="+" end={50} /> : null}
                  </h1>
                  <p className="">Delivered projects</p>
                </div>
                <div className="text-center text-lg text-slate-700 space-y-3">
                  <h1 className="text-primary font-bold text-4xl md:text-6xl">
                    {isVisible ? <CountUp duration={2.75} delay={0.5} suffix="+" end={12} /> : null}
                  </h1>
                  <p className="">Years of experience</p>
                </div>
              </div>
            </>
          )}
        </VisibilitySensor>
      </section>
      {/* CONTACT FORM */}
      <section className="bg-primary py-10 lg:py-[5rem]">
        <div className=" contain w-[90%] md:w-[85%] mx-auto min-h-[80vh] lg:min-h-[90vh] portrait:md:min-h-[40dvh]  grid lg:grid-cols-2 place-content-center">
          {/* Left side */}
          <div className="flex flex-col justify-between md:h-[70%]">
            <header className="space-y-5 text-secondary uppercase ">
              <h4 className="text-sm font-semibold">contact form</h4>
              <div className="font-bold text-2xl md:text-4xl space-y-4">
                <h2 className="">New project in mind?</h2>
                <h2 className="">Let's Talk</h2>
              </div>
              <h4 className="text-sm font-semibold">Reply in less than 24 hours</h4>
            </header>
            {/* Directly Contact us */}
            <div className="py-10 text-secondary">
              <h2 className="font-semibold text-2xl md:text-3xl">Directly Contact Us</h2>
              <div className="text-sm space-y-2 py-4">
                <div className="space-x-3">
                  <span className="">@</span>
                  <a href="tel:+220 3814760"> +220 3814760</a>
                </div>
                <div className="space-x-3">
                  <span className="">@</span>
                  <a href="mailto:info@assutech.gm">info@assutech.gm</a>
                </div>
              </div>
            </div>
          </div>
          {/* Left side */}
          <ContactForm />
        </div>
      </section>
    </main>
  );
};
export default Home;
