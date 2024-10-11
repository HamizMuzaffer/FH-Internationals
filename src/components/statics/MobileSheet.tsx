
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import links from "@/data/links";
import { Link } from "react-router-dom";


export function MobileSheet() {
  return (
    <div className="pr-2">
      <Sheet>
        <SheetTrigger asChild>
          <button>
            <Menu className="text-primary" />
          </button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>
              <div className="flex justify-center items-center w-screen">
                <img src="/logo-new.png" alt="" width={100} height={100} />
              </div>
            </SheetTitle>
          
          </SheetHeader>
          <div className="mb-4">
          {links.map((link,index)=>{
            return (
            <div key={index} className="my-2">
                <span className="font-Ubunut text-md text-primary">{link.name}</span>
                <hr />
            </div>
            )
          })}
          </div>
          <div>
          <Button className="w-full my-4">TRACK</Button>
          <hr />
          <Link to="/login">
          <Button className="w-full" variant="outline">SIGN IN</Button>
          </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
