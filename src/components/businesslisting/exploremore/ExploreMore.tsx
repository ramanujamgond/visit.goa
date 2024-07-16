import { Button } from "@/components/ui/button";

const ExploreMore = () => {
  return (
    <div className="container py-8">
      <div className="py-4 px-8 bg-white rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold my-3">
              Don’t struggle with scattered systems
            </div>
            <div className="text-sm font-normal">
              Choose from our Preferred and Certified Integrations!
            </div>
          </div>

          <div>
            <Button size={"lg"} className="min-w-52 bg-[#FF6535]">
              Explore More
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExploreMore;
