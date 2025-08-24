import React from "react";
import Register from "../components/Register.jsx";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="flex items-center min-h-screen justify-between">
      <div className="w-[60vw] h-screen flex items-center justify-center">
        <div>
          {/* Logo */}
          <div className="flex items-center">
            <img
              className="w-40 h-28 -translate-x-14"
              src="studyflow AI.png"
              alt="logo"
            />
            <h1 className="font-semibold text-2xl -translate-x-28 text-blue-600">
              StudyFlow AI
            </h1>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold">Create your Account</h2>
          <p className="mt-1 text-gray-600 font-light">
            Welcome! Register using your email:
          </p>

          {/* Registration Form */}
          <div className="w-100 mt-6">
            <Register />
          </div>

          {/* Redirect to Login */}
          <div className="flex justify-center mt-4">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 cursor-pointer">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right-side Image */}
      <img
        className="w-[40vw] h-screen object-cover border-l-[1px] border-gray-400"
        src="https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?fm=jpg&q=60&w=3000"
        alt="Register"
      />
    </div>
  );
};

export default RegisterPage;
