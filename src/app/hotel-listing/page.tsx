import SearchLocationDatePicker from "@/components/home/searchlocationdatepicker/SearchLocationDatePicker";
import HotelListingDetails from "@/components/hotellisting/HotelListingDetails";

const HotelListing = () => {
  return (
    <div>
      <div className="my-16">
        <div className="relative mt-56">
          <SearchLocationDatePicker />
        </div>
        <div className="container">
          <HotelListingDetails />
        </div>
      </div>
    </div>
  );
};
export default HotelListing;
