import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  id: number;
  name: string;
  url: string
}

const ScrollLogos = () => {
  // Define the Setting
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

  const [partners, setLpartners] = useState<Partner[]>([]);
  const url: string = "http://localhost:3000/partners-logo";
  useEffect(() => {
    const FetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setLpartners(data);
    };
    FetchData();
  }, []);
  return (
    <div className="space-y-2 py-2 md:px-7 md:py-6">
      <h3 className="px-2 text-sm font-semibold md:hidden">Trusted by</h3>
      <div className="flex items-center gap-4 md:divide-x-2">
        <h2 className="hidden text-center text-lg font-bold md:block">
          Trusted by
        </h2>
        <Slider {...settings} className="w-full space-x-2 overflow-x-hidden px-1 py-3 md:px-[0]">
          {
            partners.map(({id, url, name}) => (
                <img key={id} className="max-w-10 max-h-14 object-contain md:max-w-[8rem]" src={url} alt={name} />
            ))
          }
        </Slider>
      </div>
    </div>
  );
};

export default ScrollLogos;
