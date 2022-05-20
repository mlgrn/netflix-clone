import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  // setup some state useEffect contains and event listener which adds a class to the nav which changes the color
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", {});
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="nav__logo"
      />
      <img
        src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
        alt="Netflix Logo"
        className="nav__avatar"
      />
    </div>
  );
}

export default Nav;
