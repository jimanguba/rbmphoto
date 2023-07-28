import { Link } from "react-router-dom";
import HomeImg from "../img/home/home.png";

const Home = () => {
  return (
    <section className="section pt-32">
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex justify-center max-h-96 lg:max-h-max lg:w-1/2">
            <div className="relative lg:-left-40 overflow-hidden">
              <img src={HomeImg} alt="" />
            </div>
          </div>
          {/* text */}
          <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-1/2 lg:pl-16">
            <h1 className="h1 lg:text-8xl">
              RBM <br /> Photo Booth
            </h1>
            <p className="text-[20px] lg:text-[26px] font-primary mb-4 lg:mb-12">
              Winnipeg, MB
            </p>
            <p className="text-[16px] lg:text-[20px] font-primary mb-4 lg:mb-12">
              Elevate Your Event with RBM Photography!
            </p>
            <p className="text-[16px] lg:text-[20px] font-primary mb-4 lg:mb-12">
              Discover affordable photo booth rentals in Winnipeg, perfect for weddings and events throughout Manitoba. Our cutting-edge technology, fun props, and stylish backdrops promise an unforgettable experience.
            </p>
            <Link to={"/contact"} className="btn mb-[30px]">
              Book now and capture the magic!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;