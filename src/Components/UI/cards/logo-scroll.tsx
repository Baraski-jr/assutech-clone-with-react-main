import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gql } from "@apollo/client/core";
import { useQuery } from "@apollo/client";
interface Settings {
  dots: boolean;
  infinite: boolean;
  autoplay: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  speed: number;
  autoplaySpeed: number;
  cssEase: string;
}
interface Partner {
  sys : {
    id : string
  }
  name: string;
  picture: {
    url: string;
  }
}


const QUERY =  gql`
  query GetProjects {
    partnersLogoCollection {
      items {
        sys {id}
        name
        picture { url }
      }
    }
  }
`

const ScrollLogos = () => {
  const {data, error} = useQuery(QUERY)
  const partnersLogo = data? data.partnersLogoCollection.items : [] as Partner[]

  if (error) {
    console.log(error)
  }
  else {
    console.log(partnersLogo)
  }


  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 9000,
    cssEase: "linear"
  };

  return (
    <div className="space-y-2 py-2 md:px-7 md:py-6">
      <h3 className="px-2 text-sm font-semibold md:hidden">Trusted by</h3>
      <div className="flex items-center gap-4 md:divide-x-2">
        <h2 className="hidden text-center text-lg font-bold md:block">
          Trusted by
        </h2>
        <Slider {...settings} className="w-full space-x-2 overflow-x-hidden px-1 py-3 md:px-[0]">
          {
            partnersLogo.map(({picture, name}: Partner) => (
                <img key={name} className="max-w-10 max-h-14 object-contain md:max-w-[8rem]" src={picture.url} alt={name} />
            ))
          }
        </Slider>
      </div>
    </div>
  );
};

export default ScrollLogos;
