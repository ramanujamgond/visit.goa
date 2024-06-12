import Image from "next/image";

const LastMinuteSale = () => {
  return (
    <div className="container">
      <div className="py-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-shrink-1 flex-grow-1 basis-56">
            <div className="w-fill h-[310px] relative rounded-xl">
              <Image
                src="/lastminutesale_1.png"
                alt="Last minutes sale offer"
                fill
                className="object-cover object-center rounded-xl"
              />
            </div>
          </div>

          <div className="flex-shrink-1 flex-grow-2 basis-full">
            <div className="flex items-center gap-4">
              <div className="w-1/2 h-[310px] rounded-xl">
                <div className="w-full h-[201px] relative rounded-tl-xl rounded-tr-xl">
                  <Image
                    src="/lastminutesale_2.png"
                    alt="Last minutes offer"
                    fill
                    className="object-cover rounded-tl-xl rounded-tr-xl"
                  />
                </div>

                <div className="bg-white p-3 rounded-bl-xl rounded-br-xl">
                  <div className="text-base font-bold">Hotel Pushpanjali</div>
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="text-xs font-semibold mb-2">Goa</div>
                      <div className="text-xs font-medium text-[#46A10E] bg-[#EAFFD0] p-1 rounded-md">
                        3.8 ⭐(230 reviews)
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-medium decorat line-through">
                        ₹1200
                      </div>
                      <div className="text-lg font-semibold text-[#FF6535]">
                        ₹800
                      </div>
                      <div className="text-xs font-medium">
                        1 room per night
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-1/2 h-[310px] rounded-xl">
                <div className="w-full h-[201px] relative rounded-tl-xl rounded-tr-xl">
                  <Image
                    src="/lastminutesale_3.png"
                    alt="Last minutes offer"
                    fill
                    className="object-cover rounded-tl-xl rounded-tr-xl"
                  />
                </div>

                <div className="bg-white p-3 rounded-bl-xl rounded-br-xl">
                  <div className="text-base font-bold">Hotel Pushpanjali</div>
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="text-xs font-semibold mb-2">Goa</div>
                      <div className="text-xs font-medium text-[#46A10E] bg-[#EAFFD0] p-1 rounded-md">
                        3.8 ⭐(230 reviews)
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-medium decorat line-through">
                        ₹1200
                      </div>
                      <div className="text-lg font-semibold text-[#FF6535]">
                        ₹800
                      </div>
                      <div className="text-xs font-medium">
                        1 room per night
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LastMinuteSale;
