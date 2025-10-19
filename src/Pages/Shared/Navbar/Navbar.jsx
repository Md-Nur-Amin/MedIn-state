import { Link, NavLink } from "react-router-dom";
import healthy from "../../../assets/healthy.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.error(error);
            });
    };

    const navLinks = (
        <>
            <li><NavLink className="text-sm font-semibold text-gray-800 hover:text-cyan-600" to="/">Home</NavLink></li>
            <li><NavLink className="text-sm font-semibold text-gray-800 hover:text-cyan-600" to="/about">About</NavLink></li>
            <li><NavLink className="text-sm font-semibold text-gray-800 hover:text-cyan-600" to="/contact us">Contact</NavLink></li>
            <li><NavLink className="text-sm font-semibold text-gray-800 hover:text-cyan-600" to="/register">Register</NavLink></li>

            {user && (
                <>
                    <li><NavLink className="text-sm font-semibold text-gray-800 hover:text-cyan-600" to="/update">Update Profile</NavLink></li>
                    <li><NavLink className="text-sm font-semibold text-gray-800 hover:text-cyan-600" to="/profile">Profile</NavLink></li>
                </>
            )}
        </>
    );

    return (
        <div>
            <div className="bg-neutral-100 shadow-md px-5 lg:px-20">
                <div className="navbar">
                    {/* Left - Brand */}
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow-lg bg-white rounded-box w-44">
                                {navLinks}
                            </ul>
                        </div>

                        <div className="flex items-center gap-3">
                            <img className="h-10 w-10 lg:h-12 lg:w-12" src={healthy} alt="Logo" />
                            <Link to="/" className="text-xl lg:text-3xl font-bold text-blue-950 font-popins">
                                MED<span className="text-cyan-600">IN</span>
                            </Link>
                        </div>
                    </div>

                    {/* Center - Nav Links */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-3">
                            {navLinks}
                        </ul>
                    </div>

                    {/* Right - User / Guest */}
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end tooltip tooltip-left" data-tip={user?.displayName || "Guest Mode"}>
                            <div tabIndex={0} role="button" className="btn-ghost avatar">
                                <div className="w-8 lg:w-8 rounded-full ">
                                    {
                                        user?.photoURL ? (
                                            <img src={user.photoURL} alt="User Avatar" />
                                        ) : (
                                            <div className="bg-gray-300 flex items-center justify-center h-full w-full text-gray-600 font-semibold">
                                                G
                                            </div>
                                        )
                                    }
                                </div>
                            </div>

                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-40">
                                {user && <li><a>{user.displayName}</a></li>}
                                <li><Link to="/about">About</Link></li>
                                {user && <li><NavLink to="/profile">Profile</NavLink></li>}
                                {
                                    user ? (
                                        <li onClick={handleLogOut}><a>Log Out</a></li>
                                    ) : (
                                        <li><Link to="/login">Login</Link></li>
                                    )
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
