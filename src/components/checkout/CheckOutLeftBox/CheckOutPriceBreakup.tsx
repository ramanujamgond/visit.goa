import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Separator } from "../../ui/separator";
import { SelectedRoomTypeProps } from "@/components/hoteldetails/hotelroomtype/RoomMealPlanModal";

interface CheckOutPriceBreakupProps {
  cartData: SelectedRoomTypeProps[];
}
const CheckOutPriceBreakup: React.FC<CheckOutPriceBreakupProps> = ({
  cartData,
}) => {
  return (
    <div>
      {/* disable the pay using gems section for later development */}
      {/* <div className="bg-[#FFFFFF] p-4 rounded-xl shadow-lg mb-4">

        <div className="text-base font-normal mb-1">Pay using Gems</div>
        <div className="flex items-center text-sm mb-3">
          Usable Balance:{" "}
          <span className="flex text-sm font-normal text-[#FFA800] ms-2">
            <div className="w-4 h-5 relative me-1">
              <Image
                src="/pripCoins.png"
                alt="Gems Icon"
                priority
                fill
                className="object-cover rounded-xl"
                sizes="auto"
              />
            </div>
            245
          </span>
        </div> 

        // disable the private coupon section
        <div className="flex items-center gap-4">
          <Input type="text" className="h-10 bg-white focus-visible:ring-0" />
          <Button className="w-28 h-10 bg-[#685CF1]">Apply</Button>
        </div>
      </div> */}

      <div className="bg-[#FFFFFF] p-4 rounded-xl shadow-lg mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-base font-normal">Room Total</div>
          <div className="text-base font-semibold">
            ₹&nbsp;
            {cartData.reduce((acc, cartItem) => {
              return cartItem.occupancy.reduce((acc, occupancyItem) => {
                return occupancyItem.rates.reduce((acc, rate) => {
                  return (acc += rate.total_price_excluding_tax);
                }, acc);
              }, acc);
            }, 0)}
          </div>
        </div>

        {/* disable the gems coin block */}

        {/* <div className="flex items-center justify-between mb-3">
          <div className="text-base font-normal">Gems</div>
          <div className="text-base font-medium text-[#65C411]">-₹20</div>
        </div> */}

        {/* disable the coupon discount section */}
        {/* <div className="flex items-center justify-between mb-3">
          <div className="text-base font-normal">Coupon Discount</div>
          <div className="text-base font-medium text-[#65C411]">-₹120</div>
        </div> */}

        <div className="flex items-center justify-between">
          <div className="text-base font-normal">GST</div>
          <div className="text-base font-medium">
            ₹&nbsp;
            {cartData.reduce((acc, cartItem) => {
              return cartItem.occupancy.reduce((acc, occupancyItem) => {
                return occupancyItem.rates.reduce((acc, rate) => {
                  return (acc += rate.tax_amount);
                }, acc);
              }, acc);
            }, 0)}
          </div>
        </div>

        <Separator className="my-3" />

        <div className="flex items-center justify-between">
          <div className="text-base font-normal">Payable Amount</div>
          <div className="text-base font-medium">
            ₹&nbsp;
            {cartData.reduce((acc, cartItem) => {
              return cartItem.occupancy.reduce((acc, occupancyItem) => {
                return occupancyItem.rates.reduce((acc, rate) => {
                  return (acc += rate.total_price_including_tax);
                }, acc);
              }, acc);
            }, 0)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckOutPriceBreakup;
