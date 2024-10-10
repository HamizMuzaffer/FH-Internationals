import { Button } from "../ui/button";

const links = [
  { name: 'SERVICES' },
  {name: 'COD' },
  { name: 'CASE/STUDIES' },
  {  name : 'MEDIA PROCUREMENT' },
  {  name : 'CORPORATE' },
  {  name : 'FRANCHISE' },
  {  name : 'CAREERS' },
  {  name : 'CONTACT US' },
];

const Nav = () => {
  return (
    <div className="flex justify-center items-center">
      {links.map((link, index) => {
        return (
          <span key={index} className="px-2 text-xs font-Ubuntu text-primary hover:cursor-pointer">{link.name}</span>
        );
      })}
      <div className="ml-6 ">
        <Button className="px-6 mx-2 ">TRACK</Button>
        <Button className="px-6 mx-2 "  variant={"outline"}>SIGN IN</Button>
        </div>
    </div>
  );
};

export default Nav;
