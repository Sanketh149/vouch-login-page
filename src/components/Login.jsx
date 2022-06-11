import { useState } from "react";
import "../style.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function validate(event) {
    event.preventDefault();

    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);
    if (data.error) alert(data.error);
    else alert("Successfully LoggedIn with token " + data.token);
  }

  return (
    <div className="full">
      <nav class="navbar bg-white">
        {/* <img src="logo.jpg" alt="Atools" className="logo-img" /> */}
        <div className="left-nav">
          <span id="atools">ATools</span>
          <span id="dot">.</span>
        </div>
        <div className="right-nav">
          <button className="btn btn-primary me-2" type="button">
            Start Free Trial
          </button>
          <button className="btn btn-orange" type="button">
            Login
          </button>
        </div>
      </nav>
      <div className="">
        <div className="justify-content-center">
          <div className="col-md-6 text-center mb-5"></div>
        </div>
        <div className="row justify-content-center">
          {/* <div className="col-md-12 col-lg-10 align"> */}
          {/* <div className="wrap d-md-flex"> */}
          <div className="login-wrap p-10 p-md-5">
            <div className="d-flex">
              <div className="w-100">
                <h2 className="heading-section">Welcome Back</h2>
                <p className="sub-title">sanketh kumar</p>
              </div>
            </div>
            <form className="signin-form">
              <div className="form-group mb-3">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="form-control inp-width"
                  placeholder="Email Address *"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control inp"
                  placeholder="Password *"
                  required
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  onClick={validate}
                  className="form-control btn btn-primary rounded submit px-3"
                >
                  Login
                </button>
              </div>
              <div className="form-group d-md-flex">
                <div className="w-50 text-left">
                  <label className="checkbox-wrap checkbox-primary mb-0">
                    Remember Password
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="w-50 text-md-right">
                  <label className="checkbox-wrap checkbox-primary mb-0">
                    Forgot Password?
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div
            className="img"
            style={{ backgroundImage: "url('abc.jpg')" }}
          ></div>
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
}

export default Login;
