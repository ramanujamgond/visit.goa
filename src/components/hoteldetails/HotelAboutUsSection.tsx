import { RiMapPinLine, RiShiningFill } from "@remixicon/react";

interface HotelAboutUsSectionProps {
  hotel_name: string;
  city_name: string;
  address: string;
  hotel_description: string;
  facility: string[];
  star: number;
}

const HotelAboutUsSection: React.FC<HotelAboutUsSectionProps> = ({
  hotel_name,
  city_name,
  address,
  hotel_description,
  star,
  facility,
}) => {
  return (
    <div className="my-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[32px] font-semibold">{hotel_name}</div>
          <div className="flex items-center text-base font-normal text-[#858585]">
            <RiMapPinLine size={18} className="text-[#FF6535] me-1" />
            {city_name}, {address}
          </div>
        </div>

        <div>
          <div className="flex items-end flex-col justify-end">
            <div className="flex items-center justify-center text-base font-semibold">
              {star}
              <RiShiningFill size={16} className="ms-1" />
            </div>
            <div className="text-sm font-medium text-[#858585]">
              (85 reviews)
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm font-normal text-[#858585] my-6">
        {hotel_description}
      </div>

      <div className="text-base font-semibold">Amenities</div>
      <div className="flex items-center flex-wrap">
        {facility.map((items, index) => (
          <div
            key={index}
            className="w-fit text-xs font-normal text-[#FF6535] px-2 py-1.5 my-2 me-2 bg-[#E2E2E2] rounded-md"
          >
            {items}
          </div>
        ))}
      </div>
    </div>
  );
};
export default HotelAboutUsSection;
