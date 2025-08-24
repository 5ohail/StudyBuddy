import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await axios.post("http://localhost:10000/api/users/login", { 
        email, 
        password 
      });
      
      toast.success(response.data.message || "Login successful!");
      
      if (response.data.success) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    } catch (err) {
      // Better error handling - check for backend error message first
      const errorMessage = err.response?.data?.message || err.message || "Login failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        type="email"
        className="border-[1px] rounded-sm border-gray-400 outline-none block p-2 mb-2"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
      <input
        className="border-[1px] rounded-sm border-gray-400 outline-none block p-2 mb-2" 
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <input className="h-4 w-4" type="checkbox" id="rememberMe" disabled={isLoading} />
          <label className="text-sm text-gray-600" htmlFor="rememberMe">Remember Me</label>
        </div>
        <h3 className="text-blue-500">Forgot Password?</h3>
      </div>
      <button
        className={`rounded-sm text-white font-semibold outline-none block p-2 cursor-pointer transition-colors ${
          isLoading 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default Login;
