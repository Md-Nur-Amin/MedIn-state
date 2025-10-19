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
        <div className="overflow-x-hidden">
            <HelmetProvider>
                <Helmet>
                    <title>Home Page</title>
                </Helmet>

                <Banner />

                {/* Card section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10 px-4 md:px-6 lg:px-10">
                    {cards.map((card) => (
                        <Card key={card.id} cards={card} />
                    ))}
                </div>

                {/* Subscribe Section */}
                <div data-aos="fade-left">
                    <div
                        className="rounded-t-3xl bg-gray-500"
                        style={{
                            backgroundImage: "url('https://source.unsplash.com/random/640x480')",
                            backgroundPosition: "center",
                            backgroundBlendMode: "multiply",
                            backgroundSize: "cover",
                        }}
                    >
                        <div className="container mx-auto flex flex-col items-center justify-center p-4 py-20 md:p-10 text-white">
                            <h1 className="text-4xl font-semibold text-center">Get Our Updates</h1>
                            <p className="pt-2 pb-8 text-lg text-center">
                                Find out about events and other news
                            </p>
                            <div className="flex flex-col sm:flex-row w-full max-w-md">
                                <input
                                    type="email"
                                    placeholder="example@email.com"
                                    className="w-full sm:w-2/3 p-3 rounded-t sm:rounded-l sm:rounded-tr-none text-black"
                                />
                                <button className="w-full sm:w-1/3 p-3 bg-violet-600 text-white font-semibold rounded-b sm:rounded-r sm:rounded-bl-none mt-2 sm:mt-0">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </HelmetProvider>
        </div>

    );
};

export default Home;