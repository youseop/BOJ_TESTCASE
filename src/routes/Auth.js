import React from "react";
// import AuthForm from "../components/AuthForm";
import {  authService, firebaseInstance } from "../fbase";

const Auth = () => {
  const onSocialClick = async (event) => {
    //console.log(event.target.name);
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    console.log(provider)
    const data = await authService.signInWithPopup(provider);
    console.log(data);
    
  };

  return (
    <div>
      {/* <AuthForm /> */}
      <div>
        <div>
        <button onClick={onSocialClick} name="google" className="google btn">
          Google
        </button>
        <button onClick={onSocialClick} name="github" className="github btn">
          Github
        </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
