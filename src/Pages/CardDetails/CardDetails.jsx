import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { IoMdPricetags } from "react-icons/io";
import { GrStatusWarning } from "react-icons/gr";
import { BiArea } from "react-icons/bi";


const CardDetails = () => {

    const { id } = useParams();
    const cards = useLoaderData();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt)
    console.log(card);

    return (
        <div>
            <Navbar></Navbar>
            {/* 
            <p> {id} </p>
            <p> {card.estate_title} </p> */}

            <div>
                <div className="hero min-h-screen bg-base-200 ">
                    <div className="hero-content flex-col lg:flex-row mr-52 lg:h-[550px] w-[900px] ">
                        <img src={card.image_url} className="lg:max-w-sm rounded-lg shadow-2xl pb-20" />
                        <div>
                            <h1 className="text-2xl lg:text-4xl font-bold"> {card.estate_title} </h1>
                            
                            <p className="text-2xl font-medium my-4"> {card.segment_name} </p>
                            <hr className="border-dashed" />
                            <div className="flex gap-x-5 my-4">
                            <p className="flex gap-x-2 text-xl "> <IoMdPricetags className="mt-1 text-green-400" /> {card.price} </p>

                            <p className="flex gap-x-2 text-xl"> <GrStatusWarning className="mt-1 text-yellow-300"/> {card.status} </p>
                            </div>

                            <p className="flex gap-x-2 ">  <BiArea /> {card.area} </p>
                            <p className="py-"> {card.location} </p>
                            <p className="py-"> {card.facilities} </p>
                            <p className="py-"> {card.description} </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CardDetails;