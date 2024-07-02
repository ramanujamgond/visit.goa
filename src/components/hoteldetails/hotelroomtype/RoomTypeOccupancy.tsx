import React, { useState } from "react";
import { RiDeleteBinLine } from "@remixicon/react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  HotelRoomTypeProps,
  OccupancyProps,
  SelectedRoomTypeProps,
} from "./RoomMealPlanModal";

interface RoomTypeOccupancyProps {
  roomsData: OccupancyProps;
  index: number;
  selectedRoomType: SelectedRoomTypeProps;
  setSelectedRoomType: any;
  roomTypeData: HotelRoomTypeProps;
}

const RoomTypeOccupancy = ({
  roomsData,
  index,
  selectedRoomType,
  setSelectedRoomType,
  roomTypeData,
}: RoomTypeOccupancyProps) => {
  const [disableAddAdult, setDisableAddAdult] = useState<boolean>(false);
  const [disableAddChild, setDisableAddChild] = useState<boolean>(false);

  // extract the occupancy details from roomTypeData for cart operations
  const maxOccupancy = roomTypeData?.max_occupancy;
  const baseAdult = roomTypeData?.base_adult;
  const baseChild = roomTypeData?.base_child;
  const extraAdult = roomTypeData?.extra_adult;
  const extraChild = roomTypeData?.extra_child;

  // method to add the adult and child
  const addRoomOccupancy = (occupant: string, roomIndex: number) => {
    setSelectedRoomType((prevState: SelectedRoomTypeProps) => {
      const updatedOccupancy = prevState.occupancy.map((occupancy, index) => {
        if (index === roomIndex - 1) {
          // Clone the occupancy object to avoid direct mutation
          let newOccupancy = { ...occupancy };

          const totalOccupants =
            newOccupancy.adult +
            newOccupancy.child +
            newOccupancy.extra_adult +
            newOccupancy.extra_child;

          if (occupant === "adult") {
            if (totalOccupants < maxOccupancy) {
              if (newOccupancy.adult < baseAdult) {
                newOccupancy.adult++;
              } else if (newOccupancy.extra_adult < extraAdult) {
                newOccupancy.extra_adult++;
              } else {
                setDisableAddAdult(true);
              }
            } else {
              setDisableAddAdult(true);
            }
          } else if (occupant === "child") {
            if (totalOccupants < maxOccupancy) {
              if (newOccupancy.child < baseChild) {
                newOccupancy.child++;
              } else if (newOccupancy.extra_child < extraChild) {
                newOccupancy.extra_child++;
              } else {
                setDisableAddChild(true);
              }
            } else {
              setDisableAddChild(true);
            }
          }

          return newOccupancy;
        }
        return occupancy;
      });

      return { ...prevState, occupancy: updatedOccupancy };
    });
  };

  // method to remove the adult and child
  const removeRoomOccupancy = (occupant: string, roomNumber: number) => {
    setSelectedRoomType((prevState: SelectedRoomTypeProps) => {
      const updatedOccupancy = prevState.occupancy.map((occupancy, index) => {
        if (occupancy.roomNumber === roomNumber) {
          let newOccupancy = { ...occupancy };

          if (occupant === "adult") {
            if (newOccupancy.adult > 1) {
              newOccupancy.adult--;
              setDisableAddAdult(false);
            } else if (newOccupancy.extra_adult > 0) {
              newOccupancy.extra_adult--;
              setDisableAddAdult(false);
            }
          } else if (occupant === "child") {
            if (newOccupancy.child > 0) {
              newOccupancy.child--;
              setDisableAddChild(false);
            } else if (newOccupancy.extra_child > 0) {
              newOccupancy.extra_child--;
              setDisableAddChild(false);
            }
          }
          return newOccupancy;
        }
        return occupancy;
      });

      return { ...prevState, occupancy: updatedOccupancy };
    });
  };

  return (
    <React.Fragment key={index}>
      <div className="flex items-center mb-5">
        <div className="w-2/6">
          <div className="text-xl font-semibold mb-3">
            Room {roomsData?.roomNumber}
          </div>
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
                onClick={() => removeRoomOccupancy("adult", index + 1)}
              >
                -
              </Button>
              <span className="inline-block w-5 text-base font-medium text-center">
                {roomsData?.extra_adult
                  ? roomsData?.extra_adult + roomsData?.adult
                  : roomsData?.adult}
              </span>
              <Button
                className="w-7 h-8 bg-[#FF6535]"
                disabled={disableAddAdult}
                onClick={() => addRoomOccupancy("adult", index + 1)}
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
                onClick={() => removeRoomOccupancy("child", index + 1)}
              >
                -
              </Button>
              <span className="inline-block w-5 text-base font-medium text-center">
                {roomsData?.extra_child
                  ? roomsData?.extra_child + roomsData?.child
                  : roomsData?.child}
              </span>
              <Button
                className="w-7 h-8 bg-[#FF6535]"
                disabled={disableAddChild}
                onClick={() => addRoomOccupancy("child", index + 1)}
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Separator className="mb-5" />
    </React.Fragment>
  );
};
export default RoomTypeOccupancy;
