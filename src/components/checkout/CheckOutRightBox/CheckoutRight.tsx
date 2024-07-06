import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CheckoutRight = () => {
  return (
    <div className="flex-grow flex-shrink basis-2/4">
      <div className="bg-[#FFFFFF] p-4 rounded-xl shadow-lg mb-4">
        <div className="text-base font-medium">Details</div>

        <div className="my-3">
          <div className="text-sm font-normal text-[#858585] mb-2">
            Guest Name
          </div>
          <div>
            <Input type="text" className="bg-white focus-visible:ring-0 h-10" />
          </div>
        </div>

        <div className="my-3">
          <div className="text-sm font-normal text-[#858585] mb-2">
            Phone Number
          </div>
          <div>
            <Input
              type="number"
              className="bg-white focus-visible:ring-0 h-10"
            />
          </div>
        </div>

        <div className="my-3">
          <div className="text-sm font-normal text-[#858585] mb-2">
            Email ID
          </div>
          <div>
            <Input
              type="email"
              className="bg-white focus-visible:ring-0 h-10"
            />
          </div>
        </div>

        <div className="my-3">
          <div className="text-sm font-normal text-[#858585] mb-2">Address</div>
          <div>
            <Input type="text" className="bg-white focus-visible:ring-0 h-10" />
          </div>
        </div>

        <div className="my-3">
          <div className="text-sm font-normal text-[#858585] mb-2">
            Expected Arrival time
          </div>
          <div>
            <Input type="text" className="bg-white focus-visible:ring-0 h-10" />
          </div>
        </div>
      </div>

      <Button size={"lg"} className="w-full bg-[#FF6535] mt-2">
        Pay Now ₹5040
      </Button>
    </div>
  );
};
export default CheckoutRight;
