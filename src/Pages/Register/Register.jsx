import { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/firebase.config';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, updateprofile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [regError, setRegError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);

    // Auth providers
    const auth = getAuth(app);

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                Swal.fire({ icon: 'success', title: 'Registered with Google!' });
                navigate(location?.state?.from?.pathname || '/');
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    const handleGithubSignIn = () => {
        const gitProvider = new GithubAuthProvider();
        signInWithPopup(auth, gitProvider)
            .then(result => {
                Swal.fire({ icon: 'success', title: 'Registered with GitHub!' });
                navigate(location?.state?.from?.pathname || '/');
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const url = form.get('url');
        const email = form.get('email');
        const password = form.get('password');

        setRegError('');
        setSuccess('');

        // Validation
        if (password.length < 6) {
            return Swal.fire({ icon: 'info', title: 'Password must be at least 6 characters' });
        } else if (!/[A-Z]/.test(password)) {
            return Swal.fire({ icon: 'info', title: 'Password must contain an uppercase letter' });
        } else if (!/[a-z]/.test(password)) {
            return Swal.fire({ icon: 'info', title: 'Password must contain a lowercase letter' });
        }

        createUser(email, password)
            .then(() => {
                updateprofile(name, url)
                    .then(() => {
                        Swal.fire({ icon: 'success', title: 'Registered successfully!' });
                        navigate(location?.state?.from?.pathname || '/');
                    })
                    .catch(err => {
                        console.log(err.message);
                        setRegError(err.message);
                    });
            })
            .catch(error => {
                console.error(error.message);
                setRegError(error.message);
            });
    };

    return (
        <HelmetProvider>
            <Helmet><title>Register | MEDIN</title></Helmet>

            <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 ">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100 rounded-tl-3xl rounded-br-3xl p-6 mt-5">
                    <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

                    <form onSubmit={handleRegister} className="space-y-4">

                        <div>
                            <label className="label-text">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                required
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="label-text">Photo URL</label>
                            <input
                                type="text"
                                name="url"
                                placeholder="Your profile picture URL"
                                required
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="label-text">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="label-text">Password</label>
                            <div className="relative">
                                <input
                                    type={showPass ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter your password"
                                    required
                                    className="input input-bordered w-full pr-10"
                                />
                                <span
                                    className="absolute right-3 top-3 cursor-pointer"
                                    onClick={() => setShowPass(!showPass)}
                                >
                                    {showPass ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-full">Register</button>
                    </form>

                    <p className="text-sm mt-3 text-center">
                        Already have an account? <Link to="/login" className="text-blue-600 font-semibold underline">Login</Link>
                    </p>

                    <div className="divider my-4">OR</div>

                    <div className="flex justify-center gap-6 mb-4">
                        <button onClick={handleGoogleSignIn}>
                            <FcGoogle className="text-3xl" />
                        </button>
                        <button onClick={handleGithubSignIn}>
                            <FaGithub className="text-3xl" />
                        </button>
                    </div>

                    {regError && <p className="text-red-500 text-sm text-center">{regError}</p>}
                    {success && <p className="text-green-500 text-sm text-center">{success}</p>}
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Register;
