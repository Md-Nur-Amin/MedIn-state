import { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { HelmetProvider, Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { updateprofile, user } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhoto(user.photoURL || "");
      setEmail(user.email || "");
    }
  }, [user]);

  const handleProfile = async (e) => {
    e.preventDefault();
    try {
      await updateprofile(name, photo);
      Swal.fire("Success", "Profile updated successfully", "success");
    } catch (error) {
      Swal.fire("Error", "Error updating profile", "error");
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-gray-50">
      <HelmetProvider>
        <Helmet>
          <title>Update Profile | MEDIN</title>
        </Helmet>

        {/* Left Panel */}
        <div className="hidden md:flex flex-col items-center justify-center bg-white w-1/3 border-r border-gray-300 px-6">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg mb-6">
            <img
              src={photo || "https://via.placeholder.com/150"}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-1 text-center truncate w-full">
            {name || "Your Name"}
          </h2>
          <p className="text-gray-500 text-center text-sm">{email}</p>
          <p className="mt-8 text-center text-gray-400 text-xs px-4">
            This is a preview of your current profile info. Update your details
            using the form on the right.
          </p>
        </div>

        {/* Right Panel */}
        <div className="flex-1 flex items-center justify-center px-8 md:px-16">
          <form
            onSubmit={handleProfile}
            className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8 md:p-6"
            autoComplete="off"
          >
            <h1 className="text-4xl font-bold mb-10 text-gray-900 text-center">
              Update Profile
            </h1>

            <label className="block mb-6">
              <span className="text-gray-700 font-semibold">Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </label>

            <label className="block mb-6">
              <span className="text-gray-700 font-semibold">Photo URL</span>
              <input
                type="url"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="Link to your profile picture"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </label>

            <label className="block mb-6">
              <span className="text-gray-700 font-semibold">Email (read-only)</span>
              <input
                type="email"
                value={email}
                disabled
                className="mt-1 block w-full border border-gray-200 bg-gray-100 rounded-md px-4 py-3 text-gray-500 cursor-not-allowed"
              />
            </label>

            <button
              type="submit"
              className="w-full py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
            >
              Save Changes
            </button>
          </form>
        </div>
      </HelmetProvider>
    </div>
  );
};

export default UpdateProfile;
