import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
    const [theme, setTheme] = useState('light');
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])


    const handleToggle = e => {
        if(e.target.checked){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    }
   
    const navLinks = <>
        <li className="mb-2 md:mr-2"><NavLink to="/">Home</NavLink></li>
        <li className="mb-2 md:mr-2"><NavLink to="/allCraftItems">All Craft Items</NavLink></li>
        <li className="mb-2 md:mr-2"><NavLink to="addCraftItem">Add Craft Item</NavLink></li>
        <li className="mb-2 md:mr-2"><NavLink to="myCraftList">My Craft List</NavLink></li>
        <li className="mb-2 md:mr-2"><NavLink to="addArtCrafts">Add Art & Craft</NavLink></li>
        <li className="mb-2 md:mr-2"><NavLink to="/login">Login</NavLink></li>
        <li className="mb-2 md:mr-2"><NavLink to="register">Register</NavLink></li>


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
                            duration-1000 ${open ? 'top-16' : '-top-72'} shadow absolute`}>
                        {navLinks}
                    </ul>
                </div>
                <h4 className="text-xl font-bold text-sky-500">Focus<span className="text-sky-600">Crafty
                    </span></h4>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
           <div>
           <label className="grid cursor-pointer place-items-center">
                <input onChange={handleToggle}
                    type="checkbox"
                    className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                <svg
                    className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <path
                        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <svg
                    className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </label>
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
                                        src={user.photoURL} />
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