import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home"
const Layout = () => {
  return (
    <div className="app">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
};

export default Layout;