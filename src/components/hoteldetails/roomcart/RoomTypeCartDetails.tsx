import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { RiDeleteBinLine, RiMoonLine } from "@remixicon/react";
import Image from "next/image";

interface RoomTypeCartDetailsProps {
  isOpen: boolean;
  toggleModal: (value: boolean) => void;
}

const RoomTypeCartDetails: React.FC<RoomTypeCartDetailsProps> = ({
  isOpen,
  toggleModal,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={toggleModal}>
      <div className="relative w-full h-64 rounded-xl cursor-pointer">
        <DialogTrigger asChild></DialogTrigger>
      </div>

      <DialogContent className="w-full max-w-[480px] z-[2000]">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold">Check In</div>
            <div className="text-xl font-semibold">24 Oct, 2024</div>
          </div>

          <div className="w-28 flex items-center justify-between text-lg font-bold px-3 py-2  text-white bg-[#FF6535] rounded-3xl">
            <RiMoonLine size={18} />2
          </div>

          <div>
            <div className="text-lg font-semibold">Check Out</div>
            <div className="text-xl font-semibold">26 Oct, 2024</div>
          </div>
        </div>

        <Separator />

        <div className="text-lg font-semibold">Price Breakup for 2 nights</div>

        <div className="max-h-[450px] overflow-y-scroll  [scrollbar-width:thin]">
          <div className="bg-[#F4F4F4] p-4 rounded-lg mb-4">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-24 h-24 relative rounded-sm">
                <Image
                  src={"/lastminutesale_3.png"}
                  alt="Room Type Images"
                  priority
                  fill
                  className="object-cover rounded-xl"
                  sizes="auto"
                />
              </div>

              <div>
                <div className="text-base font-semibold mb-2">
                  Deluxe Room (EP) X 2 room{" "}
                </div>
                <div className="text-sm font-semibold">5 Adults, 2 Child</div>
              </div>

              <div className="flex items-end justify-end flex-col ml-auto">
                <div className="text-base font-semibold mb-2">₹2200</div>
                <div className="w-[26px] h-[26px] p-1 rounded-md bg-[#934E4E] flex items-center justify-center cursor-pointer">
                  <RiDeleteBinLine size={18} className="text-white" />
                </div>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex items-center justify-between">
              <div className="text-base font-bold">Room 1</div>
              <div className="text-base font-semibold">3 Adult, 1 Child</div>
            </div>

            <div className="flex items-center justify-between text-[#595959]">
              <div className="text-sm font-semibold my-1">Base Price</div>
              <div className="text-sm font-semibold">₹1000</div>
            </div>

            <div className="flex items-center justify-between text-[#595959]">
              <div className="text-sm font-semibold">Extra Adult (1)</div>
              <div className="text-sm font-semibold">₹200</div>
            </div>

            <Separator className="my-4" />

            <div className="flex items-center justify-between">
              <div className="text-base font-bold">Room 1</div>
              <div className="text-base font-semibold">3 Adult, 1 Child</div>
            </div>

            <div className="flex items-center justify-between text-[#595959]">
              <div className="text-sm font-semibold my-1">Base Price</div>
              <div className="text-sm font-semibold">₹1000</div>
            </div>
          </div>

          <div className="bg-[#F4F4F4] p-4 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-24 h-24 relative rounded-sm">
                <Image
                  src={"/lastminutesale_3.png"}
                  alt="Room Type Images"
                  priority
                  fill
                  className="object-cover rounded-xl"
                  sizes="auto"
                />
              </div>

              <div>
                <div className="text-base font-semibold mb-2">
                  Deluxe Room (EP) X 2 room{" "}
                </div>
                <div className="text-sm font-semibold">5 Adults, 2 Child</div>
              </div>

              <div className="flex items-end justify-end flex-col ml-auto">
                <div className="text-base font-semibold mb-2">₹2200</div>
                <div className="w-[26px] h-[26px] p-1 rounded-md bg-[#934E4E] flex items-center justify-center cursor-pointer">
                  <RiDeleteBinLine size={18} className="text-white" />
                </div>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex items-center justify-between">
              <div className="text-base font-bold">Room 1</div>
              <div className="text-base font-semibold">3 Adult, 1 Child</div>
            </div>

            <div className="flex items-center justify-between text-[#595959]">
              <div className="text-sm font-semibold my-1">Base Price</div>
              <div className="text-sm font-semibold">₹1000</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default RoomTypeCartDetails;
