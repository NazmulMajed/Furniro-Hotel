import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //email,password.
    //http://ecomernce.signin
    if (email == "abc@gmail.com" && password == "1234567") {
      const user = {
        name: "ABC",
        email: "abc@gmail.com",
        city: "Dhaka",
        country: "Bandgladesh",
      };
      navigate("/profile", { state: user });
    } else {
      navigate("/signin");
    }
  };

  return (
    <div className="sign_in_container">
      <h2>User Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <input
          type="password"
          id="password"
          name="email"
          placeholder="Password"
          onChange={handlePasswordChange}
          //   onChange={handlePasswordChange}
        />
        <button>Sign In</button>
      </form>
    </div>
  );
};
export default SignIn;
