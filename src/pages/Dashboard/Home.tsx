import { BranchCard } from "@/components/dashboard/Home/BranchCard";
import { PickupCard } from "@/components/dashboard/Home/PickupCard";
import { RateCard } from "@/components/dashboard/Home/RateCard";
import SwiperComponent from "@/components/dashboard/Home/Swiper";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
    <div className="min-h-[500px] justify-center items-center">
      <SwiperComponent />
      
    </div>
    <div className="flex justify-center  flex-col items-center min-w-96 h-36 z-10 my-12">
      <div className="flex flex-col md:flex-row w-full h-full">
      <Link to="/dashboard/pickup" className="w-full h-full flex justify-center items-center">
       <PickupCard/>
       </Link>
       <Link to="/dashboard/branch" className="w-full h-full flex justify-center items-center">
       <BranchCard/>
       </Link>
       <Link to="/dashboard/rate-calculator" className="w-full h-full flex justify-center items-center">
       <RateCard />
       </Link>
       </div>
      </div>
    </>

  );
};

export default Home;
