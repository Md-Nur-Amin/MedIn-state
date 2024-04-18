import { Link, useLoaderData, useParams } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import { IoMdPricetags } from "react-icons/io";
import { GrStatusWarning } from "react-icons/gr";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { CiLocationOn } from "react-icons/ci";
import { useEffect } from "react";

const CardDetails = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

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
                <div data-aos="fade-left" className="hero min-h-screen bg-base-200 ">
                    <div className="hero-content flex-col lg:flex-row lg:mx-20 lg:h-[550px]  ">

                        <img src={card.image_url} className="lg:max-w-sm shadow-2xl pb-24 rounded-3xl lg:rounded-l-3xl " />

                        <div className="lg:ml-8 ml-3">
                            <h1 className="text-2xl lg:text-4xl font-bold font-popins"> {card.estate_title} </h1>

                            <p className="text-2xl font-medium my-4 font-popins"> {card.segment_name} </p>


                            <div className="flex gap-x-2  lg:gap-x-10">
                                <p className="flex gap-x-2 mb-4 lg:text-xl font-medium font-popins"> <CiLocationOn className="text-green-500 mt-1" /> {card.location} </p>

                                <p className="flex gap-x-2 lg:text-xl font-medium font-popins"> {card.area} </p>
                            </div>


                            <hr className="border-dashed mb-5 bg-green-600" />
                            <p className="flex gap-x-2 font-popins">  {card.description} </p>

                            <hr className="border-dashed my-5 bg-green-600" />


                            <div className="flex gap-x-5 my-4">
                                <p className="flex gap-x-2 text-xl font-medium font-popins"> <IoMdPricetags className="mt-1 text-green-400" /> {card.price} </p>

                                <p className="flex gap-x-2 text-xl font-medium font-popins"> <GrStatusWarning className="mt-1 text-yellow-300" /> {card.status} </p>
                            </div>

                            {/* <p className="py-"> {card.facilities} </p> */}

                            <button className="btn btn-primary px-14 "> <Link to='/' > Go Back </Link></button>
                        </div>
                    </div>
                </div>
            </div>
           
            </HelmetProvider>
        </div>
    );
};

export default CardDetails;