import { Outlet, Link } from "react-router-dom";
import "./navbar.css"
const Navbar = () => {
    return (
        <div className="container">
            <div className="topnav">
                <nav>
                    <Link className="link" to="/">
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