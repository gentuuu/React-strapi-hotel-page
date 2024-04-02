import { useState } from 'react'
import "./Heading.scss";

import { FaRegClock, FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Navbar() {
// adding the states
const [isActive, setIsActive] = useState(false);
//add the active class
const toggleActiveClass = () => {
setIsActive(!isActive);
};
//clean up function to remove the active class
const removeActive = () => {
setIsActive(false)
}
return (
<header>
  <div className="header-top">
    <div className="container">
      <div className="header-top-content">
        <div className="header-top-logo">
          <div className="logo">Dev. </div>
        </div>
        <div className="header-top-info">
          <ul>
            <li><span><FaPhone /></span>Phone 123456789</li>
            <li><span><FaRegClock /></span>Godziny otwarcia 8-16</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="header-nav">
    <div className="container">
      <div className="header-nav-content">
        <nav className="navbar">
          <ul className={`navMenu ${isActive ? 'active' : '' }`}>
            <li onClick={removeActive}>
              <Link to='/' className="navLink">Home</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/onas' className="navLink">O nas</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/pokoje' className="navLink">Pokoje</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/blogs' className="navLink">Blog</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/kontakt' className="navLink">Kontakt</Link>
            </li>
          </ul>
          <div className={`hamburger ${isActive ? 'active' : '' }`} onClick={toggleActiveClass}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
    </div>
  </div>

</header>

);
}
export default Navbar;