"use client";
import { useState } from "react";
import SearchLocationDatePicker from "@/components/home/searchlocationdatepicker/SearchLocationDatePicker";
import HotelListingDetails from "@/components/hotellisting/HotelListingDetails";
import Loader from "@/components/ui/loader";

const HotelListing = () => {
  // loading state
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="container">
        <div className="relative pt-48">
          <SearchLocationDatePicker />
        </div>
        <HotelListingDetails />
      </div>
    </div>
  );
};
export default HotelListing;
