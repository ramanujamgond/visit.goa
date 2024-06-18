"use client";
import HotelDetailSlider from "@/components/hoteldetails/HotelDetailSlider";
import Loader from "@/components/ui/loader";
import useHotelDetails from "@/hooks/useHotelDetails";
import { formatString } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Params {
  slug: string;
}

interface HotelDetailsProps {
  params: Params;
}

const HotelDetailsPage: React.FC<HotelDetailsProps> = ({ params }) => {
  // next 14 router
  const router = useRouter();

  // get the url params
  const urlParms = params;

  // extract data from the slug object of url params
  const hotelId = urlParms.slug[0];
  const hotelName = urlParms.slug[1];

  // call a utility method to fromat the string in proper readable format
  const formatedHotelName = formatString(hotelName);

  // go back[go back in the browser stack]
  const navigateBack = () => {
    router.back();
  };

  const { loading, hotelDetails, fetchHotelDetails } = useHotelDetails({
    hotelId,
  });

  useEffect(() => {
    fetchHotelDetails();
  }, []);

  // standard loader
  if (loading) {
    return <Loader />;
  }

  console.log("hotelDetails", hotelDetails);

  return (
    <div className="my-12 h-[90vh]">
      <div className="pt-2">
        <div className="container">
          <div className="flex items-center justify-between mt-14">
            <div className="text-base font-normal text-[#656565]">
              <span
                className="hover:text-[#FF6535] cursor-pointer"
                onClick={navigateBack}
              >
                Book Now
              </span>{" "}
              {"> "}
              <span className="font-bold text-[#141414]">
                {formatedHotelName}
              </span>
            </div>
            <div></div>
          </div>
          <div className="mt-6 mb-5">
            {hotelDetails && (
              <HotelDetailSlider
                exterior_images={hotelDetails?.exterior_images}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsPage;
