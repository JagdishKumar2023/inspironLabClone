import "./Navbar.css";
import logo from "./../../asset/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="mainContainer">
            <nav className="navContainer">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="CompanyLogo" /></Link>
                </div>
                <ul className="navUnordreList">
                    <li ><Link to="/services">Services</Link></li>
                    <li><Link to="/industries">Industries</Link></li>
                    <li><Link to="/labs">Labs</Link></li>
                    <li><Link to="/successstories">Success Stories</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/insights">Insights</Link></li>
                    <li><Link to="/career">Career</Link></li>
                </ul>
                <button><Link to="/contact" >Contact us</Link></button>
            </nav>
        </div>
    );
};

export default Navbar;