import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import GoogleSignInButton from '../components/GoogleSignInButton';
import '../assets/styles/AuthPage.css';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  // Handle email/password sign-in or registration
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);  // Register a new user
      } else {
        await signInWithEmailAndPassword(auth, email, password);  // Login an existing user
      }
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } catch (error) {
      console.error("Error during authentication:", error);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-page-container">
        <div className="auth-left">
          <img
            alt="Illustration of a girl sitting on a chair with a tablet, surrounded by plants and a lamp"
            src="https://storage.googleapis.com/a1aa/image/CCUa94ZHmTa6JtcccEH0gHkP1rfLotHWGCTOMW6ZzVhFhjxJA.jpg"
          />
        </div>
        <div className="auth-right">
          <div className="auth-register">
            {isRegistering ? "Already have an account?" : "Not a member?"}
            <span onClick={() => setIsRegistering(!isRegistering)} style={{ cursor: 'pointer' }}>
              {isRegistering ? "Login" : "Register now"}
            </span>
          </div>
          <h2>{isRegistering ? "Register" : "Hello Again!"}</h2>
          <p>{isRegistering ? "Create an account to get started" : "Welcome back you've been missed!"}</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="auth-password-container">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="fas fa-eye"></i>
            </div>
            <a className="auth-recovery" href="#">
              Recovery Password
            </a>
            <button className="auth-sign-in" type="submit">
              {isRegistering ? "Register" : "Sign In"}
            </button>
          </form>
          <div className="auth-or">Or continue with</div>
          <div className="auth-social-icons">
            <GoogleSignInButton />
            <img alt="Apple logo" src="https://storage.googleapis.com/a1aa/image/HAaEvBw7niqdFRgtoXmOVKa8HLsQd8mflQjzbLZPnSyGhjxJA.jpg" />
            <img alt="Facebook logo" src="https://storage.googleapis.com/a1aa/image/ftIeJBoU59hJOUT4Hf4fCmPhYAevrlhT8fIsGloAdewWFhjxJA.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
