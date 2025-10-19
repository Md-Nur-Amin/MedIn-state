import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>About</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100 px-4 py-16">
        <div
          className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-10"
          data-aos="fade-up"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              We'd Love Your Feedback
            </h2>
            <p className="text-gray-500 mt-2">
              How was your experience with us?
            </p>
          </div>

          {/* Star Rating */}
          <div className="flex justify-center space-x-2 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                title={`Rate ${star} star${star > 1 ? "s" : ""}`}
                aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={star === 5 ? "#d1d5db" : "#facc15"}
                  viewBox="0 0 24 24"
                  className="w-8 h-8 transition-transform duration-200 hover:scale-110"
                >
                  <path d="M12 .587l3.668 7.568L24 9.748l-6 5.91 1.42 8.282L12 18.896l-7.42 4.944L6 15.658 0 9.748l8.332-1.593z" />
                </svg>
              </button>
            ))}
          </div>

          {/* Feedback Textarea */}
          <div className="mb-6">
            <textarea
              rows="4"
              placeholder="Write your feedback here..."
              className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Submit Feedback
            </button>
          </div>

          {/* Optional action */}
          <div className="text-center mt-6">
            <Link
              to="/"
              className="text-sm text-gray-500 hover:underline hover:text-indigo-500"
            >
              Maybe later
            </Link>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default About;
