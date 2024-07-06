import { RiMoonLine } from "@remixicon/react";
import { Separator } from "../../ui/separator";
import { format, differenceInDays } from "date-fns";
import { CheckInCheckOutProps } from "@/redux/reducers/cartslice";

// Define the props interface for CheckOutDate
interface CheckOutDateProps {
  checkInCheckOut: CheckInCheckOutProps;
}

const CheckOutDate: React.FC<CheckOutDateProps> = ({
  checkInCheckOut: { checkinDate, checkoutDate },
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-semibold">Check In</div>
          <div className="text-xl font-semibold">
            {checkinDate && format(checkinDate, "dd MMM, yyyy")}
          </div>
        </div>

        <div className="w-28 flex items-center justify-between text-lg font-bold px-3 py-2  text-white bg-[#FF6535] rounded-3xl">
          <RiMoonLine size={18} />{" "}
          {checkinDate &&
            checkoutDate &&
            differenceInDays(checkoutDate, checkinDate)}
        </div>

        <div>
          <div className="text-lg font-semibold">Check Out</div>
          <div className="text-xl font-semibold">
            {checkoutDate && format(checkoutDate, "dd MMM, yyyy")}
          </div>
        </div>
      </div>
      <Separator className="my-4" />
    </div>
  );
};
export default CheckOutDate;
