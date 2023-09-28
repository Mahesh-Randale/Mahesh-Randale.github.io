import "./home.css";
import HomeCard from "../../components/HomeCard/HomeCard";
import ServiceCards from "../../components/ServicesCards/ServiceCards";
import About from "../../components/About/About";
const Home = () => {
  return (
    <>
      <HomeCard />
      <ServiceCards/>
      <About/>
    </>
  );
};
export default Home;
