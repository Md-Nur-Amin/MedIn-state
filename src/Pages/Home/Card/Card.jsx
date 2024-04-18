import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Card = ({ cards }) => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const { id, estate_title, segment_name, description, price, status, area, location, facilities, image_url } = cards;

    return (
        <div className="">
            <div className="card lg:w-96 my-5 font-popins mx-auto bg-base-100 shadow-xl" data-aos="zoom-in">
                <figure><img src={image_url} alt="Shoes" /> </figure>
                <div className="card-body">
                    <h2 className="card-title font-popins"> {estate_title} </h2>
                    <h2 className=" text-xl font-medium font-popins"> {location} </h2>
                    <h2 className=" font-popins"> Price: {price} </h2>
                    <h2 className="text-sm font-popins"> {status} </h2>

                    {
                        description.length > 50 ? (
                            <p>{description.slice(0, 50)} <br /> <Link to={`/cards/${id}`} className="mt-5 btn">View Property</Link></p>
                        ) : (
                            <p>{description}</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;
