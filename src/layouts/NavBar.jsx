import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { TravelContext } from "../Provider/TravelProvider";

const NavBar = () => {
    const {user,LogOutUser} = useContext(TravelContext)
    console.log(user)
   const handleLogOut = ()=>{
    LogOutUser()
    .then(result=>console.log(result.user))
    .catch(error=>console.log(error))
   }
    const navLinks = <>
      <li>
         <NavLink to='/'> Home </NavLink>
      </li>
      <li>
         <NavLink to='/allTourists'> All Tourists Spot </NavLink>
      </li>
      <li>
         <NavLink to='/addTourists'> Add Tourists Spot </NavLink>
      </li>
      <li>
         <NavLink to='/mylist'> My List </NavLink>
      </li>
      {
         user?
         '':
         <li>
          <NavLink to='/register'>Register</NavLink>
         </li>
       }
     
    
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold text-blue-900">Majestic Getaways</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        {
        user?
        <>
         <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={user?.photoURL || "https://i.ibb.co/zZChys7/empty-Profile.png" }
            />
          </div>
        </div>
        <Link onClick={handleLogOut}>
          <button className="btn bg-[#403F3F] text-white">Log Out</button>
        </Link>
        </> :
         <Link to='/login'>
         <button className="btn bg-[#403F3F] text-white">Log In</button>
       </Link>
       }
        </div>
      </div>
    );
};

export default NavBar;