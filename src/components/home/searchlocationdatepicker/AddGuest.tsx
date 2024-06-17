import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AddGuestProps {
  adult: number;
  setAdult: (value: number) => void;
  child: number;
  setChild: (value: number) => void;
}

const AddGuest: React.FC<AddGuestProps> = ({
  adult,
  setAdult,
  child,
  setChild,
}) => {
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
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            <div className="text-sm font-medium text-[#858585]">Guest</div>
            <div className="text-base font-semibold mt-3">2 Adult, 0 Child</div>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-44 relative top-4 rounded-xl z-[1200]">
          <DropdownMenuGroup>
            <div className="p-1.5">
              <div className="w-full flex items-center justify-between">
                <div>Adult</div>
                <div className="flex items-center gap-x-2">
                  <Button className="w-7 h-8" onClick={addAdultIncrement}>
                    +
                  </Button>
                  <span className="inline-block w-5 text-base font-medium text-center">
                    {adult}
                  </span>
                  <Button className="w-7 h-8" onClick={addAdultDecrement}>
                    -
                  </Button>
                </div>
              </div>
            </div>
            <DropdownMenuSeparator />
            <div className="p-1.5">
              <div className="w-full flex items-center justify-between">
                <div>Child</div>
                <div className="flex items-center gap-x-2">
                  <Button className="w-7 h-8" onClick={addChildIncrement}>
                    +
                  </Button>
                  <span className="inline-block w-5 text-base font-medium text-center">
                    {child}
                  </span>
                  <Button className="w-7 h-8" onClick={addChildDecrement}>
                    -
                  </Button>
                </div>
              </div>
            </div>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default AddGuest;
