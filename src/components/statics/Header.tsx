import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="lg:justify-around justify-between items-center flex shadow-md">
      <div className="flex justify-center items-center">
        <img src="/logo-new.png" alt="" width={100} height={100} />
      </div>
      <div className="hidden lg:flex">
        <Nav />
      </div>
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Header;
