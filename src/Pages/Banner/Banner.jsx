import 'animate.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div className="w-full h-screen relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              src="/src/assets/hospital_one.jpg"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 text-center z-10">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-popins animate__animated animate__fadeInDown">
                Welcome to MEDIN
              </h2>
              <p className="mt-4 text-base md:text-xl lg:text-2xl max-w-3xl animate__animated animate__fadeInUp">
                Your Premier Destination for Hospitality Real Estate with MEDIN.
                <br />
                Where Hospitality Meets Real Estate Excellence.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              src="/src/assets/hospital_two.jpg"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 text-center z-10">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-popins animate__animated animate__fadeInDown">
                Discover Exclusive Listings
              </h2>
              <p className="mt-4 text-base md:text-xl lg:text-2xl max-w-3xl animate__animated animate__fadeInUp">
                Tailored Real Estate Solutions for the Hospitality Industry.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              src="/src/assets/hospital_three.jpg"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 text-center z-10">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-popins animate__animated animate__fadeInDown">
                Invest with Confidence
              </h2>
              <p className="mt-4 text-base md:text-xl lg:text-2xl max-w-3xl animate__animated animate__fadeInUp">
                Partner with MEDIN to Elevate Your Investment Strategy.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
