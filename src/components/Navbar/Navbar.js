import { Link } from "react-router-dom";
import "./navbar.css"
// import { useLocation } from "react-router-dom";

const Navbar = () => {
    // const location = useLocation();

    return (
        // <div className={location.pathname==="/home"?"container":"container1"}> for removing navbar from slide show
        <div className="container1">
            <div className="topnav">
                <nav>
                    <Link className="link" to="/home">
                        Home
                    </Link>
                    <Link className="link" to="/pages">
                        Pages
                    </Link>
                    <Link className="link" to="/services">
                        Our Services
                    </Link>
                    <Link className="link" to="/cases">
                        Cases
                    </Link>
                    <Link className="link" to="/blogs">
                        Blogs
                    </Link>
                    <Link className="link" to="/contact">
                        Contact Us
                    </Link>
                </nav>
            </div>
        </div>
    );
}
export default Navbar;