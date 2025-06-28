import { useContext } from "react";
import image from "../images/loginImage.svg";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [name, setname] = useState();
  const [pass, setpass] = useState();
  const { SetIsLogin, setUserName } = useContext(AuthContext);
  const navigate = useNavigate();

  const LoginHandler = () => {
    if (!(name && pass && name.trim() !== 0 && pass.trim() !== 0)) {
      return;
    }
    if (name == pass) {
      setUserName(name);
      SetIsLogin(true);
      navigate("/");
      setname("");
      setpass("");
    } else {
      alert("Invalid userName & Password");
      alert("Check README file on Github for id-password");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="loginImageBox">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="loginHeading">Login Form</h2>
          <div className="loginBox">
            <input
              type="text"
              name=""
              id=""
              placeholder="User Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Password"
              value={pass}
              onChange={(e) => setpass(e.target.value)}
            />
            <button onClick={LoginHandler}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
