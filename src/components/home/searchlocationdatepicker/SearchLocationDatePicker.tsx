"use client";

import { Button } from "@/components/ui/button";
import HrLineSearch from "@/components/ui/hrlinesearch";

import SearchLocationInput from "./SearchLocationInput";
// date picker
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import DateRangePicker from "./DateRangePicker";
import AddGuest from "./AddGuest";
import { useState } from "react";

const SearchLocationDatePicker = () => {
  // state to capture the search input value
  const [searchValue, setSearchValue] = useState<string>("");

  // State to get the current date for checkin and checkout date
  const [date, setDate] = useState<DateRange>({
    from: new Date(),
    to: addDays(new Date(), 1),
  });

  // states to hold the number of adult and child
  const [adult, setAdult] = useState<number>(0);
  const [child, setChild] = useState<number>(0);

  return (
    <div className="flex items-center justify-center">
      <div className="absolute bottom-[-8%] w-full p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-[1000]">
        <div className="flex items-center">
          <div className="flex-grow flex-shrink basis-0">
            <div className="text-sm font-medium text-[#858585]">Where ?</div>
            <SearchLocationInput
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
          <HrLineSearch />
          <div className="flex-grow-2 flex-shrink basis-96">
            <DateRangePicker date={date} setDate={setDate} />
          </div>

          <HrLineSearch />
          <div className="flex-grow-2 flex-shrink basis-32">
            <div className="w-32 cursor-pointer">
              <AddGuest
                adult={adult}
                setAdult={setAdult}
                child={child}
                setChild={setChild}
              />
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
