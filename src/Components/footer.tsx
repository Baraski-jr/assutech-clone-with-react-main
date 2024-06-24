import Assutech from "../assets/icons/Logos/Assutech.png"
import Facebook from "../assets/icons/small-icons/facebook.svg"
import X from "../assets/icons/small-icons/twitter.svg"
import Linkend from "../assets/icons/small-icons/linkend.svg"
const Footer = () => {
    return ( 
        <footer className="bg-footer-pattern bg-cover bg-no-repeat text-secondary ">
            <div className="">
                <div className="container w-[90%] md:w-[85S%] md:max-w-[74rem] lg:max-w-[90rem] mx-auto">
                    <div className="border-b-[1px] py-16 grid lg:grid-cols-3 lg:gap-x-10 lg:space-x-10">
                        <div className="py-2 md:w-[80%] lg:w-full">
                            <figure className="space-y-5">
                                <img className="w-[10rem] object-cover" src={Assutech} alt="Logo" />
                                <figcaption className="">
                                    <p className="">Assutech is Teamwork. Goals. Results.</p>
                                </figcaption>
                            </figure>
                            <div className="py-5">
                                <p className="leading-7">
                                    Nonetheless, we do have our fair share of fun. The space is always open for company and hot drinks, plus, if you're feeling lucky,challenge the team to a PS5 game of FIFA. May the odds ever be in your favor 😉
                                </p>
                            </div>
                        </div>
                        <div className="space-y-6 py-5 w-[80%] md:w-[50%] lg:w-[90%]">
                            <h3 className="font-bold text-2xl uppercase"> Explore </h3>
                            <div className="flex justify-between">
                                <ul className="space-y-2">
                                    <li className="block text-base font-semibold list-disc list-inside hover:text-pink-200 transition-all duration-200"><a href="">Home</a></li>
                                    <li className="block text-base font-semibold list-disc list-inside hover:text-pink-200 transition-all duration-200"><a href="">Blog</a></li>
                                    <li className="block text-base font-semibold list-disc list-inside hover:text-pink-200 transition-all duration-200"><a href="">Team</a></li>
                                    <li className="block text-base font-semibold list-disc list-inside hover:text-pink-200 transition-all duration-200"><a href="">Go Digital</a></li>
                                </ul>
                                <ul className="space-y-2">
                                    <li className="block text-base font-semibold list-disc list-inside hover:text-pink-200 transition-all duration-200"><a href="">Join Assutech</a></li>
                                    <li className="block text-base font-semibold list-disc list-inside hover:text-pink-200 transition-all duration-200"><a href="">Internship</a></li>
                                    <li className="block text-base font-semibold list-disc list-inside hover:text-pink-200 transition-all duration-200"><a href="">Contact Us</a></li>
                                    <li className="block text-base font-semibold list-disc list-inside hover:text-pink-200 transition-all duration-200"><a href="">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-6 py-5">
                            <h3 className="font-bold text-2xl uppercase"> Reach us </h3>
                            <div className="space-y-1">
                                <a href="/" className="underline italic underline-offset-2 block hover:text-pink-200 transition-all duration-200">7 - 8 Madiba Mall</a>
                                <a href="/" className="underline italic underline-offset-2 block hover:text-pink-200 transition-all duration-200">Brufut Gardens Estate</a>
                                <a href="/" className="underline italic underline-offset-2 block hover:text-pink-200 transition-all duration-200">The Gambia, West Africa</a>
                            </div>
                            <div className="flex space-x-2">
                                <a href="/" className="underline italic underline-offset-2 block hover:text-pink-200 transition-all duration-200">+220 3814760</a>
                                <span>|</span>
                                <a href="/" className="underline italic underline-offset-2 block hover:text-pink-200 transition-all duration-200">info@assutech.gm</a>
                            </div>
                            <div className="flex space-x-2">
                                <a href="facebook.com" className="hover:scale-110 transition-all duration-300">
                                    <img src={Facebook} alt="FaceBook Icon" />
                                </a>
                                <a href="facebook.com" className="hover:scale-110 transition-all duration-300">
                                    <img src={X} alt="X Icon" />
                                </a>
                                <a href="facebook.com" className="hover:scale-110 transition-all duration-300">
                                    <img src={Linkend} alt="Linkend Icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="py-10 flex justify-between">
                        <div className="text-sm">
                            <p>© 2023 Assutech </p> 
                        </div>
                        <div className="">
                            <p>All Right Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
     );
}
export default Footer;