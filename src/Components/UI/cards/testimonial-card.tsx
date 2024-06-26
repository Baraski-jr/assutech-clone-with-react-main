import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client/core";
import Slider, { Settings } from "react-slick";


interface Testimonial {
  sys: {
    id: string;
  }
  name: string;
  picture?: {
    url: string;
  }
  role: string;
  companyName: string;
  text: string;
  swipeToSlide?: string;
  responsive: {
      breakpoint: number;
      settings: {
        slidesToShow: number;
        slidesToScroll: number;
        infinite: boolean;
        dots: boolean;
        lazyLoad: boolean;
        initialSlide?: number;
      };
    }[];
 }


 const QUERY =  gql`
  query Testimonial {
    testimonialsCollection {
      items {
        sys {
          id
        }
        name
        picture {
          url
        }
        role
        companyName
        text
      }
    }
  }
`

const TestimonialCard = () => {
  const {data, error} = useQuery(QUERY)
  const testimonials = data? data.testimonialsCollection.items : []

  if (error) {console.log(error)}

      // Define the Setting
    const settings: Settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20px",
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 12000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "10px",
            }
          },
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerPadding: "30px",
              dots: true,
              infinite: true
            }
          }
          ]

    };

    return ( 
        <div className="">
            <Slider {...settings} className="w-full py-6 px-4 md:my-2">
                {testimonials.map(({sys, name, role, picture, companyName, text}: Testimonial) => (
                  <div key={sys.id} className="block rounded-xl w-[80%] md:max-w-[25rem] lg:max-w-[30rem] xl:max-w-[25rem] border-4 px-5 py-6 space-y-8 hover:border-red-500 transition-all duration-200">
                      <div className="overflow-hidden">
                          <p className="font-medium leading-7 line-clamp-3">
                              {text}
                          </p>
                      </div>
                      <figure className="flex space-x-5">
                          <img className="w-[2.3rem] h-[2.3rem] object-cover object-left-top rounded-full" src={picture?.url} alt={name} />
                          <figcaption className="space-y-0 flex flex-col justify-center text-md ">
                              <h3 className="text-sm"> {name} </h3>
                              <p className="text-xs text-gray-1"> {role} | {companyName} </p>
                          </figcaption>
                      </figure>
                  </div>
                ))}
            </Slider>
        </div>
     );
}
 
export default TestimonialCard;


// 'tablet': '640px',
// // => @media (min-width: 640px) { ... }

// 'laptop': '1024px',
// // => @media (min-width: 1024px) { ... }

// 'desktop': '1280px',
// // => @media (min-width: 1280px) { ... }
// },