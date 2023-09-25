import SlideShow from "../components/SlideShow/slide";
import { Outlet } from "react-router-dom";

const Home = () =>{
    return <>
    <SlideShow/>
    Home
    <Outlet />

    </>
}
export default Home;