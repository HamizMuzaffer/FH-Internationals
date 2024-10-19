import { SignupDrawer } from "@/components/statics/SignupDrawer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Deliver = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleClick = () => {
      setIsDrawerOpen(true);
    };
  
    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
    };

  return (
    <div className="flex lg:flex-row flex-col min-h-[600px]">
      <div className="lg:w-1/2 w-full flex-col justify-center items-center">
        <h3 className="font-ubold px-12 text-2xl lg:text-5xl">
          Where in the world you want to deliver today?
        </h3>
        <div className="h-1 w-44 mx-12 my-2 bg-blue-800"></div>
        <p className="text-justify px-12 py-2 font-serif">
          Register now at ShopandShip.com and you鈥檒l get 30 physical shopping
          addresses worldwide. Your online shopping orders will be received at
          any of the global addresses you choose. We will then deliver to you in
          Pakistan. Shop & Ship also gives you the added convenience of being
          able to pay online.
        </p>
        <Button
          variant="outline"
          className="py-6 px-4 mx-12 my-6 text-lg font-Ubuntu font-bold"
          onClick={handleClick}>
          Create Account
        </Button>
      </div>

      <div className="flex lg:w-1/2 w-full px-12  h-full justify-center items-center">
        <img
          src="/world.svg"
          alt=""
          className="h-full w-[600px] object-contain"
        />
      </div>
      <SignupDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </div>
    );
};

export default Deliver;
