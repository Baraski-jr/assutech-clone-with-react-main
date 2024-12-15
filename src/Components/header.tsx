import assutechLogo from "../assets/icons/Logos/Assutech.png";
import { Link, NavLink } from "react-router-dom";
import NoPage from "../pages/NoPage";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  const animation = isOpen ? 'translate-x-0' : 'translate-x-[100rem]'
  const icon = isOpen ? 'fa-xmark': 'fa-bars'

  return (
    <header className="bg-primary fixed z-50 w-full">
      <div className="bg-wavePattern bg-80% bg-right-top bg-no-repeat">
        <div className="bg-primary bg-opacity-80">
          <div className="container w-[95%] md:w-[93%] md:max-w-[80%] lg:max-w-[90rem] mx-auto py-5 px-5">
            <nav className="container md:max-w-[74rem] lg:max-w-[90rem] mx-auto flex justify-between gap-4 md:grid md:grid-cols-1 lg:grid-cols-2 lg:flex lg:gap-10 items-center">
              <Link to='/' >
                <img className="" src={assutechLogo} alt="Assutech Logo" />
              </Link>
              <div className="md:w-full">
                {/* Menue btn */}
                <i
                  className={`fa-solid ${icon} text-secondary md:hidden`}
                  onClick={() => setIsOpen((prev) => !prev)}
                  ></i>

                <div className="ml-auto hidden lg:w-[90%] xl:w-[70%] justify-between md:gap-4 lg:gap-4 space-x-0 md:flex items-center">
                  {navLinks.map(({ name, id, url }) => {
                    if (url === "*") return <NoPage />;
                    return (
                      <NavLink
                        key={id}
                        className={({ isActive }) => (isActive ? 'text-secondary underline underline-offset-4 text-lg font-extrabold hover:text-red-200 duration-200' : 'text-secondary text-lg hover:text-red-200 duration-200')}
                        to={url}
                        >
                        {name}
                      </NavLink>
                      );
                    })}
                    <NavLink className="text-primary bg-secondary rounded-full py-3 px-10 text-lg capitalize font-semibold hidden md:block hover:text-red-200 duration-200"
                       to={"/"} >
                        CONTACT NOW
                    </NavLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="">
        <div className={`z-20 px-5 md:hidden flex flex-col gap-y-5 pt-[60%] min-h-[100dvh] w-full bg-black absolute top-[4rem] left-0 transition-transform ease-in-out duration-500 ${animation}`}>
          {navLinks.map(({ name, id, url }) => {
            if (url === "*")  return null;
            return (
              <NavLink
                onClick={() => setIsOpen(false)}
                key={id}
                className={({ isActive }) => (isActive ? 'text-secondary underline underline-offset-4 text-lg font-extrabold hover:text-red-200 duration-200' : 'text-secondary text-lg hover:text-red-200 duration-200')}
                to={url}
                >
                {name}
              </NavLink>
              );
            })}
            
            <NavLink 
              onClick={() => setIsOpen(false)}
              to={"/"}
              className="text-primary bg-secondary rounded-full py-3 mt-5 px-10 text-sm w-fit font-semibold md:hidden hover:text-red-200 duration-200" >
              CONTACT NOW
            </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;