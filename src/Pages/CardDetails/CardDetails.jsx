import { Link, useLoaderData, useParams } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { IoMdPricetags } from "react-icons/io";
import { GrStatusWarning } from "react-icons/gr";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MdOutlineDescription } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const CardDetails = () => {

    const { id } = useParams();
    const cards = useLoaderData();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt)
    console.log(card);

    return (
        <div>
            <HelmetProvider>
            <Helmet><title>Card Property</title></Helmet>
            
            {/* 
            <p> {id} </p>
            <p> {card.estate_title} </p> */}

            <div>
                <div className="hero min-h-screen bg-base-200 ">
                    <div className="hero-content flex-col lg:flex-row lg:mx-20 lg:h-[550px]  ">

                        <img src={card.image_url} className="lg:max-w-sm shadow-2xl pb-24 rounded-3xl lg:rounded-l-3xl " />

                        <div className="lg:ml-8 ml-3">
                            <h1 className="text-2xl lg:text-4xl font-bold"> {card.estate_title} </h1>

                            <p className="text-2xl font-medium my-4"> {card.segment_name} </p>


                            <div className="flex gap-x-2  lg:gap-x-10">
                                <p className="flex gap-x-2 mb-4 lg:text-xl font-medium"> <CiLocationOn className="text-green-400 mt-1" /> {card.location} </p>

                                <p className="flex gap-x-2 lg:text-xl font-medium"> {card.area} </p>
                            </div>


                            <hr className="border-dashed my-5" />
                            <p className="flex gap-x-2"> <MdOutlineDescription /> {card.description} </p>

                            <hr className="border-dashed my-5" />


                            <div className="flex gap-x-5 my-4">
                                <p className="flex gap-x-2 text-xl font-medium"> <IoMdPricetags className="mt-1 text-green-400" /> {card.price} </p>

                                <p className="flex gap-x-2 text-xl font-medium"> <GrStatusWarning className="mt-1 text-yellow-300" /> {card.status} </p>
                            </div>

                            {/* <p className="py-"> {card.facilities} </p> */}

                            <button className="btn btn-primary "> <Link to='/' > Go Back </Link></button>
                        </div>
                    </div>
                </div>
            </div>
           
            </HelmetProvider>
        </div>
    );
};

export default CardDetails;