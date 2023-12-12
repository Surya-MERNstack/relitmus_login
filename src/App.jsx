import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Data, SetData] = useState();
  const [DataLen, SetDataLen] = useState();

  useEffect(() => {
    const userInput = axios.get("https://petals.ath.cx/test/login.jsp");
    userInput.then((res) => SetData(res.data));
  });

  useEffect(() => {
    const userInput = axios.get(
      "https://petals.ath.cx/test/login.jsp?username=test&password=test"
    );
    userInput.then((res) => SetDataLen(res.data));
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      return toast.error(` ${Data.error.username}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (username.length < 5) {
      return toast.error(`${DataLen.error.username}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }else if (!password) {
      return toast.info(`${Data.error.password}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (password.length < 5) {
      return toast.error(`${DataLen.error.password}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else
      toast.success(`Login Successfully`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleInputFocus = (event) => {
    const label = event.target.previousElementSibling;
    label.classList.add("active");
  };

  const handleInputBlur = (event) => {
    const input = event.target;
    const label = input.previousElementSibling;

    if (!input.value) {
      label.classList.remove("active");
    }
  };

  return (
    <>
      <div className="container">
        <div className="col-lg-6 login-image animated">
          <div className="text-center mb-4">
            <img
              src="https://echt.im/assets/img/logo_echt.png"
              alt="Echt Logo"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 login-form animated">
            <div className="card-container">
              <div className="card-front">
                <form className="login-form" onSubmit={handleSubmit}>
                  <h2 className="text-center mb-4 ">
                    <span className="text-3d">Welcome to ECHT</span>
                  </h2>
                  {/* Username field */}
                  <div className="mb-5  position-relative">
                    <label
                      htmlFor="username"
                      className={`form-label ${username ? "active" : ""}`}
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={handleUsernameChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </div>
                  {/* Password field */}
                  <div className="mb-5 position-relative">
                    <label
                      htmlFor="password"
                      className={`form-label ${password ? "active" : ""}`}
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block login-btn"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
