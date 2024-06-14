import { RiMap2Fill, RiMapLine, RiMapPinFill } from "@remixicon/react";
import Image from "next/image";

const PopularHotels = () => {
  const hotel_list = [
    {
      id: 1,
      hotel_name: "Hotel Puspanjali",
      hotel_image: "/hotel_image.png",
      hotel_address: "123 Main St, Downtown, New Delhi, 110001",
    },
    {
      id: 2,
      hotel_name: "The Royal Palace",
      hotel_image: "/hotel_image.png",
      hotel_address: "456 Queen Rd, Central Area, Mumbai, 400001",
    },
    {
      id: 3,
      hotel_name: "Grand Residency",
      hotel_image: "/hotel_image.png",
      hotel_address: "789 King St, North Block, Kolkata, 700001",
    },
    {
      id: 4,
      hotel_name: "Luxury Suites",
      hotel_image: "/hotel_image.png",
      hotel_address: "101 High St, East End, Bangalore, 560001",
    },
    {
      id: 5,
      hotel_name: "Comfort Inn",
      hotel_image: "/hotel_image.png",
      hotel_address: "202 Elm St, South Side, Chennai, 600001",
    },
    {
      id: 6,
      hotel_name: "Seaside Retreat",
      hotel_image: "/hotel_image.png",
      hotel_address: "303 Ocean Dr, Beach Front, Goa, 403001",
    },
  ];

  return (
    <div className="container">
      <div className="py-8">
        <div className="text-xl font-bold mb-6">Popular Hotels</div>
        <div className="grid grid-cols-[repeat(3,_1fr)] gap-4">
          {hotel_list.map((hotels) => (
            <div className="w-full rounded-xl bg-white" key={hotels.id}>
              <div className="w-full h-48 relative rounded-tl-xl rounded-tr-xl">
                <Image
                  src={hotels.hotel_image}
                  alt="Hotel Image"
                  fill
                  className="object-cover rounded-tl-xl rounded-tr-xl"
                  sizes="auto"
                  loading="lazy"
                />
              </div>
              <div className="p-2">
                <div className="text-xl font-bold">{hotels.hotel_name}</div>
                <div className="flex items-center justify-start text-xs text-[#858585] py-2">
                  <RiMapPinFill size={16} className="me-1" />{" "}
                  {hotels.hotel_address}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PopularHotels;
