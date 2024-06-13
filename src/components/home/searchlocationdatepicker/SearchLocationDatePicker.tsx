"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import HrLineSearch from "@/components/ui/hrlinesearch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// date picker
import { addDays, differenceInDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SearchLocationDatePicker = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 1),
  });

  return (
    <div className="flex items-center justify-center">
      <div className="absolute bottom-[-8%] w-full p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-[1000]">
        <div className="flex items-center">
          <div className="flex-grow flex-shrink basis-0">
            <div className="text-sm font-medium text-[#858585]">Where ?</div>
            <div className="mt-3 z-[1300] w-full">
              <Select>
                <SelectTrigger className="w-full border-0 border-b rounded-none focus:ring-0 shadow-none">
                  <SelectValue placeholder="Search for a City or Hotel" />
                </SelectTrigger>
                <SelectContent className="z-[1300]">
                  <SelectGroup>
                    {/* <SelectLabel>Search City, Hotel</SelectLabel> */}
                    <SelectItem value="1">Bhubaneswar</SelectItem>
                    <SelectItem value="2">Delhi</SelectItem>
                    <SelectItem value="3">Bombay</SelectItem>
                    <SelectItem value="4">Kolkata</SelectItem>
                    <SelectItem value="5">Bangalore</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <HrLineSearch />
          <div className="flex-grow-2 flex-shrink basis-96">
            <Popover>
              <PopoverTrigger asChild>
                <div className="flex items-center justify-between w-full cursor-pointer">
                  <div className="w-24">
                    <div className="text-sm font-medium text-[#858585]">
                      Chcek-in
                    </div>
                    <div className="text-base font-semibold mt-3">
                      {date?.from ? (
                        format(date.from, "dd LLL, yy")
                      ) : (
                        <span className="text-sm font-medium">Start Date</span>
                      )}
                    </div>
                  </div>
                  <div className="text-sm text-center font-semibold p-2 border-2 border-[#E5E5E5] border-solid rounded-3xl w-24">
                    {date?.from &&
                      date.to &&
                      differenceInDays(date.to, date?.from)}
                  </div>
                  <div className="w-24">
                    <div className="text-sm font-medium text-[#858585]">
                      Check-out
                    </div>
                    <div className="text-base font-semibold mt-3">
                      {date?.from && date.to ? (
                        format(date.to, "dd LLL, yy")
                      ) : (
                        <span className="text-sm font-medium">End Date</span>
                      )}
                    </div>
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto p-0 z-[1200] relative top-4 rounded-xl"
                align="center"
              >
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                  min={2}
                  classNames={{
                    cell: cn("p-1.5"),
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          <HrLineSearch />
          <div className="flex-grow-2 flex-shrink basis-32">
            <div className="w-32 cursor-pointer">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div>
                    <div className="text-sm font-medium text-[#858585]">
                      Guest
                    </div>
                    <div className="text-base font-semibold mt-3">
                      2 Adult, 0 Child
                    </div>
                  </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-44 relative top-4 rounded-xl z-[1200]">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
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
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
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
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <HrLineSearch />
          <div className="flex-grow flex-shrink basis-0">
            <Button size="lg" className="w-full">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchLocationDatePicker;
