"use client";
import { useState } from "react";
import SearchLocationDatePicker from "@/components/home/searchlocationdatepicker/SearchLocationDatePicker";
import HotelListingDetails from "@/components/hotellisting/HotelListingDetails";

const HotelListing = () => {
  // loader state
  const [loading, setLoading] = useState(false);
  // error state
  const [error, setError] = useState(false);

  if (loading) {
    return <h1>Loading</h1>;
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
