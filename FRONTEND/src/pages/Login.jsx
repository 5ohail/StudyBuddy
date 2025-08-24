import React from "react";
import Login from "../components/Login.jsx";
import { signInWithGoogle, signInWithFacebook } from "../firebase/firebaseConfig.js";
import { Link, useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      navigate("/dashboard");
    } catch (err) {
      console.error("Google login error:", err);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithFacebook();
      navigate("/dashboard");
    } catch (err) {
      console.error("Facebook login error:", err);
    }
  };

  return (
    <div className="flex items-center min-h-screen justify-between">
      <div className="w-[60vw] h-screen flex items-center justify-center">
        <div>
          <div className="flex items-center">
            <img
            className="w-40 h-28 -translate-x-14"
            src="studyflow AI.png"
            alt="logo"
          />
            <h1 className="font-semibold text-2xl -translate-x-28 text-blue-600">StudyFlow AI</h1>
          </div>
          <h2 className="text-3xl font-bold">Log in to your Account</h2>
          <p className="mt-1 text-gray-600 font-lighter">
            Welcome back! Select method to log in:
          </p>

          {/* OAuth Buttons */}
          <div className="flex items-center ml-1 gap-6">
            <div
              onClick={handleGoogleLogin}
              className="px-13 py-2 mt-8 rounded border-[1px] border-gray-400 flex items-center gap-2 cursor-pointer"
            >
              <img
                className="h-5 w-5"
                src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                alt="google"
              />
              Google
            </div>

            <div
              onClick={handleFacebookLogin}
              className="px-10 py-2 mt-8 rounded border-[1px] border-gray-400 flex items-center gap-2 cursor-pointer"
            >
              <img
                className="h-6 w-6"
                src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
                alt="facebook"
              />
              Facebook
            </div>
          </div>

          <div className="h-[1px] bg-gray-400 mt-8"></div>
          <p className="text-gray-600 text-sm bg-white -translate-y-4 translate-x-[85%] inline-block">
            or continue with email
          </p>

          <div className="w-100">
            <Login />
          </div>
          <div className="flex justify-center mt-4">
            <p>Don't have an account? <Link to='/register' className="text-blue-600 cursor-pointer">Sign up</Link></p>
          </div>
        </div>
      </div>

      <img
        className="w-[40vw] h-screen object-cover border-l-[1px] border-gray-400"
        src="https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?fm=jpg&q=60&w=3000"
        alt="login"
      />
    </div>
  );
};

export default LoginPage;
