import {  faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Auth from "../routes/Auth";

const Navigation = ({ isLoggedIn }) => {
  return (
    
    <nav>
      <ul><div className="navigation">
        <li>
        {isLoggedIn ? (
          <Link to="/Profile" className="link add"> <FontAwesomeIcon icon={faPlus} /> Add TestCase</Link>
          ):(<div className="navLogin">
            <Auth />
            </div>
          )}
        </li>
        <li>
          <Link to="/" className="link">Home</Link>
        </li></div>
      </ul>
    </nav>
    
  );
};
export default Navigation;
