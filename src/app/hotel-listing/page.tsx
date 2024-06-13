import SearchLocationDatePicker from "@/components/home/searchlocationdatepicker/SearchLocationDatePicker";
import HotelListingDetails from "@/components/hotellisting/HotelListingDetails";

const HotelListing = () => {
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
