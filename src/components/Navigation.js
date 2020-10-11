import React from "react";
import { Link } from "react-router-dom";
import Auth from "../routes/Auth";

const Navigation = ({ userObj,isLoggedIn }) => {
  return (
    
    <nav>
      <ul><div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        {isLoggedIn ? (
          <Link to="/Profile">Profile</Link>
          ):(
            <Auth />
          )}
        </li></div>
      </ul>
    </nav>
    
  );
};
export default Navigation;
