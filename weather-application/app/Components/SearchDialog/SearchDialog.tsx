"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import React from "react"
import { Button } from "@/components/ui/button"
import { DialogTrigger } from "@/components/ui/dialog"
import { commandIcon } from "@/app/utils/Icons";
import { Command } from "lucide-react";
import { CommandInput } from "@/components/ui/command";

function SearchDialog() {
    return(
         <div className="search-btn">
            <Dialog>
            <DialogTrigger asChild>
            <Button variant="outline"
            className="border inline-flex items-center justify-center text-sm front-medium hover:dark:bg-[#131313] hover:bg-slate-100 ease-in-out duration-200"
            ><p className="text-sm text-muted-foreground">Search Here_____</p>
            <div className="command dark:bg-[#262626] bg-slate-200 py-[2px] pl-[5px] pr-[7px] rounded-sm ml-[10rem] flex items-centre gap-2">
           {commandIcon}
           <span className="text-[9px]">F</span>
           </div>
            </Button>
              </DialogTrigger>
              <DialogContent className="p-0">
                <Command className=" rounded-lg border shadow-md">
                    <CommandInput placeholder="Type a command or search___"/>
                </Command>
              </DialogContent>
            </Dialog>
         </div>
    )
}

export default SearchDialog