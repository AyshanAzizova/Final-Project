import React, { useState } from "react";
import "./Navbar.css";
// logo-image
import logo from "../../assets/images/logo.webp";
// icons
import { FiSearch } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// Sidebar komponentini import et
import Sidebar from '../../components/Sidebar/Sidebar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
            <ul className={`menu ${isOpen ? "open" : " "}`}>
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
              <li className="user-icon">
                <BiUser className="nav-icon" />
              </li>
            </ul>
          </div>
          <div className="center">
            <img src={logo} alt="logo" />
          </div>
          <div className="right">
            <FiSearch className="nav-icon" />
            <BiUser className="nav-icon" />
            <Link to='wishlist'><FaRegHeart className="nav-icon" /></Link>
            <AiOutlineShopping
              className="nav-icon"
              style={{ fontSize: "29px" }}
              onClick={toggleSidebar} // Sidebarı açmaq üçün klik eventini əlavə et
            />
          </div>
        </nav>
        {/* Sidebar komponentini render et */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </header>
  );
};

export default Navbar;
