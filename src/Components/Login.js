import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
  });

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let validationErrors = {};

    if (formData.username === "" || formData.username === null) {
      isValid = false;
      validationErrors.username = "Username required."
    }

    axios
      .get("https://www.balldontlie.io/api/v1/players")
      .then((response) => {
        console.log(response);
        response.data.data.map((user) => {
          if (user.first_name === formData.username) {
            alert("Login successfully");
            navigate("/");
          } else if (formData.username !== "") {
            isValid = false;
            validationErrors.username = "Wrong username";
          }
        });
          
        localStorage.setItem("token-info", JSON.stringify(formData));
        setIsLoggedin(true);
        setErrors(validationErrors);
        setValid(isValid);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="signup-form">
            <form
              className="mt-5 border p-4 bg-light shadow"
              onSubmit={handleSubmit}
            >
              <h4 className="mb-5 text-center">Login Your Account</h4>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="mb-3">
                    Userame<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Enter username"
                    onChange={(event) =>
                      setFormData({ username: event.target.value })
                    }
                  />
                </div>
                <div className="col-md-12">
                  <button className="btn btn-primary float-end">Login</button>
                </div>
                {valid ? (
                  <></>
                ) : (
                  <span className="text-danger">{errors.username};</span>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Login;
