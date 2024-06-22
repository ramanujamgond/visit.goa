import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RiDeleteBinLine } from "@remixicon/react";
import { Separator } from "@/components/ui/separator";

interface RoomMealPlanModalProps {
  isOpen: boolean;
  toggleDialog: (value: boolean) => void;
}
const RoomMealPlanModal: React.FC<RoomMealPlanModalProps> = ({
  isOpen,
  toggleDialog,
}) => {
  // states to hold the number of adult and child
  const [adult, setAdult] = useState<number>(2);
  const [child, setChild] = useState<number>(0);

  // method to handle add adult
  const addAdultIncrement = () => {
    setAdult(adult + 1);
  };

  // method to handle decrement adult
  const addAdultDecrement = () => {
    if (adult > 0) {
      setAdult(adult - 1);
    }
  };

  // method to handle add child
  const addChildIncrement = () => {
    setChild(child + 1);
  };

  // method to handle decrement child
  const addChildDecrement = () => {
    if (child > 0) {
      setChild(child - 1);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={toggleDialog}>
      <div className="relative w-full h-64 rounded-xl cursor-pointer">
        <DialogTrigger asChild></DialogTrigger>
      </div>
      <DialogContent className="w-full max-w-[480px] z-[2000]">
        <div className="text-xl font-semibold">Delux Room</div>

        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-[#595959]">
            No. of Rooms
          </div>
          <div className="flex items-center gap-x-2">
            <Button
              className="w-7 h-8 bg-[#FF6535]"
              onClick={addChildDecrement}
            >
              -
            </Button>
            <span className="inline-block w-5 text-base font-medium text-center">
              {child}
            </span>
            <Button
              className="w-7 h-8 bg-[#FF6535]"
              onClick={addChildIncrement}
            >
              +
            </Button>
          </div>
        </div>

        <div className="text-sm font-medium">Chosse Meal Plan</div>
        <div>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Room with brekfast (₹1200)" />
            </SelectTrigger>
            <SelectContent className="z-[2001]">
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center">
          <div className="w-2/6">
            <div className="text-xl font-semibold mb-3">Room 1</div>
            <div className="w-[32px] h-[32px] flex items-center justify-start cursor-pointer">
              <RiDeleteBinLine className="text-[#FF6535] font-light" />
            </div>
          </div>

          <div className="flex items-center justify-between w-full">
            <div>
              <div className="text-base font-medium mb-3">Adult</div>
              <div className="flex items-center gap-x-2">
                <Button
                  className="w-7 h-8 bg-[#FF6535]"
                  onClick={addChildDecrement}
                >
                  -
                </Button>
                <span className="inline-block w-5 text-base font-medium text-center">
                  {child}
                </span>
                <Button
                  className="w-7 h-8 bg-[#FF6535]"
                  onClick={addChildIncrement}
                >
                  +
                </Button>
              </div>
            </div>

            <div>
              <div className="text-base font-medium mb-3">Child</div>
              <div className="flex items-center gap-x-2">
                <Button
                  className="w-7 h-8 bg-[#FF6535]"
                  onClick={addChildDecrement}
                >
                  -
                </Button>
                <span className="inline-block w-5 text-base font-medium text-center">
                  {child}
                </span>
                <Button
                  className="w-7 h-8 bg-[#FF6535]"
                  onClick={addChildIncrement}
                >
                  +
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex items-center">
          <div className="w-2/6">
            <div className="text-xl font-semibold mb-3">Room 2</div>
            <div className="w-[32px] h-[32px] flex items-center justify-start cursor-pointer">
              <RiDeleteBinLine className="text-[#FF6535] font-light" />
            </div>
          </div>

          <div className="flex items-center justify-between w-full">
            <div>
              <div className="text-base font-medium mb-3">Adult</div>
              <div className="flex items-center gap-x-2">
                <Button
                  className="w-7 h-8 bg-[#FF6535]"
                  onClick={addChildDecrement}
                >
                  -
                </Button>
                <span className="inline-block w-5 text-base font-medium text-center">
                  {child}
                </span>
                <Button
                  className="w-7 h-8 bg-[#FF6535]"
                  onClick={addChildIncrement}
                >
                  +
                </Button>
              </div>
            </div>

            <div>
              <div className="text-base font-medium mb-3">Child</div>
              <div className="flex items-center gap-x-2">
                <Button
                  className="w-7 h-8 bg-[#FF6535]"
                  onClick={addChildDecrement}
                >
                  -
                </Button>
                <span className="inline-block w-5 text-base font-medium text-center">
                  {child}
                </span>
                <Button
                  className="w-7 h-8 bg-[#FF6535]"
                  onClick={addChildIncrement}
                >
                  +
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <Button size={"lg"} className="mt-2 bg-[#FF6535]">
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};
export default RoomMealPlanModal;
