import { format } from "date-fns";
import Image from "next/image";

interface NoSearchResultFoundProps {
  place: string;
  checkin: string;
  checkout: string;
}

const NoSearchResultFound: React.FC<NoSearchResultFoundProps> = ({
  place,
  checkin,
  checkout,
}) => {
  return (
    <div className="my-12 h-[90vh]">
      <div className="pt-2">
        <div className="p-3 bg-white rounded-xl mt-6 mb-5 [box-shadow:0px_2px_23.2px_0px_rgba(0,_0,_0,_0.09)]">
          <div className="flex items-center justify-center flex-col w-full h-auto ">
            <div className="relative w-[225px] h-[220px] my-3">
              <Image
                src="/no_hotel_found.png"
                alt="NO image found"
                fill
                className="object-cover rounded-xl"
                sizes="auto"
                loading="lazy"
              />
            </div>
            <div className="text-4xl font-bold text-center text-[#685CF1]">
              No Hotels Found !
            </div>
            <div className="text-sm pt-2 mb-8">
              We couldn't find any hotels you are searching in{" "}
              <span className="text-sm font-medium text-[#685CF1]">
                {place}
              </span>{" "}
              for{" "}
              <span className="text-sm font-medium text-[#685CF1]">
                {format(checkin, "dd MMM yyyy")} to{" "}
              </span>
              <span className="text-sm font-medium text-[#685CF1]">
                {format(checkout, "dd MMM yyyy")}
              </span>
              . Try searching with different dates or city name.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoSearchResultFound;
