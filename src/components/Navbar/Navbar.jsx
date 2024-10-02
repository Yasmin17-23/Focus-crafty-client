import { useContext, useState } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);


    const navLinks = <>
        <li className="mb-2 md:mr-2"><NavLink to="/">Home</NavLink></li>
        <li  className="mb-2 md:mr-2"><NavLink to="/allCraftItems">All Craft Items</NavLink></li>
        <li  className="mb-2 md:mr-2"><NavLink to="addCraftItem">Add Craft Item</NavLink></li>
        <li  className="mb-2 md:mr-2"><NavLink to="myCraftList">My Craft List</NavLink></li>
        <li  className="mb-2 md:mr-2"><NavLink to="/login">Login</NavLink></li>
        <li  className="mb-2 md:mr-2"><NavLink to="register">Register</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden text-black text-xl" 
                    onClick={() => setOpen(!open)}>
                     {
                        open === true ? 
                        <AiOutlineClose></AiOutlineClose> :
                        <AiOutlineMenu></AiOutlineMenu>
                     }
                    
                    </div>
                    <ul
                        tabIndex={0}
                        className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2
                            duration-1000 ${open ? 'top-12' : '-top-60'} shadow absolute`}>
                        {navLinks}
                    </ul>
                </div>
                <h4 className="text-xl font-bold text-sky-500">Focus<span className="text-sky-600">Crafty</span></h4>
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