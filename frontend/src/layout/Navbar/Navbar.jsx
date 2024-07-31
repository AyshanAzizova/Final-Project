import React, { useState } from "react";
import "./Navbar.css";
// logo-image
import logo from "../../assets/images/logo.webp";
// icons
import { RiLogoutBoxRLine } from "react-icons/ri";
// import { FiSearch } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

// Sidebar komponentini import et
import Sidebar from '../../components/Sidebar/Sidebar';
import { logout } from "../../slices/user.slice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        dispatch(logout());
        navigate("/signin"); // Redirect to sign-in page after logout
      } else {
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="left">
            <div className="burger-menu" onClick={toggleMenu}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={`menu ${isOpen ? "open" : ""}`}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/products'>Products</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="center">
            <img src={logo} alt="logo" />
          </div>
          <div className="right">
          <Link>            <RiLogoutBoxRLine onClick={handleLogout} className="nav-icon" /></Link>
            <Link to='signIn'><BiUser className="nav-icon"/></Link>
            <Link to='wishlist'><FaRegHeart className="nav-icon" /></Link>
            <Link><AiOutlineShopping
            className="nav-icon"
            style={{ fontSize: "29px" }}
            onClick={toggleSidebar} // Sidebarı açmaq üçün klik eventi
          /></Link>
          </div>
        </nav>
        {/* Sidebar komponentini render et */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </header>
  );
};

export default Navbar;
