import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import React, {useEffect, useState } from 'react';

const Layout = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  //const [navbarColor, setNavbarColor] = useState("red");



  const toggleMenu = () => setMenuOpen(!menuOpen); 

  /*useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarColor("black"); // change: sets navbar color to black when scrolling
      } else {
        setNavbarColor("#33ccff"); // change: sets navbar color back to red at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);*/


  return (
    <div>
     <nav className={`navbar ${menuOpen ? 'active' : ''}`}/*style={{ backgroundColor: navbarColor }}*/>
     <div className="site-name">SPEN Lab</div>
     <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? '✖' : '☰'} {/* change: toggle between "☰" and "✖" based on menuOpen */}
      </div>
      <ul className="nav-list">
        <li className="links" key="home-button">
          <Link to="/">Home</Link>
        </li>
        <li className="links" key="about-button">
          <Link to="/about">About</Link>
        </li>
        <li className="links" key="people-button">
          <Link to="/people">People</Link>
        </li>
        <li className="links" key="publications-button">
          <Link to="/publications">Publications</Link>
        </li>
        <li className="links" key="join-button">
          <Link to="/join">Join Us</Link>
        </li>
      </ul>
    </nav>
      <Outlet />
    </div>
  );
};

export default Layout;