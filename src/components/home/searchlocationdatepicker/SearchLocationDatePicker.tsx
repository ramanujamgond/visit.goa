"use client";

import { Button } from "@/components/ui/button";
import HrLineSearch from "@/components/ui/hrlinesearch";

import SearchLocationInput from "./SearchLocationInput";
// date picker
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import DateRangePicker from "./DateRangePicker";
import AddGuest from "./AddGuest";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useCityHotelList from "@/hooks/useCityHotelList";
import Loader from "@/components/ui/loader";
import { showCart, deleteCartData } from "@/redux/reducers/cartslice";
import { useDispatch } from "react-redux";

interface SearchValueProps {
  value: string;
  hotelId?: number;
}

const SearchLocationDatePicker = () => {
  // allows functional components to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // nextjs 14 routing method
  const router = useRouter();
  const searchParams = useSearchParams();

  // state to capture the search input value
  const [searchValue, setSearchValue] = useState<SearchValueProps>({
    value: "",
    hotelId: 0,
  });

  // State to get the current date for checkin and checkout date
  const [date, setDate] = useState<DateRange>({
    from: new Date(),
    to: addDays(new Date(), 1),
  });

  // states to hold the number of adult and child
  const [adult, setAdult] = useState<number>(2);
  const [child, setChild] = useState<number>(0);

  const { loading } = useCityHotelList();

  // method to navigate to the hotel-listing page and passing the searchValue, checkin and chekchout and number of guest data
  const handleSearchCityHotels = () => {
    // clear the cart data and hide the cart
    dispatch(deleteCartData());
    dispatch(showCart(false));

    const checkInDate = date.from ? format(date?.from, "yyyy-MM-dd") : "";
    const checkOutDate = date.to ? format(date?.to, "yyyy-MM-dd") : "";

    const params = new URLSearchParams(searchParams);
    if (
      (searchValue.value || searchValue.hotelId) &&
      checkInDate &&
      checkOutDate
    ) {
      // set url params
      params.set("place", searchValue.value);
      params.set("checkin", `${checkInDate}`);
      params.set("checkout", `${checkOutDate}`);
      params.set("adults", `${adult}`);
      params.set("childs", `${child}`);
    }

    // Construct the pathname with query parameters if the search value consist a city name
    if (searchValue.value) {
      router.push(`/hotel-listing/?${params.toString()}`);
    }

    // Format the hotel name to be URL-friendly
    const formattedHotelName = searchValue.value
      .toLowerCase()
      .replace(/\s+/g, "-");

    // construct the pathname with the query parameters if the search value consist a hotel id
    if (searchValue.hotelId) {
      router.push(
        `/hotel-details/${searchValue.hotelId}/${formattedHotelName}?checkin=${checkInDate}&checkout=${checkOutDate}&adults=${adult}&childs=${child}`
      );
    }
  };

  // standard loader
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex items-center justify-center">
      <div className="absolute bottom-9 w-full p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-[1000]">
        <div className="flex items-center">
          <div className="flex-grow flex-shrink basis-0">
            <div className="text-sm text-left font-medium text-[#858585]">
              Where ?
            </div>
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
            <Button
              size="lg"
              className="w-full"
              onClick={handleSearchCityHotels}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchLocationDatePicker;
