import HotelDetailsClient from "./HotelDetailsClient";
import { formatString } from "@/lib/utils";

interface Params {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams() {
  // Normally you would return a list of known parameters here.
  // Return an empty array if you don't have a predefined list.
  return [];
}

const HotelDetailsPage = ({ params }: Params) => {
  // extract data from the slug object of url params
  const hotelId = params.slug[0];
  const hotelName = params.slug[1];

  // call a utility method to fromat the string in proper readable format
  const formattedHotelName = formatString(hotelName);

  return (
    <HotelDetailsClient hotelId={hotelId} hotelName={formattedHotelName} />
  );
};

export default HotelDetailsPage;
