import { Button } from "@/components/ui/button";

const JoinBharatstay = () => {
  return (
    <div className="container">
      <div className="relative bottom-[-3.5rem] z-10 w-3/4 mx-auto p-6 rounded-xl bg-[linear-gradient(269deg,_#FF7438_1.56%,_#FF5656_95.32%)]">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-white mb-2">
              Are you a hotelier ?
            </div>
            <div className="text-base font-normal text-white">
              Join Bharatstay India's first zero commission OTA
            </div>
          </div>

          <div>
            <Button size="lg" className="text-black bg-white hover:text-white">
              Join Bharatstay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JoinBharatstay;
