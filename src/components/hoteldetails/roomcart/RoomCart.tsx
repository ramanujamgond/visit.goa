import { Button } from "@/components/ui/button";
import {
  RiDeleteBinLine,
  RiInformation2Fill,
  RiShoppingCart2Fill,
} from "@remixicon/react";

const RoomCart = () => {
  return (
    <div className="fixed left-0 right-0 bottom-8 w-full max-w-[530px] mx-auto z-[6010]">
      <div className="flex items-center gap-4">
        <div className="flex items-center w-full justify-between rounded-xl bg-[#FF6535] p-6">
          <div className="flex items-center gap-4">
            <div>
              <RiShoppingCart2Fill size={40} className="text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">Total:</div>
              <div className="text-xl font-bold text-white">₹4000</div>
            </div>
          </div>

          <Button
            size={"lg"}
            className="text-base font-bold text-[#1f1f1f] bg-white hover:text-white"
          >
            Checkout
          </Button>
        </div>

        <div className="flex items-center justify-between flex-col h-[104px] rounded-xl bg-[#FF6535] px-4 py-3">
          <div className="w-[34px] h-[34px] bg-[#C7522E] flex items-center justify-center rounded-lg cursor-pointer">
            <RiInformation2Fill className="text-white" />
          </div>
          <div className="w-[34px] h-[34px] bg-[#C7522E] flex items-center justify-center rounded-lg cursor-pointer">
            <RiDeleteBinLine className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RoomCart;
