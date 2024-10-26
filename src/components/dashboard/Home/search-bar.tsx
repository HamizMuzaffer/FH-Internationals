import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { Search} from "lucide-react"

export function SearchBarComponent() {

  return (
    <div className="flex flex-col w-full max-w-sm items-center space-x-2 absolute z-10 my-4">
      <p className="py-2 font-Ubuntu text-white font-bold text-2xl text-border">Enter your Tracking Number</p>
      <div className="flex py-2">
      <div className="w-full relative border-black border-solid">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Search..." className="pl-8 w-72 py-2 bg-white text-gray-400 rounded-none" />
      </div>
      <Button className="rounded-none py-2 font-Ubuntu">Search</Button>
      </div>
    </div>
  )
}