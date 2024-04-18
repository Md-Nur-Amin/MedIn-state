import { Link, NavLink } from "react-router-dom";
import hospital from "../../../assets/hospital.png"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.error(error);
            })
    }


    const navLinks = <>
        <li className="lg:text-white font-popins" ><NavLink to="/">Home</NavLink></li>
        <li className="lg:text-white font-popins" ><NavLink to="/about">About</NavLink></li>

        {/* <li className="lg:text-white" ><NavLink to="/profile">Profile</NavLink></li> */}

        <li className="lg:text-white font-popins" ><NavLink to="/register">Register</NavLink></li>

        <li>
            {
                user &&
                <>
                    <NavLink className="lg:text-white font-popins" to='/update'
                    >Update Profile </NavLink>
                </>
            }
        </li>

        <li>
            {
                user &&
                <>
                    <NavLink className="lg:text-white font-popins" to='/profile'
                    > Profile </NavLink>
                </>
            }
        </li>




    </>




    return (
        <div className="">
            <div className="bg-slate-600 lg:px-16 py-3" >
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
                                {navLinks}
                            </ul>
                        </div>
                        <div className="flex gap-x-2 lg:gap-3">
                            <img className="h-[40px] w-[40px] lg:h-[64px] lg:w-[64px] " src={hospital} alt="" />
                            <a className=" font-semibold lg:font-bold text-2xl lg:text-5xl mt-2 lg:mt-5 text-blue-950 font-popins"> MED<span className="text-blue-400">IN</span>  </a>
                        </div>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>



                    <div className="navbar-end mr-3 lg:mr-0">
                        <div className="dropdown dropdown-end lg:tooltip" data-tip={user?.displayName}>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className=" w-10 mt-2 lg:w-12 rounded-full ">
                                    <img src={user?.photoURL} className="max-w-sm rounded-lg shadow-2xl " alt="User Avatar" />

                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-32 " >
                                <li><a> {user?.displayName} </a></li>
                                <li>
                                    <Link to="/about" > About </Link>
                                </li>

                                <li>
                                    {
                                        user &&
                                        <>
                                            <NavLink className="" to='/profile'
                                            > Profile </NavLink>
                                        </>
                                    }
                                </li>


                                {/* This logout button is conditional */}
                                {
                                    user ? <li onClick={handleLogOut} ><a>Log Out</a></li>
                                        : <Link to='/login'> <li><a>Login</a></li>  </Link>
                                }


                            </ul>
                        </div>
                    </div>
                    


                </div>
            </div>
        </div>
    );
};

export default Navbar;



{/* <div className="navbar bg-base-100">
    <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="flex-none">
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-sm indicator-item">8</span>
                </div>
            </div>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-block">View cart</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
        </div>
    </div>
</div> */}