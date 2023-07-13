import React from "react";
import { Link, useLocation } from "react-router-dom";
const NavbarMenu = () => {
  const location = useLocation();
  return (
    <header>
      <nav>
        <div style={{ display: "flex", marginLeft: "20px" }}>
          <div style={{ paddingRight: "20px" }}>
            <Link to="/posts" state={{ from: location.pathname }}>
              PostsPage
            </Link>
          </div>
          <div style={{ paddingRight: "20px" }}>
            <Link to="/main">MainPage</Link>
          </div>
          <div style={{ paddingRight: "20px" }}>
            <Link to="/about">AboutPage</Link>
          </div>
        </div>
        <div style={{ width: "100%", height: "2px", background: "grey" }}></div>
      </nav>
    </header>
  );
};

export default NavbarMenu;
