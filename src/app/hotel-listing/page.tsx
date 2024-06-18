"use client";
import { useEffect, useState } from "react";
import SearchLocationDatePicker from "@/components/home/searchlocationdatepicker/SearchLocationDatePicker";
import HotelListingDetails from "@/components/hotellisting/HotelListingDetails";
import Loader from "@/components/ui/loader";
import useHotelList from "@/hooks/useHotelList";
import NoSearchResultFound from "@/components/hotellisting/NoSearchResultFound";

const HotelListing = () => {
  const {
    loading,
    noMoreResult,
    place,
    checkin,
    checkout,
    adults,
    childs,
    hotelList,
    fetchHotelList,
  } = useHotelList();

  // call hotel list method on place, checkin, checkout, adults and childs change
  useEffect(() => {
    fetchHotelList();
  }, [place, checkin, checkout, adults, childs]);

  // standard loader
  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="container">
        <div className="relative pt-48">
          {/* search input date picker and guest details */}
          <SearchLocationDatePicker />
        </div>

        {hotelList?.length > 0 ? (
          // hotel listing
          <HotelListingDetails hotelList={hotelList} />
        ) : (
          place &&
          checkin &&
          checkout && (
            <NoSearchResultFound
              place={place}
              checkin={checkin}
              checkout={checkout}
            />
          )
        )}
      </div>
    </div>
  );
};
export default HotelListing;
