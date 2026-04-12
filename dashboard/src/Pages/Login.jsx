import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import api from "../api";
import "../styles/Auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies(["token"]);
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const { email, password } = inputValue;

  useEffect(() => {
    if (cookies.token) navigate("/");
  }, [cookies.token, navigate]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/login", { email, password });
      if (data.success) {
        toast.success(data.message, { position: "bottom-left" });
        setTimeout(() => navigate("/"), 1000);
      } else {
        toast.error(data.message, { position: "bottom-left" });
      }
    } catch {
      toast.error("Something went wrong. Please try again.", {
        position: "bottom-left",
      });
    }
    setInputValue({ email: "", password: "" });
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Don't have an account? <Link to="/signup">Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
