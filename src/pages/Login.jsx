import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { loginUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const location =useLocation()
  console.log(location);
  

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log(form);
    const email = form.get("email");
    const password = form.get("password");

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ?  location.state : "/")
        
      })
      .catch((error) => {
        console.log("errorr", error.message);
      });
  };

  return (
    <div class="card bg-base-100 w-full max-w-xl shrink-0 rounded-none mx-auto mt-14  p-12">
      <p className="pt-10 text-center text-4xl font-bold">Login your Account</p>
      <form onSubmit={handleLoginSubmit} class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text text-xl font-semibold">Email</span>
          </label>
          <input
          name="email"
            type="email"
            placeholder="email"
            class="input input-bordered"
            required
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text text-xl font-semibold">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            class="input input-bordered"
            required
          />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn bg-[#403F3F] text-white">Login</button>
        </div>
      </form>
      <p className="text-center">
        Doesn't have an Account?{" "}
        <Link to="/auth/register" className="text-blue-600 underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
