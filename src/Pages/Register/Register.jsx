import  { useContext, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/firebase.config';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
// import { FaEyeSlash } from "react-icons/fa";
// import { FaEye } from "react-icons/fa";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {

    const navigate = useNavigate()

    const { createUser } = useContext(AuthContext);

    const [user, setUser] = useState(null);


    

    // google sign in
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                console.log(user);
                navigate(location?.state ? location.stale: '/')
            })
            .catch(error = () => {
                console.log(error.message);
            })
    }


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        console.log(form);

        const name = form.get('name');
        const url = form.get('url');
        const email = form.get('email');
        const password = form.get('password')
        console.log(name, url, email, password);



        // if (password.length < 6) {
        //     toast.warn("Your password needs a minimum of four characters")
        // } else if (password.search(/[a-z]/) < 0) {
        //     toast.warn("Your password needs a lower case letter")
        // } else if (password.search(/[A-Z]/) < 0) {
        //     toast.warn("Your password needs an uppser case letter")
        // } else if (password.search(/[0-9]/) < 0) {
        //     toast.warn("Your password needs a number")
        // } else {
        //     toast.success("Registered success fully")
        // }



        createUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.stale: '/')
            })
            .catch(error => {
                console.error(error);
            })

        // const name = e.target.name.value;
        // const url = e.target.url.value;
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(name, url, email, password);
    }

    // const toggle = () => {
    //     setOpen(!open)
    // }


    return (
        <div>
            <Navbar></Navbar>


            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5">


                            {/* Form section */}
                            <form onSubmit={handleRegister} className="card-body ">

                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Enter Your Name" className="input input-bordered px-24 " required name='name' />
                                </div>


                                <div className="form-control my-4">
                                    <label className="label">
                                        <span className="label-text">Picture url</span>
                                    </label>
                                    <input type="url" placeholder="Enter picture url" className="input input-bordered" required name='url' />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required name='email' />
                                </div>

                                <div className="form-control my-4">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required name='password' />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                                <p>Already have an account go to <Link to='/login' className='font-bold text-blue-500 underline' >Login</Link>  </p>


                                {/* Google and github authentication */}
                                <hr />
                            </form>

                            <div className='text-center'>
                                <h2 className="text-xl mb-4">Login With</h2>
                                <div className=' flex justify-center'>
                                    <button onClick={handleGoogleSignIn} className="  mr-5"> <FcGoogle className='h-[30px] w-[30px]' /> </button>
                                    <button className=""> <FaGithub className='h-[30px] w-[30px]' /> </button>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>

            </div>


            <Footer></Footer>
        </div>
    );
};

export default Register;