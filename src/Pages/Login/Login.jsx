import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Swal from 'sweetalert2';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [regError, setRegError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        // Basic password validation BEFORE calling Firebase
        if (password.length < 6) {
            return Swal.fire({ icon: 'info', title: 'Password must be at least 6 characters' });
        } else if (!/[A-Z]/.test(password)) {
            return Swal.fire({ icon: 'info', title: 'Password must contain at least one uppercase letter' });
        } else if (!/[a-z]/.test(password)) {
            return Swal.fire({ icon: 'info', title: 'Password must contain at least one lowercase letter' });
        }

        signIn(email, password)
            .then(result => {
                setSuccess('User logged in successfully');
                Swal.fire({ icon: 'success', title: 'Login successful' });
                navigate(location?.state?.from?.pathname || '/');
            })
            .catch(error => {
                setRegError(error.message);
                Swal.fire({ icon: 'error', title: 'Login failed', text: error.message });
            });
    };

    const auth = getAuth(app);

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                Swal.fire({ icon: 'success', title: 'Google login successful' });
                navigate(location?.state?.from?.pathname || '/');
            })
            .catch(error => {
                console.error(error);
                Swal.fire({ icon: 'error', title: 'Google login failed' });
            });
    };

    const handleGithubSignIn = () => {
        const gitProvider = new GithubAuthProvider();
        signInWithPopup(auth, gitProvider)
            .then(result => {
                Swal.fire({ icon: 'success', title: 'GitHub login successful' });
                navigate(location?.state?.from?.pathname || '/');
            })
            .catch(error => {
                console.error(error);
                Swal.fire({ icon: 'error', title: 'GitHub login failed' });
            });
    };

    return (
        <HelmetProvider>
            <Helmet><title>Login</title></Helmet>

            <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
                <div className="card w-full max-w-sm bg-base-100 shadow-xl rounded-tl-3xl rounded-br-3xl py-6 px-4">
                    <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

                    {/* Login Form */}
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="input input-bordered w-full"
                                required
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPass ? "text" : "password"}
                                    name="password"
                                    className="input input-bordered w-full pr-10"
                                    required
                                    placeholder="Enter your password"
                                />
                                <span
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute right-3 top-3 cursor-pointer text-lg"
                                >
                                    {showPass ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>

                        <div className="text-right">
                            <a className="text-sm text-blue-500 hover:underline" href="#">Forgot password?</a>
                        </div>

                        <button type="submit" className="btn btn-primary w-full">Login</button>
                    </form>

                    <p className="text-center text-sm mt-3">
                        Don't have an account? <Link to="/register" className="text-blue-600 font-semibold underline">Register</Link>
                    </p>

                    {/* Divider */}
                    <div className="divider my-4">OR</div>

                    {/* Social Logins */}
                    <div className="flex justify-center gap-6">
                        <button onClick={handleGoogleSignIn}>
                            <FcGoogle className="text-3xl" />
                        </button>
                        <button onClick={handleGithubSignIn}>
                            <FaGithub className="text-3xl" />
                        </button>
                    </div>

                    {/* Error/Success Messages */}
                    <div className="mt-4 text-center">
                        {regError && <p className="text-red-500 text-sm">{regError}</p>}
                        {success && <p className="text-green-500 text-sm">{success}</p>}
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Login;
