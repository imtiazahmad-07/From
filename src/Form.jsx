import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  const [formType, setFormType] = useState("login");
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [feedbackData, setFeedbackData] = useState({ feedback: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const validateLogin = () => {
    const newErrors = {};
    if (!loginData.username) newErrors.username = "Username is required";
    if (!loginData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const validateSignup = () => {
    const newErrors = {};
    if (!signUpData.username) newErrors.username = "Username is required";
    if (!signUpData.email) newErrors.email = "Email is required";
    if (!signUpData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const validateFeedback = () => {
    const newErrors = {};
    if (!feedbackData.feedback) newErrors.feedback = "Feedback is required";
    return newErrors;
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFeedbackChange = (e) => {
    const { value } = e.target;
    setFeedbackData({ feedback: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateLogin();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setMessage("Login successful!");
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateSignup();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setMessage("Sign up successful!");
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFeedback();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setMessage("Thank you for your feedback!");
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="container py-5 shadow-lg rounded-2">
      <h1 className="text-center mb-4">
        {formType === "login"
          ? "Login"
          : formType === "signup"
          ? "Sign Up"
          : "Feedback"}
      </h1>

      {formType === "login" && (
        <form
          onSubmit={handleLoginSubmit}
          className="bg-light p-4 rounded shadow"
        >
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={loginData.username}
              onChange={handleLoginChange}
            />
            {errors.username && (
              <p className="text-danger">{errors.username}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
            />
            {errors.password && (
              <p className="text-danger">{errors.password}</p>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <p className="mt-2">
            Need an account?
            <span
              onClick={() => setFormType("signup")}
              className="text-primary"
              style={{ cursor: "pointer" }}
            >
              Sign Up
            </span>
          </p>
          <p>
            Give feedback?{" "}
            <span
              onClick={() => setFormType("feedback")}
              className="text-primary"
              style={{ cursor: "pointer" }}
            >
              Feedback
            </span>
          </p>
        </form>
      )}

      {formType === "signup" && (
        <form
          onSubmit={handleSignUpSubmit}
          className="bg-light p-4 rounded shadow"
        >
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={signUpData.username}
              onChange={handleSignUpChange}
            />
            {errors.username && (
              <p className="text-danger">{errors.username}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={signUpData.email}
              onChange={handleSignUpChange}
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={signUpData.password}
              onChange={handleSignUpChange}
            />
            {errors.password && (
              <p className="text-danger">{errors.password}</p>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
          <p className="mt-2">
            Already have an account?{" "}
            <span
              onClick={() => setFormType("login")}
              className="text-primary"
              style={{ cursor: "pointer" }}
            >
              Login
            </span>
          </p>
          <p>
            Give feedback?{" "}
            <span
              onClick={() => setFormType("feedback")}
              className="text-primary"
              style={{ cursor: "pointer" }}
            >
              Feedback
            </span>
          </p>
        </form>
      )}

      {formType === "feedback" && (
        <form
          onSubmit={handleFeedbackSubmit}
          className="bg-light p-4 rounded shadow"
        >
          <div className="mb-3">
            <label className="form-label">Feedback:</label>
            <textarea
              className="form-control"
              name="feedback"
              value={feedbackData.feedback}
              onChange={handleFeedbackChange}
            ></textarea>
            {errors.feedback && (
              <p className="text-danger">{errors.feedback}</p>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Feedback
          </button>
          <p className="mt-2">
            Need to login?{" "}
            <span
              onClick={() => setFormType("login")}
              className="text-primary"
              style={{ cursor: "pointer" }}
            >
              Login
            </span>
          </p>
          <p>
            Need to sign up?{" "}
            <span
              onClick={() => setFormType("signup")}
              className="text-primary"
              style={{ cursor: "pointer" }}
            >
              Sign Up
            </span>
          </p>
        </form>
      )}

      {message && <p className="text-success text-center mt-3"> {message}</p>}
    </div>
  );
};

export default Form;
