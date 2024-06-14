import Image from "next/image";

const AdvertisementSection = () => {
  return (
    <div className="container">
      <div className="py-8">
        <div className="w-full flex items-center bg-white rounded-xl">
          <div className="flex-shrink-1 flex-grow-1 basis-7/12">
            <div className="p-8">
              <div className="text-3xl font-bold mb-6">Advertisement</div>
              <div className="text-xs font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eleifend molestie metus, venenatis rhoncus mauris tempor at.
                Etiam
              </div>
            </div>
          </div>

          <div className="flex-shrink-1 flex-grow-1 basis-5/12">
            <div className="w-full h-[156px] relative">
              <Image
                src="/advertisement.png"
                alt="advertisement banner"
                fill
                className="object-contain"
                sizes="auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdvertisementSection;
