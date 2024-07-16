import { RiBardFill } from "@remixicon/react";

const GetInTouch = () => {
  return (
    <div className="container py-8">
      <div className="text-2xl font-bold my-3">Get in Touch</div>

      <div className="text-sm font-normal mb-3">
        Have a question or need more information? Contact us.
      </div>

      <div className="grid grid-cols-[repeat(3,_1fr)] gap-4">
        <div>
          <RiBardFill size={28} className="text-[#FF6535] my-2" />
          <div className="text-base font-semibold my-2">Email</div>
          <div className="text-sm font-normal text-[#7A7A7A] my-2">
            Send us an email at
          </div>

          <div className="text-sm text-[#0C3FC2] font-normal">
            hello@bharatstay.com
          </div>
        </div>

        <div>
          <RiBardFill size={28} className="text-[#FF6535] my-2" />
          <div className="text-base font-semibold my-2">Phone</div>
          <div className="text-sm font-normal text-[#7A7A7A] my-2">
            Give us a call at
          </div>

          <div className="text-sm text-[#0C3FC2] font-normal">
            +1 (555) 123-4567
          </div>
        </div>

        <div>
          <RiBardFill size={28} className="text-[#FF6535] my-2" />
          <div className="text-base font-semibold my-2">Office</div>
          <div className="text-sm font-normal text-[#7A7A7A] my-2">
            Meet us at
          </div>

          <div className="text-sm text-[#0C3FC2] font-normal">
            123 Main St, New York, NY 10001
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetInTouch;
