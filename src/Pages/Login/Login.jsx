import Navbar from "../Shared/Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate()


    const [regError, setRegError] = useState('')
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                navigate(location?.state ? location.stale : '/')
                console.log(result.user);
                setSuccess('User Login successfully')
            })
            .catch(error => {
                console.error(error);
                setRegError(error.message)
            })


        setRegError('')
        setSuccess('')

        if (password.length < 6) {
            setRegError('Password should be at least 6 character or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegError('Password should have at least one upper case character')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegError('Password should have at least one lowercase character');
            return;
        }
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
                navigate(location?.state ? location.stale : '/')
            })
            .catch(error = () => {
                console.log(error.message);
            })
    }

    const gitProvider = new GithubAuthProvider();
    const handleGithubSignIn = () => {
        signInWithPopup(auth, gitProvider)
            .then(result => {
                const NewUser = result.NewUser;
                console.log(NewUser);
                navigate(location?.state ? location.stale : '/')
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

                                    <div className='flex'>
                                        <input
                                            type={showPass ? "text" : "password"}
                                            placeholder="password"
                                            className="input input-bordered lg:px-16"
                                            required name='password' />
                                        <span className='mt-5 ml-2' onClick={() => setShowPass(!showPass)} >
                                            {
                                                showPass ? <FaEyeSlash /> : <FaEye />
                                            }
                                        </span>
                                    </div>



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

                                    <button onClick={handleGithubSignIn} className=""> <FaGithub className='h-[30px] w-[30px]' /> </button>
                                </div>




                                {
                                    regError && <p className='text-red-600 ' > {regError} </p>
                                }

                                {
                                    success && <p className='text-green-600 ' > {success} </p>
                                }
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