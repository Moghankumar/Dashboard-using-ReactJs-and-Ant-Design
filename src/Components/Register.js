import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./Register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      confirmpassword: "",
      password: false,
    };
    this.submit = this.submit.bind(this);
  }
  submit() {
    this.password();
    var firstname = document.getElementById("firstname").value;
    var email = document.getElementById("email").value;
    sessionStorage.setItem("name", firstname);
    sessionStorage.setItem("email", email);

    this.setState({
      password: true,
    });
  }

  password() {
    var newpass = document.getElementById("newpass").value;
    var confirmpass = document.getElementById("confirmpass").value;
    if (newpass === confirmpass) {
      sessionStorage.setItem("Password", confirmpass);
      this.setState({
        password: true,
      });
    } else {
      alert("New password and Confirm password not matched");
      this.setState({
        password: false,
      });
    }
  }
  render() {
    if (this.state.password) {
      return (
        <Redirect
          to="/dashboard"
          name={this.state.name}
          email={this.state.email}
        />
      );
    }
    return (
      <div className="head">
        <div className="Register">
          <form>
            <h3>Register</h3>
            <div>
              <label>First Name </label>
              <br />
              <input
                type="text"
                id="firstname"
                placeholder="Ener First Name"
                required
              />
            </div>
            <div>
              <label>Second Name</label>
              <br />
              <input type="text" placeholder="Enter Second Name" />
            </div>
            <div>
              <label>Email </label>
              <br />
              <input
                type="email"
                id="email"
                placeholder="Enter Email Id"
                required
              />
            </div>
            <div>
              <label>New Password</label>
              <br />
              <input
                type="password"
                id="newpass"
                placeholder="Enter New Password"
              />
            </div>
            <div>
              <label>Confirm password</label>
              <br />
              <input
                type="password"
                id="confirmpass"
                placeholder="Enter Confirm Password"
              />
            </div>
            <div className="registersubmit">
              {/* <Link to="/dashboard"> */}
              <input type="submit" onClick={this.submit} />
              {/* </Link> */}
            </div>
          </form>
          <div className="loginform">
            <Link to="/">
              <p>Login in</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
