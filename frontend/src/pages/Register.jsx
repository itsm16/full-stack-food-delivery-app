import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Using async/await for consistency
  async function handleSubmit() {
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        username,
        password
      });
      navigate("/login");
      alert("User Registered");

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='h-[71vh] bg-white w-screen flex flex-col items-center justify-center'>
      <div className='w-[70%] h-[70%] flex flex-col gap-3 md:w-[30%]'>
        <div className='font-bold text-xl text-black'>Register</div>
        <input type="text" className='input' onChange={e => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" className='input' onChange={e => setPassword(e.target.value)} placeholder="Password" />
        <button className='btn btn-primary' onClick={handleSubmit}>Register</button>
        <div className='text-black mt-4'>Already a user? <b className='text-blue-500 font-bold hover:underline'><Link to={"/login"}>Login</Link></b></div>
      </div>
    </div>
  )
}

export default Login;
