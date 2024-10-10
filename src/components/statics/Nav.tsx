
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
    <div>
      {links.map((link, index) => {
        return (
          <span key={index} className="px-2 text-xs font-Ubuntu text-primary hover:cursor-pointer">{link.name}</span>
        );
      })}
    </div>
  );
};

export default Nav;
