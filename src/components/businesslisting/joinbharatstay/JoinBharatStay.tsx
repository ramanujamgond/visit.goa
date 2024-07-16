import { Button } from "@/components/ui/button";

const JoinBharatStay = () => {
  return (
    <div className="container py-8">
      <div className="w-full bg-white rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold my-3">
              Join Bharatstay and boost bookings
            </div>
            <div className="text-sm font-normal">
              Discover the benefits of partnering with Bharatstay
            </div>
          </div>
          <Button size={"lg"} className="text-white bg-[#FF6535]">
            Join Bharatstay
          </Button>
        </div>
      </div>
    </div>
  );
};
export default JoinBharatStay;
