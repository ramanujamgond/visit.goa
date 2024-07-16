import { Button } from "@/components/ui/button";
import Image from "next/image";

const HrPayroll = () => {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-shrink-1 flex-grow-1 basis-1/2">
          <div className="text-2xl font-bold mb-6">
            Efficient <span className="text-[#FF6535]">HR</span> and{" "}
            <span className="text-[#FF6535]">Payroll </span>
            Outsourcing Services for{" "}
            <span className="text-[#FF6535]">Streamlined Operations</span>
          </div>

          <div className="text-sm font-normal text-[#7A7A7A] mb-6 text-justify">
            Our HR and Payroll Outsourcing services provide a comprehensive
            solution to handle all your human resource and payroll needs. From
            managing employee records to processing payroll accurately and on
            time, our team ensures smooth operations, allowing you to focus on
            your core business. With our expertise and advanced technology, we
            streamline your HR processes, reduce administrative burden, and
            ensure compliance with regulations. Experience hassle-free HR and
            payroll management with Bharatstay.
          </div>

          <Button size={"lg"} className="bg-[#FF6535]">
            Join Bharatstay
          </Button>
        </div>

        <div className="flex-shrink-1 flex-grow-1 basis-1/2">
          <div className="w-auto h-[479px] relative rounded-lg">
            <Image
              src={"/hr_payroll_image.png"}
              alt="qnity integration image"
              priority
              fill
              className="object-contain rounded-lg"
              sizes="auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HrPayroll;
