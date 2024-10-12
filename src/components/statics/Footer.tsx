import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white shadow-inner">
        <hr/>
      <div className="md:w-2/3 w-full px-4 text-secondary flex flex-col">
        <div className="w-full text-7xl font-bold">
          <h1 className="w-full md:w-2/3 font-Ubuntu font-black">How can we help you. get in touch</h1>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <p className="w-full md:w-2/3 text-secondary font-Ubuntu font-thin">
            Find us through all social media handles. Follow us on our socials to be updated about latest developments.
          </p>
          <div className="w-44 pt-6 md:pt-0">
            <Link to='/contact'>
            <Button className="bg-secondary font-Ubuntu py-6 px-6 rounded-md">Contact Us</Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex mt-24 mb-12 flex-row justify-between items-center">
            <div className="">
              <img src="/logo-new.png" alt="" width={100} height={100} />
            </div>
            <a className="hidden md:block cursor-pointer text-secondary font-Ubuntu capitalize">
              About
            </a>
            <a className="hidden md:block cursor-pointer text-secondary font-Ubuntu capitalize">
              Services
            </a>
            <a className="hidden md:block cursor-pointer text-secondary font-Ubuntu capitalize">
              Why us
            </a>
            <a className="hidden md:block cursor-pointer text-secondary font-Ubuntu capitalize">
              Contact
            </a>
            <div className="flex flex-row space-x-8 items-center justify-between text-white">
              <a>
                <RiInstagramFill />
              </a>
              <a>
                <RiFacebookBoxFill />
              </a>
              <a>
                <RiYoutubeFill />
              </a>
            </div>
          </div>
          <hr className="border-gray-600" />
          <p className="w-full text-center my-12 text-gray-600">
            Copyright © 2024 F&H Internationals
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
