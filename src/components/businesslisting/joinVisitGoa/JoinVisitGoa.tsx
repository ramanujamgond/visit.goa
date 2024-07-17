import { Button } from "@/components/ui/button";

const JoinVisitGoa = () => {
  return (
    <div className="container py-8">
      <div className="w-full bg-white rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold my-3">
              Join VisitGoa and boost bookings
            </div>
            <div className="text-sm font-normal">
              Discover the benefits of partnering with VisitGoa
            </div>
          </div>
          <Button size={"lg"} className="text-white bg-[#685CF1]">
            Join VisitGoa
          </Button>
        </div>
      </div>
    </div>
  );
};
export default JoinVisitGoa;
