"use client";

import { useEffect, useState } from "react";
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

// combox for city search input
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

// date picker
import { addDays, differenceInDays, format } from "date-fns";
import { DateRange, SelectRangeEventHandler } from "react-day-picker";
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { bharatStay } from "@/app/api/baseURL";
import { apiEndpoints } from "@/app/api/endPoints";
import { RiCheckFill } from "@remixicon/react";
import { Input } from "@/components/ui/input";

const SearchLocationDatePicker = () => {
  // State to get the current date for checin date and checkout date
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 1),
  });

  // state to handle the

  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  // handle the issue for from date not changing on single click
  const handleSelect: SelectRangeEventHandler = (nextRange, selectedDay) => {
    setDate((range) => {
      if (range?.from && range?.to) return { from: selectedDay };
      return nextRange as DateRange;
    });
  };

  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [citySearchResult, setCitySearchResult] = useState<any>([]);
  const [hotelSearchResult, setHotelSearchResult] = useState<any>([]);

  // method to fetch the city name
  const fetchCityList = async () => {
    try {
      const cityList = await bharatStay.get(
        `${apiEndpoints.get.get_cities}?q=${searchValue}`
      );
      if (cityList.data.results.length > 0) {
        setCitySearchResult(cityList.data.results[0].hits);
        setHotelSearchResult(cityList.data.results[1].hits);
      }
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch the city list!");
    }
  };

  // useEffect to call the api whenever the search input is triggered
  useEffect(() => {
    fetchCityList();
  }, [searchValue]);

  const handleSearch = (searchInput: string) => {
    setSearchValue(searchInput);
    const matchedCity = citySearchResult.find(
      (cityName: any) =>
        cityName.city_name.toLowerCase() === searchValue.toLowerCase()
    );

    console.log("matchedCity", matchedCity);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="absolute bottom-[-8%] w-full p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-[1000]">
        <div className="flex items-center">
          <div className="flex-grow flex-shrink basis-0">
            <div className="text-sm font-medium text-[#858585]">Where ?</div>
            <div className="mt-3 z-[1300] w-full relative">
              <Input
                type="text"
                value={searchValue}
                className="focus-visible:ring-0"
                placeholder="Search for a City or Hotel"
                onChange={(e) => handleSearch(e.target.value)}
              />
              <Select>
                <SelectTrigger className="w-full border-0 border-b rounded-none focus:ring-0 shadow-none">
                  <SelectValue placeholder="Search for a City or Hotel" />
                </SelectTrigger>
                <SelectContent className="z-[1300]">
                  <SelectGroup>
                    <SelectLabel>Search City, Hotel</SelectLabel>
                    {citySearchResult.length > 0
                      ? citySearchResult.map((cityName: any, index: any) => (
                          <span key={index}>
                            <SelectItem value={cityName.city_name}>
                              {cityName.city_name}
                            </SelectItem>
                          </span>
                        ))
                      : null}
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
                    {date?.from && date.to
                      ? differenceInDays(date.to, date?.from)
                      : 0}
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
                  fromDate={new Date()}
                  selected={date}
                  onSelect={handleSelect}
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
