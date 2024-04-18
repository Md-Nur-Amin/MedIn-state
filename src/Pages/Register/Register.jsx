import { useContext, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import app from '../../Firebase/firebase.config';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';
import Swal from 'sweetalert2';


const Register = () => {

    const navigate = useNavigate()

    const { createUser, updateprofile } = useContext(AuthContext);

    const [user, setUser] = useState(null);
    const [regError, setRegError] = useState('')
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);



    // google sign in
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                console.log(user);
                Swal.fire({
                    icon: 'success',
                    title: 'Registerd successfully'
                });
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
                Swal.fire({
                    icon: 'success',
                    title: 'Registerd successfully'
                });
                navigate(location?.state ? location.stale : '/')
            })
            .catch(error = () => {
                console.log(error.message);
            })
    }



    // Register with email and password
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


        // Register error check and Register succes check 
        setRegError('')
        setSuccess('')

        if (password.length < 6) {
            Swal.fire({
                icon: 'info',
                title: 'Password should be at least 6 characters or longer'
            });
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: 'info',
                title: 'Password should have at least one uppercase character'
            });
            return;
        }
        else if (!/[a-z]/.test(password)) {
            Swal.fire({
                icon: 'info',
                title: 'Password should have at least one lowercase character'
            });
            return;
        }


        createUser(email, password, name, url)
            .then(() => {
                updateprofile(name, url)
                    .then((result) => {
                        console.log(result?.user);
                        Swal.fire({
                            icon: 'success',
                            title: 'Registerd successfully'
                        });
                        navigate(location?.state ? location.stale : '/')
                    })
            })
            .catch(error => {
                console.error(error);
                setRegError(error.message)

            })


    }


    return (
        <div>
            <HelmetProvider>
                <Helmet><title> Register | MEDIN</title></Helmet>



                <div>
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">

                            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5">


                                {/* Form section */}
                                <form onSubmit={handleRegister} className="card-body ">

                                    <div className="form-control ">
                                        <label className="label">
                                            <span className="label-text">Your Name</span>
                                        </label>
                                        <input type="text" placeholder="Enter Your Name" className="input input-bordered lg:px-24 " required name='name' />
                                    </div>


                                    <div className="form-control my-4">
                                        <label className="label">
                                            <span className="label-text">Picture url</span>
                                        </label>
                                        <input type="text" placeholder="Enter picture url" className="input input-bordered" required name='url' />
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
                                        <button className="btn btn-primary">Register</button>
                                    </div>
                                    <p>Already have an account go to <Link to='/login' className='font-bold text-blue-500 underline' >Login</Link>  </p>


                                    {/* Google and github authentication */}
                                    <hr />
                                </form>

                                <div className='text-center'>

                                    <h2 className="text-xl mb-4">Login With</h2>

                                    <div className=' flex justify-center mb-3'>
                                        <button onClick={handleGoogleSignIn} className="mr-5"> <FcGoogle className='h-[30px] w-[30px]' /> </button>

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



            </HelmetProvider>
        </div>
    );
};

export default Register;