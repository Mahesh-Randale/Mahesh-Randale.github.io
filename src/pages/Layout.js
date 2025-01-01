import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import SlideShow from "../components/SlideShow/slide";

const Layout = () => {
  return (
    <div className="app">
      <Header/>
      <SlideShow/>
      <br/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;