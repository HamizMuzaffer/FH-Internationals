import { Button } from "../../ui/button";
import AOS from "aos";

AOS.init();
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // once: false allows animation on refresh
  }, []);

  return (
    <div className="lg:flex justify-center items-center h-[600px]">
      <div
        className=" w-full lg:w-1/2 px-12 mt-8 lg:mt-0"
        data-aos="fade-right"
      >
        <h2 className="font-Ubuntu text-2xl">
          Serving thousands of customers across Pakistan
        </h2>
        <div className="w-32 h-1 bg-primary mb-4"></div>
        <h2 className="font-Ubuntu font-black text-6xl mb-8">
          Moving Millions of parcels every month
        </h2>
        <div>
          <Button variant="outline" className="py-6 px-4 text-lg font-Ubuntu">
            Create Account
          </Button>
        </div>
      </div>

      <div
        className="w-full lg:w-1/2  flex justify-center items-center mt-8 lg:mt-0"
        data-aos="fade-left"
      >
        <img src="/hero.svg" alt="" width={500} height={500} />
      </div>
    </div>
  );
};

export default Hero;
