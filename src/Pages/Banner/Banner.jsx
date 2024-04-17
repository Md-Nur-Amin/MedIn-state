import 'animate.css';
import hospital_one from "../../assets/hospital_one.jpg"
import hospital_two from "../../assets/hospital_two.jpg"
import hospital_three from "../../assets/hospital_three.jpg"

const Banner = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="carousel w-full h-[180px] lg:h-[650px] opacity-90 animate__animated animate__fadeInLeft">

                    <div id="slide1" className="carousel-item relative w-full">

                        <div className="relative">
                            <h2 className="absolute inset-x-0 text-3xl lg:text-5xl text-center top-12 lg:top-20 text-black font-bold  lg:font-extrabold ">Welcome MEDIN</h2>

                            <h2 className="absolute inset-x-0 text-center top-20 lg:top-40 text-stone-950 font-medium lg:text-2xl  ">Your Premier Destination for Hospitality Real Estate with MEDIN <br />Where Hospitality Meets Real Estate Excellence!"  </h2>

                            <img src={hospital_three} className="w-full" />
                        </div>
                        
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle ">❮</a>
                            <a href="#slide2" className="btn btn-circle ">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="relative">
                            <img src={hospital_two} className="w-full" />
                            <h2 className="absolute inset-x-0 text-3xl lg:text-5xl text-center top-12 lg:top-20 text-black font-bold  lg:font-extrabold ">Welcome MEDIN</h2>

                            <h2 className="absolute inset-x-0 text-center top-20 lg:top-40 text-stone-950 font-medium lg:text-2xl  ">Your Premier Destination for Hospitality Real Estate with MEDIN <br />Where Hospitality Meets Real Estate Excellence!  </h2>

                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="relative">
                            <img src={hospital_one} className="w-full" />
                            <h2 className="absolute inset-x-0 text-3xl lg:text-5xl text-center top-12 lg:top-20 text-black font-bold  lg:font-extrabold ">Welcome MEDIN</h2>

                            <h2 className="absolute inset-x-0 text-center top-20 lg:top-40 text-stone-950 font-medium lg:text-2xl  ">Your Premier Destination for Hospitality Real Estate with MEDIN <br />Where Hospitality Meets Real Estate Excellence! </h2>

                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;