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
            <div className="card lg:w-96 my-5  mx-auto bg-base-100 shadow-xl" data-aos="zoom-in-left">
                <figure><img src={image_url} alt="Shoes" /> </figure>
                <div className="card-body">
                    <h2 className="card-title"> {estate_title} </h2>
                    <h2 className="card-title"> {location} </h2>
                    <h2 className="card-title"> Price:  {price} </h2>
                    <h2 className="card-title"> {status} </h2>

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
