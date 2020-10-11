import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ userObj }) => {
  // const getName = async () => {
  //   const userid_tmp = userObj.uid;
  //   const userid = userid_tmp.substring(1, 8);
  //   console.log(userid);
  //   await userObj.updateProfile({
  //     displayName: userid,
  //   });
  //   refreshUser();
  // };
  // useEffect(() => {
  //   if (userObj.displayName == null) {
  //     getName();
  //   }
  // }, []);
  return (
    
    <nav>
      <ul><div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li></div>
      </ul>
    </nav>
    
  );
};
export default Navigation;
