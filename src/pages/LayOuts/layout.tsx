import Footer from "../../Components/footer";
import Header from "../../Components/header";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="font-Poppins overflow-x-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
