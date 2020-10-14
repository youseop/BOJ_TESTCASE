import React from "react";
import { Link } from "react-router-dom";
import Auth from "../routes/Auth";

const Navigation = ({ isLoggedIn }) => {
  return (
    
    <nav>
      <ul><div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        {isLoggedIn ? (
          <Link to="/Profile">Add TestCase</Link>
          ):(<>
            <h6>Add Test Case after sign in</h6><Auth />
            </>
          )}
        </li></div>
      </ul>
    </nav>
    
  );
};
export default Navigation;
