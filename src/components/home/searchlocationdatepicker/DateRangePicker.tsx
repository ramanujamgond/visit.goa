// date picker
import { differenceInDays, format } from "date-fns";
import { DateRange, SelectRangeEventHandler } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface DateRangePickerProps {
  date: DateRange;
  setDate: (value: DateRange | ((prevState: DateRange) => DateRange)) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ date, setDate }) => {
  // state to close the calender when to date is selected
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

  // handle the issue of from date not changing on single click
  const handleSelect: SelectRangeEventHandler = (nextRange, selectedDay) => {
    setDate((range) => {
      if (range?.from && range?.to) {
        return { from: selectedDay };
      }
      setIsPopoverOpen(false);
      return nextRange as DateRange;
    });
  };

  return (
    <div>
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        {/* <Popover> */}
        <PopoverTrigger asChild>
          <div className="flex items-center justify-between w-full cursor-pointer">
            <div className="w-24">
              <div className="text-sm font-medium text-[#858585]">Chcek-in</div>
              <div className="text-base font-semibold mt-3">
                {date?.from ? (
                  format(date.from, "dd LLL, yy")
                ) : (
                  <span className="text-sm font-medium">Start Date</span>
                )}
              </div>
            </div>
            <div className="text-sm text-center font-semibold p-2 border-2 border-[#E5E5E5] border-solid rounded-3xl w-24">
              {date?.from && date.to
                ? differenceInDays(date.to, date?.from)
                : 0}
            </div>
            <div className="w-24">
              <div className="text-sm font-medium text-[#858585]">
                Check-out
              </div>
              <div className="text-base font-semibold mt-3">
                {date?.from && date.to ? (
                  format(date.to, "dd LLL, yy")
                ) : (
                  <span className="text-sm font-medium">End Date</span>
                )}
              </div>
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0 z-[1200] relative top-4 rounded-xl"
          align="center"
        >
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            fromDate={new Date()}
            selected={date}
            onSelect={handleSelect}
            numberOfMonths={2}
            min={2}
            classNames={{
              cell: cn("p-1.5"),
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
export default DateRangePicker;
