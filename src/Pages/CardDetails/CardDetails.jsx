import { useParams } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const CardDetails = () => {

    const {id} = useParams();
    
    return (
        <div>
            <Navbar></Navbar>
            <h2>Vokkor chokkor</h2>
            <p> {id} </p>
            <Footer></Footer>
        </div>
    );
};

export default CardDetails;