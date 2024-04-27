import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TravelContext } from "../Provider/TravelProvider";

const LogIn = () => { 
    const {signInUser,logInWithGoogle,logInWithGithub} = useContext(TravelContext);
    const handleLogIn=e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
      //log in user
        signInUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })


    }


    return (
        <div className="hero min-h-screen  bg-base-200">
      <div className="hero-content md:my-10 w-full">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center mb-3">
            Do not have an account?{" "}
            <Link className="text-blue-800 font-bold" to="/register">
              Register
            </Link>{" "}
          </p>
          <div className="p-4">
          <h1 className="text-2xl font-bold text-center"> Or Log In with</h1>

          <button onClick={()=>logInWithGoogle()} className="btn btn-outline mt-3 w-full">
            <FaGoogle></FaGoogle>
            Log In with google
          </button>
          <button onClick={()=>logInWithGithub()} className="btn btn-outline mt-3 w-full">
            <FaGithub></FaGithub>
            Log In with GitHub
          </button>
        </div>
        </div>

      
      </div>
    </div>
    );
};

export default LogIn;