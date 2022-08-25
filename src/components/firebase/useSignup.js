import { useState } from "react";
import { auth } from "../firebase/config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "../firebase/useAuthContext.js";

export const useSignup = () => {
  //Sign up Page Logic Firebase
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const [success, setSuccess] = useState(null);
  const { user } = useAuthContext();

  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.user });
        setSuccess("Sign Up Successful");
        
      })
      .catch((err) => {
        setError("Email or Password is Incorrect, Try Again!");
      });
    
    
  };

  
  return { error, signup, success };
};