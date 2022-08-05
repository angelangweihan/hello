import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <div className="leftpart">
        <div className="menu">
          <ul className="ullist">
            <li>
              <NavLink exact={true} to="/" onClick={props.clicked}>
                Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink exact={true} to="/resume" onClick={props.clicked}>
                Resume
              </NavLink>{" "}
            </li>
            <li>
              <NavLink exact={true} to="/music-portfolio" onClick={props.clicked}>
                Music Portfolio
              </NavLink>{" "}
            </li>
            <li>
              <NavLink exact={true} to="/blog" onClick={props.clicked}>
                Blog
              </NavLink>{" "}
            </li>
            <li>
              <NavLink exact={true} to="/contact" onClick={props.clicked}>
                Contact
              </NavLink>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
