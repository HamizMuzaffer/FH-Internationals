import { Button } from "../ui/button"
import Nav from "./Nav"

const Header = () => {
  return (
    <div className="flex justify-around items-center">
      <div className="flex justify-center items-center">
      <img src="/logo-new.png" alt="" width={100} height={100} />
      </div>
      <div className="flex">
        <Nav/>
        <div className="ml-6">
        <Button className="px-6 mx-2 ">Track</Button>
        <Button className="px-6 mx-2 "  variant={"outline"}>SIGN IN</Button>
        </div>
      </div>
    
        
      
    </div>
  )
}

export default Header