import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verifyemail: false,
      verifypassword: false,
    };
  }
  validate() {
    var semail = sessionStorage.getItem("email");
    var spassword = sessionStorage.getItem("Password");

    var lemail = document.getElementById("emaillogin").value;
    var lpassword = document.getElementById("passwordlogin").value;

    if (semail === lemail && spassword === lpassword) {
      this.setState({
        verifyemail: true,
        verifypassword: true,
      });
    } else {
      alert("Wrong Emailid and Password....Try to type correct login id");
    }
  }
  render() {
    if (this.state.verifyemail === true && this.state.verifypassword === true) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="body">
        <div className="login">
          <form>
            <h3>Login in</h3>
            <div>
              <label>Email id </label>
              <br />
              <input
                type="email"
                id="emaillogin"
                Placeholder="Enter Email Id"
              />
            </div>
            <div>
              <label>Password </label>
              <br />
              <input
                type="password"
                id="passwordlogin"
                placeholder="Enter the Password"
              />
            </div>
            <div id="loginsubmit">
              {/* <Link to="/dashboard"> */}
              <input type="submit" onClick={this.validate.bind(this)} />
              {/* </Link> */}
            </div>
          </form>
          <div id="reglogin">
            <Link to="/register">
              <p>Create new Login</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
