import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/demo-user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  return (
    <div className="flex justify-between items-center w-10/12 mx-auto">
      <div>
        <p>{user && user.email}</p>
      </div>
      <div className="item">
        <ul className="flex gap-5 justify-center items-center ml-28">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/career">
            <li>Career</li>
          </NavLink>
        </ul>
      </div>
      <div className="flex gap-3 items-center ">
        <div>
          {
            user && user?.email ? <div className="flex items-center gap-2"><img className="w-12 h-12" src={user?.photoURL} alt="" /> <p>{user.displayName}</p>
            </div> : <img src={userIcon} alt="" /> 
          }
        </div>
        {
          user && user?.email ? <button onClick={logOut} className="btn btn-neutral rounded-none">Logout</button> 
          : <Link to="/auth/login"><button className="btn btn-neutral rounded-none">Login</button></Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
