import React from "react";
import { Link } from "react-router-dom";
import Auth from "../routes/Auth";

const Navigation = ({ isLoggedIn }) => {
  return (
    
    <nav>
      <ul><div className="navigation">
        <li>
          <Link to="/" className="link">Home</Link>
        </li>
        <li>
        {isLoggedIn ? (
          <Link to="/Profile" className="link">Add TestCase</Link>
          ):(<div className="navLogin">
            <Auth />
            </div>
          )}
        </li></div>
      </ul>
    </nav>
    
  );
};
export default Navigation;
