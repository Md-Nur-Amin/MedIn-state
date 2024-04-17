import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Card from "./Card/Card";



const Home = () => {
    const cards = useLoaderData();
    console.log(cards);


    return (
        <div >
            <Navbar></Navbar>
            <Banner></Banner>
            
            {/* Card section */}


            <div className="grid grid-cols-3 ml-10 my-10">
            {
                cards.map(card => <Card
                    key={card.id}
                    cards={card} >
                </Card>)
            }
            </div>




            <Footer></Footer>
        </div>
    );
};

export default Home;