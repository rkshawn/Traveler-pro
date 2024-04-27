import { useContext, useState } from "react";
import { IoEyeOffOutline, IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { TravelContext } from "../Provider/TravelProvider";

const Register = () => {
    const {createUser} = useContext(TravelContext)
    const [showPassword, setShowPassword] = useState(false);
    const [registerError, setRegisterError] = useState("");

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoUrl.value;
        const password = form.password.value;
        console.log(name,email, photoURL,password)

        //password validation
        if (password.length < 6) {
            setRegisterError("Password can not be less than 6 character");
            return;
          } else if (!/[A-Z]/.test(password)) {
            setRegisterError("password should contain at-least an Uppercase");
            return;
          }
          createUser(email,password)
          .then(result=>{
            console.log(result.user)
          })
          .catch(error=>{
            console.log(error)
          })
    }

    
    return (
        <div className="hero min-h-screen  bg-base-200">
      <div className="hero-content w-full">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
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
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />{" "}
              <br />
              <span
                className="absolute ml-64 mt-12 text-xl"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IoEyeSharp></IoEyeSharp>
                ) : (
                  <IoEyeOffOutline></IoEyeOffOutline>
                )}
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center mb-3">
            Already have an account?
            <Link className="text-blue-800 font-bold" to="/login">
              Log In
            </Link>
          </p>
          {
          registerError && <p className="text-red-600 text-center mb-3">{registerError}</p>
          }
         
         
        </div>
      </div>
    </div>
    );
};

export default Register;