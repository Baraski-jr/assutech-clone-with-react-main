import assutechLogo from "../assets/icons/Logos/Assutech.png";
import { Link } from "react-router-dom";



const navLinks = [
  {
    "id": 0,
    "url": "/",
    "name": "Home"
  },
  {
    "id": 1,
    "url": "/projects",
    "name": "Case Studies"
  },
  {
    "id": 2,
    "url": "/team",
    "name": "Team"
  },
  {
    "id": 3,
    "url": "/tech-talks",
    "name": "Blog"
  },
  {
    "id": 4,
    "url": "*",
    "name": "NoPage"
  }
]

const Header = () => {
  return (
    <header className="bg-primary fixed z-50 w-full">
      <div className="bg-wavePattern bg-80% bg-right-top bg-no-repeat">
        <div className="bg-primary bg-opacity-80">
          <div className="container w-[95%] md:w-[93%] md:max-w-[80%] lg:max-w-[90rem] mx-auto py-5 px-5">
            <nav className="container md:max-w-[74rem] lg:max-w-[90rem] mx-auto flex justify-between gap-4 md:grid md:grid-cols-1 lg:grid-cols-2 lg:flex lg:gap-10 items-center">
              <img className="" src={assutechLogo} alt="Assutech Logo" />
              <div className="md:w-full">
                <i className="fa-solid fa-bars text-secondary md:hidden"></i>
                <div className="ml-auto lg:w-[90%] xl:w-[70%] justify-between md:gap-4 lg:gap-4 space-x-0 md:flex items-center">
                  {navLinks.map(({ name, id, url }) => {
                    if (url === "*") return null;
                    return (
                      <Link
                        key={id}
                        className="text-secondary text-lg font-semibold hidden md:block hover:text-red-200 duration-200"
                        to={url}
                      >
                        {name}
                      </Link>
                      );
                    })}
                    <Link className="text-primary bg-secondary rounded-full py-3 px-10 text-lg capitalize font-semibold hidden md:block hover:text-red-200 duration-200" to={"/contact"} >
                        CONTACT NOW
                    </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;