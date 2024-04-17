import Navbar from "../Shared/Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)
        signIn(email, password)
        .then(result => {
            navigate(location?.state ? location.stale: '/')
            console.log(result.user);
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

    // Google sign in
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












    return (
        <div>
            <Navbar></Navbar>


            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5">


                            {/* Form section */}
                            <form onSubmit={handleLogin} className="card-body ">

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
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <p>Do not have an account go to <Link to='/register' className='font-bold text-blue-500 underline' > Register </Link>  </p>


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

export default Login;