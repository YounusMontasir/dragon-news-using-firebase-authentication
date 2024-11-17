import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
  const {createNewUser, setUser, updateUserProfile, verifiedUser} = useContext(AuthContext)
  const handleSubmit = (e) =>{
      e.preventDefault();
      const form = new FormData(e.target)
      console.log(form);
      const name = form.get("name")
      const photo = form.get("photo")
      const email = form.get("email")
      const password = form.get("password")
      
      createNewUser(email,password)
      .then(result =>{
        const user = result.user;
        setUser(user)
        updateUserProfile({displayName: name ,photoURL: photo})
        verifiedUser()
        console.log(user);
        
        
      })
      .catch(error => {
        console.log("errorr" , error.message);
        
      })
       
  }


  return (
    <div class="card bg-base-100 w-full max-w-xl shrink-0 rounded-none mx-auto mt-14  p-12">
      <p className="pt-10 text-center text-4xl font-bold">Login your Account</p>
      <form onSubmit={handleSubmit} class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text text-xl font-semibold">Your Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            class="input input-bordered"
            required
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text text-xl font-semibold">Photo URL</span>
          </label>
          <input
            name="photo"
            type="text"
            placeholder="Photo URL"
            class="input input-bordered"
            required
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text text-xl font-semibold">Email</span>
          </label>
          <input
          name="email"
            type="email"
            placeholder="Enter your email"
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
            placeholder="Enter your password"
            class="input input-bordered"
            required
          />
          <div class="form-control">
            <label class="label cursor-pointer">
              <input type="checkbox" class="checkbox" />
              <span class="label-text">Remember me</span>
            </label>
          </div>
        </div>
        <div class="form-control mt-6">
          <button class="btn bg-[#403F3F] text-white">Register</button>
        </div>
      </form>
      <p className="text-center">
        Already have an Account?{" "}
        <Link to="/auth/login" className="text-blue-600 underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
