import { Link } from "react-router-dom";
import { IoMdPricetags } from "react-icons/io";
import { GrStatusWarning } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";

const Card = ({ cards }) => {
    const {
        id,
        estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities,
        image_url
    } = cards;

    return (
        <div className="w-full flex justify-center mb-5">
            <div
                className="bg-white shadow-lg rounded-tl-3xl rounded-br-3xl overflow-hidden w-full max-w-sm transition-transform duration-300 hover:scale-105"
            >
                <figure className="w-full h-56 overflow-hidden">
                    <img
                        src={image_url}
                        alt={estate_title}
                        className="w-full h-full object-cover"
                    />
                </figure>

                <div className="p-5 space-y-3">
                    <h2 className="text-xl font-bold text-gray-800 font-popins">
                        {estate_title}
                    </h2>

                    <p className="flex items-center gap-2 text-gray-600 font-medium text-sm">
                        <CiLocationOn className="text-green-500 text-lg" />
                        {location}
                    </p>

                    <div className="flex justify-between items-center text-sm text-gray-700">
                        <p className="flex items-center gap-1">
                            <IoMdPricetags className="text-green-500 text-lg" />
                            {price}
                        </p>
                        <p className="flex items-center gap-1">
                            <GrStatusWarning className="text-yellow-500 text-lg" />
                            {status}
                        </p>
                    </div>

                    <p className="text-gray-600 text-sm leading-snug">
                        {description.length > 60
                            ? `${description.slice(0, 60)}...`
                            : description}
                    </p>

                    <Link
                        to={`/cards/${id}`}
                        className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2 px-4 rounded-tl-xl rounded-br-xl transition duration-300"
                    >
                        View Property →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
