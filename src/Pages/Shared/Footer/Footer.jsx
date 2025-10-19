import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 border-t border-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* Brand Section */}
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <svg width="36" height="36" viewBox="0 0 24 24" className="text-green-600 fill-current">
                            <path d="M22.672 15.226l-2.432.811...z"></path>
                        </svg>
                        <span className="text-xl font-bold">MEDIn Industries</span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">
                        Providing reliable tech since 1992. We empower businesses with modern solutions and support.
                    </p>
                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4 text-gray-500">
                        <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
                        <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
                        <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
                        <a href="#" className="hover:text-blue-700"><FaLinkedinIn /></a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Branding</a></li>
                        <li><a href="#" className="hover:underline">Design</a></li>
                        <li><a href="#" className="hover:underline">Marketing</a></li>
                        <li><a href="#" className="hover:underline">Advertisement</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">About us</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                        <li><a href="#" className="hover:underline">Jobs</a></li>
                        <li><a href="#" className="hover:underline">Press kit</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Legal</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Terms of use</a></li>
                        <li><a href="#" className="hover:underline">Privacy policy</a></li>
                        <li><a href="#" className="hover:underline">Cookie policy</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-300 text-center text-sm py-4 text-gray-500">
                © {new Date().getFullYear()} MEDIn Hospitality . All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
