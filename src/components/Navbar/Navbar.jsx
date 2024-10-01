import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allCraftItems">All Craft Items</NavLink></li>
        <li><NavLink to="addCraftItem">Add Craft Item</NavLink></li>
        <li><NavLink to="myCraftList">My Craft List</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="register">Register</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <h4 className="text-xl font-bold">Focus<span className="">Crafty</span></h4>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user &&
                        <div className="dropdown dropdown-end flex">
                            <div className="flex justify-between items-center">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                                    </div>
                                </div>
                                </div>
                                
                               
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content rounded-box 
                                     mt-16 ml-12 w-48 p-2 ">
                                    <li className=" ">
                                        <a className="text-gray-600 ">
                                            {user.displayName}
                                        </a>
                                    </li>
                                </ul>
                                <button onClick={logOut}
                                    className="btn btn-sm btn-primary">Sign Out</button>
                            </div>
                       
                }

            </div>
        </div>
    );
};

export default Navbar;