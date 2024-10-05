import React from "react";
import { doSignInWithGoogle } from "../firebase"; // Adjust the path if necessary
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
import '../assets/styles/googlesignin.css'

const GoogleSignInButton = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleGoogleSignIn = async () => {
    try {
      const result = await doSignInWithGoogle();  // Successful Google sign-in
      console.log("Google Sign-In Successful:", result);
      navigate('/dashboard');  // Redirect to dashboard after successful sign-in
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  return (
    <button onClick={handleGoogleSignIn} className="google-signin-btn">
      Continue with Google
    </button>
  );
};

export default GoogleSignInButton;
