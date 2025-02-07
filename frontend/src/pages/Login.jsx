import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/features/userSlice';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.user);
  const addedItems = useSelector(state => state.cart.items);

  // Using async/await for consistency
  async function handleSubmit() {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });

      const { user, userId, token } = response.data;
      dispatch(loginUser({ user, userId, token }))

      console.log(response.data);

      addedItems == 0 ? navigate("/menu") : navigate("/cart")
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  return (
    <div className='h-[71vh] bg-white w-screen flex flex-col items-center justify-center'>
      <div className='w-[70%] max-w-[300px] h-[70%] flex flex-col gap-3 md:w-[30%] md:max-w-[400px]'>
        <div className='font-bold text-xl text-black'>Login</div>
        <input type="text" className='input' onChange={e => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" className='input' onChange={e => setPassword(e.target.value)} placeholder="Password" />
        <button className='btn btn-primary' onClick={handleSubmit}>Login</button>
        <div
          className='text-black mt-4'>Not a User?
          <div className='text-blue-500 font-bold hover:underline'>
            <Link to="/register">Register</Link>
          </div></div>
      </div>
    </div>
  )
}

export default Login;
