import { Link, useLoaderData, useParams } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import { IoMdPricetags } from "react-icons/io";
import { GrStatusWarning } from "react-icons/gr";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CiLocationOn } from "react-icons/ci";
import { LuRuler } from "react-icons/lu";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { useEffect } from "react";

const CardDetails = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const { id } = useParams();
    const cards = useLoaderData();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Property Details - {card.estate_title}</title>
            </Helmet>

            <div className="min-h-screen bg-gray-50 py-10 px-5 lg:px-20">
                <div
                    data-aos="fade-up"
                    className="bg-white shadow-lg overflow-hidden flex flex-col lg:flex-row rounded-tl-3xl rounded-br-3xl"
                >
                    {/* Image Section */}
                    <div className="lg:w-1/2">
                        <img
                            src={card.image_url}
                            alt={card.estate_title}
                            className="object-cover w-full h-96 lg:h-full"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="lg:w-1/2 p-6 lg:p-10 space-y-4">
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 font-popins flex items-center gap-2">
                            <HiOutlineOfficeBuilding className="text-indigo-600 text-3xl" />
                            {card.estate_title}
                        </h1>

                        <p className="text-lg font-semibold text-indigo-600 font-popins flex items-center gap-2">
                            🏷️ {card.segment_name}
                        </p>

                        <div className="flex flex-col lg:flex-row gap-4 text-gray-600">
                            <p className="flex items-center gap-2 font-medium text-md">
                                <CiLocationOn className="text-green-500 text-xl" />
                                {card.location}
                            </p>
                            <p className="flex items-center gap-2 font-medium text-md">
                                <LuRuler className="text-gray-500 text-xl" />
                                {card.area}
                            </p>
                        </div>

                        <hr className="border-dashed border-gray-300" />

                        <p className="text-gray-700 text-justify leading-relaxed font-popins">
                            {card.description}
                        </p>

                        <hr className="border-dashed border-gray-300" />

                        <div className="flex flex-wrap gap-4 text-gray-700">
                            <p className="flex items-center gap-2 text-lg font-medium">
                                <IoMdPricetags className="text-green-500 text-xl" />
                                <span>{card.price}</span>
                            </p>
                            <p className="flex items-center gap-2 text-lg font-medium">
                                <GrStatusWarning className="text-yellow-400 text-xl" />
                                <span>{card.status}</span>
                            </p>
                        </div>

                        {/* Back Button */}
                        <div className="pt-6">
                            <Link to="/">
                                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-tl-xl rounded-br-xl transition duration-300">
                                    ← Go Back
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default CardDetails;
