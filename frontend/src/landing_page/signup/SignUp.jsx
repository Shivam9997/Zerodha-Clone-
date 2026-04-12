import React, { useState } from "react";
import axios from "axios";

const API_BASE ="https://zerodha-clone-hbth.onrender.com";
const DASHBOARD_URL ="https://zerodha-clone-dashboard-cg4b.onrender.com";

function SignUp() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await axios.post(`${API_BASE}/signup`, form, {
        withCredentials: true,
      });
      if (data.success) {
        setSuccess(true);
        setTimeout(() => {
          window.location.href = DASHBOARD_URL;
        }, 1500);
      } else {
        setError(data.message || "Signup failed. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <div className="signup-header">
          <img src="media/images/logo.svg" alt="Logo" className="signup-logo" />
          <h2>Create your account</h2>
          <p>Start trading in minutes — it's completely free.</p>
        </div>

        {success ? (
          <div className="alert alert-success text-center" role="alert">
            🎉 Account created! Redirecting to your dashboard…
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <div className="mb-3">
              <label htmlFor="username" className="form-label fw-semibold">Full Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="username"
                name="username"
                placeholder="Enter your full name"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Email address</label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="password"
                name="password"
                placeholder="Create a password (min. 6 characters)"
                value={form.password}
                onChange={handleChange}
                required
                minLength={6}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-lg w-100" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" />
                  Creating account…
                </>
              ) : (
                "Create Account"
              )}
            </button>

            <p className="text-center text-muted mt-3 mb-0" style={{ fontSize: "0.9rem" }}>
              Already have an account?{" "}
              <a href={`${DASHBOARD_URL}/login`} className="text-primary fw-semibold">
                Login here
              </a>
            </p>
          </form>
        )}

        <p className="signup-disclaimer">
          By creating an account, you agree to our{" "}
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}

export default SignUp;
