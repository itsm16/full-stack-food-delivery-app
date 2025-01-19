import React from "react";
import { LuBookOpen, LuLogIn, LuMenu, LuShoppingBag } from "react-icons/lu";
import { Link } from "react-router";
import { useSelector, useStore } from 'react-redux'
import logo from '../assets/service-bell-line-b.png'

function Nav() {
  const totalItems = useSelector(state => state.cart.totalQuantity)
  const currentUser = useSelector(state => state.user.user)

  return (
    <div className="bg-white md:h-20 h-16 md:text-md flex items-center justify-center border-solid border-b border-gray-400">
      <div className="flex w-[90%] items-center justify-between pl-2 pr-2 md:pl-10 md:pr-10">
        <div className=""><Link to={"/"}><img className="w-11 rounded-lg" src={logo} /></Link></div>
        <div className="text-black hidden md:flex justify-between gap-8 ">
          {
            !currentUser
              ? <div className="hover:underline cursor-pointer flex"><Link to={"/login"}>Login</Link></div>
              : " "
          }
          <div className="hover:underline cursor-pointer flex"><Link to={"/menu"}>Menu</Link></div>
          <div className="hover:underline cursor-pointer flex"><Link>About</Link></div>
        </div>
        <div className="flex text-white gap-2">
          <div className="text-black font-serif flex self-center ">

            <div className="indicator">
              <span className="indicator-item badge-sm md:badge-sm badge badge-primary font-bold font-mono">{totalItems}</span>
              <Link to={"/cart"}><LuShoppingBag size={24} /></Link>
            </div>
          </div>
          <div className="md:hidden dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="bg-white text-black btn m-1 border-none flex items-center"
            >
              <LuMenu size={24} />
            </div>
            <div><ul
              tabIndex={0}
              className="bg-primary dropdown-content menu rounded-box z-[1] w-52 p-2 shadow font-bold"
            >
              <li className="text-black">
                <Link to={"/login"}>
                  <LuLogIn size={20} />
                  Login</Link>
              </li>
              <li className="text-black"><Link to={"/menu"}><LuBookOpen size={20} /> Menu</Link></li>
            </ul></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
