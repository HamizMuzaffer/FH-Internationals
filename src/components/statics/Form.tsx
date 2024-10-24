import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import {User, MessageSquare, MailIcon, ArrowRightIcon} from "lucide-react"
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";



export const Form = () => {
  return (
    <form className="flex flex-col gap-y-6">
      <div className="relative flex items-center">
        <Input 
          type="text" 
          id="name" 
          required={true}
          placeholder="Name"
          className="pl-4 pr-12 py-3 w-full border-2 border-gray-200 rounded-lg focus:border-primary transition-colors duration-300"
        />
        <User size={20} className="absolute right-4 text-gray-400"/>
      </div>
      <div className="relative flex items-center">
        <Input 
          type="email" 
          id="email" 
          required={true}
          placeholder="Email"
          className="pl-4 pr-12 py-3 w-full border-2 border-gray-200 rounded-lg focus:border-primary transition-colors duration-300"
        />
        <MailIcon size={20} className="absolute right-4 text-gray-400"/>
      </div>
      <div className="relative flex items-center">
        <Textarea 
          id="message" 
          placeholder="Enter Message"
          required={true}
          className="pl-4 pr-12 py-3 w-full border-2 border-gray-200 rounded-lg focus:border-primary transition-colors duration-300 min-h-[150px] resize-none"
        />
        <MessageSquare size={20} className="absolute right-4 top-4 text-gray-400"/>
      </div>
      <Button className="w-full flex items-center justify-center gap-x-2 bg-primary hover:bg-secondary py-3 rounded-lg transition-colors duration-300">
        Send
        <ArrowRightIcon size={20}/>
      </Button>
    </form>
  )
}