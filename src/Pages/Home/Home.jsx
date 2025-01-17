import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Card from "./Card/Card";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';


const Home = () => {

    
        useEffect(() => {
            Aos.init({ duration: 3000 });
        }, []);


    const cards = useLoaderData();
    console.log(cards);




    return (
        <div >
            <HelmetProvider>
            <Helmet><title> Home Page</title></Helmet>
           
            <Banner></Banner>

            {/* Card section */}


            <div className="grid grid-cols-1 lg:grid-cols-3 my-10">
                {
                    cards.map(card => <Card
                        key={card.id}
                        cards={card} >
                    </Card>)
                }
            </div>

            <div>
                <div data-aos="fade-left">
                    <div className=" mx-8 rounded-t-3xl bg-gray-500 dark:bg-gray-500" style={{ backgroundImage: "url('https://source.unsplash.com/random/640x480')", backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundSize: "cover" }}>
                        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                            <h1 className="text-5xl antialiased font-semibold leading-none text-center text-gray-100 dark:text-gray-800">Get Our Updates</h1>
                            <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-100 dark:text-gray-800">Find out about events and other news</p>
                            <div className="flex flex-row">
                                <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                                <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-600 dark:bg-violet-400 text-gray-50 dark:text-gray-900">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>




           
            </HelmetProvider>
        </div>
    );
};

export default Home;