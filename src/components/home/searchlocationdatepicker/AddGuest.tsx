"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AddGuest = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            <div className="text-sm font-medium text-[#858585]">Guest</div>
            <div className="text-base font-semibold mt-3">2 Adult, 0 Child</div>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-44 relative top-4 rounded-xl z-[1200]">
          <DropdownMenuGroup>
            <div className="p-1.5">
              <div className="w-full flex items-center justify-between">
                <div>Adult</div>
                <div className="flex items-center gap-x-2">
                  <Button className="w-7 h-8">+</Button>
                  <span className="inline-block w-5 text-base font-medium text-center">
                    9
                  </span>
                  <Button className="w-7 h-8">-</Button>
                </div>
              </div>
            </div>
            <DropdownMenuSeparator />
            <div className="p-1.5">
              <div className="w-full flex items-center justify-between">
                <div>Child</div>
                <div className="flex items-center gap-x-2">
                  <Button className="w-7 h-8">+</Button>
                  <span className="inline-block w-5 text-base font-medium text-center">
                    9
                  </span>
                  <Button className="w-7 h-8">-</Button>
                </div>
              </div>
            </div>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default AddGuest;
