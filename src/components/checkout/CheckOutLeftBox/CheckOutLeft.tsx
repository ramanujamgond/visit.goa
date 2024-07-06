import Image from "next/image";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";
import CheckOutDate from "./CheckOutDate";
import CheckOutRooms from "./CheckOutRooms";
import CheckOutPriceBreakup from "./CheckOutPriceBreakup";
import { CheckInCheckOutProps } from "@/redux/reducers/cartslice";
import { SelectedRoomTypeProps } from "@/components/hoteldetails/hotelroomtype/RoomMealPlanModal";

interface CheckoutLeftProps {
  cartData: SelectedRoomTypeProps[];
  checkInCheckOut: CheckInCheckOutProps;
}

const CheckoutLeft: React.FC<CheckoutLeftProps> = ({
  cartData,
  checkInCheckOut,
}) => {
  return (
    <div className="flex-grow flex-shrink basis-2/4">
      <CheckOutDate checkInCheckOut={checkInCheckOut} />

      <CheckOutRooms cartData={cartData} checkInCheckOut={checkInCheckOut} />

      <CheckOutPriceBreakup cartData={cartData} />
    </div>
  );
};
export default CheckoutLeft;
