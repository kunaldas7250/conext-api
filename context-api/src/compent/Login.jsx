import React from "react";
import Usercontext from "../context/Usercontext";
import { useContext } from "react";
import { useState } from "react";
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const { setUser } = useContext(Usercontext);
  const handlesubmit = (e) => {
    e.preventDefault();
    setUser({username,password})
  };
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Enter your Text"  value={username} onChange={(e)=>setusername(e.target.value)}/>
      <input type="password" placeholder="Enter Your Password" value={password} onChange={(e)=>setpassword(e.target.value)} />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  );
};

export default Login;
