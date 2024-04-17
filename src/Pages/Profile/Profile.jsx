import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Profile = () => {
    const { user, updateUserProfile, setUser } = useContext(AuthContext);

    const updation = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        updateUserProfile(name, photo)
            .then(() => {
                setUser({
                    ...user,
                    displayName: name,
                    photoURL: photo
                });
            })
            .catch(error => {
                console.error("Error updating profile:", error);
            });
    };

    return (
        <div className="lg:flex grid">
            <HelmetProvider>
            <Helmet><title>User Profile</title></Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={user?.photoURL} className="max-w-sm rounded-lg shadow-2xl" alt="User Avatar" />
                    <div>
                        <h1 className="text-5xl font-bold">{user?.displayName}</h1>
                        <p className="py-6">{user?.email}</p>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={updation} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" defaultValue={user?.photoURL} name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6 gap-y-3">
                                <button className="btn btn-primary">Update</button>
                                <Link className="btn btn-primary" to="/" > Go back </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </HelmetProvider>
        </div>
    );
};

export default Profile;
