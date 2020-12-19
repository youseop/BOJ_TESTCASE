import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import { authService } from "../fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj({
          displayName: user.displayName,
          photoURL: user.photoURL,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = async () => {
    const user = await authService.currentUser;
    if(user){
      setUserObj({
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid,
        updateProfile: (args) => user.updateProfile(args),
      });
    } else{
      setIsLoggedIn(false)
    }
    
  };

  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={isLoggedIn}
          userObj={userObj}
        />
      ) : (<div className="Initializing">"Wait for a while..."</div>
        
      )}
      <footer>
        Problem from BOJ
        <br/>
        {" "}
        &copy; {new Date().getFullYear()} Youseop
      </footer>
    </>
  );
}

export default App;
