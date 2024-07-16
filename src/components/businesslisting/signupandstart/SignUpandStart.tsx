import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RiBardFill } from "@remixicon/react";

const SignUpandStart = () => {
  return (
    <div className="w-[100%] pb-4 bg-[#1f1f1f]">
      <div className="container pt-12 mt-8">
        <div className="flex items-center justify-center gap-8">
          <div className="flex-shrink-1 flex-grow-1 basis-1/2">
            <div className="text-3xl font-bold text-white">
              Sign up and start welcoming guests today!
            </div>
          </div>
          <div className="flex-shrink-1 flex-grow-1 basis-1/2">
            <div className="text-2xl font-semibold text-white">
              Earn more with consistent bookings
            </div>
            <div className="flex item-center text-base text-white my-6">
              <RiBardFill className="me-2" /> 45% of partners get their first
              booking within a week
            </div>
            <div className="flex item-center text-base text-white my-6">
              <RiBardFill className="me-2" /> More than 1.1 billion vacation
              rental guests since 2010
            </div>
            <div className="flex item-center text-base text-white my-6">
              <RiBardFill className="me-2" /> Full control over your property
              and finances
            </div>
            <div className="flex item-center text-base text-white my-6">
              <RiBardFill className="me-2" /> Registration is free and takes 15
              minutes
            </div>

            <Button className="bg-white text-black my-6">Get Stared Now</Button>
          </div>
        </div>

        <Separator className="bg-[#9A9A9A] mt-12" />
      </div>
    </div>
  );
};
export default SignUpandStart;
