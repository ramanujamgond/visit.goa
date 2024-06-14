import Image from "next/image";

const PopularDestination = () => {
  const popularDestinations = [
    {
      id: 0,
      src: "/popular_destinations_0.png",
      alt: "Popular Destination 0",
    },
    {
      id: 1,
      src: "/popular_destinations_1.png",
      alt: "Popular Destination 1",
    },
    {
      id: 2,
      src: "/popular_destinations_2.png",
      alt: "Popular Destination 2",
    },
    {
      id: 3,
      src: "/popular_destinations_3.png",
      alt: "Popular Destination 3",
    },
    {
      id: 4,
      src: "/popular_destinations_4.png",
      alt: "Popular Destination 4",
    },
  ];
  return (
    <div className="container">
      <div className="py-8">
        <div className="text-xl font-bold mb-6">Popular Destinations</div>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex-shrink-1 flex-grow-1 basis-1/3">
            <div className="w-fill h-[446px] relative rounded-xl">
              <Image
                src={popularDestinations[0].src}
                alt={popularDestinations[0].alt}
                fill
                className="object-cover rounded-xl"
                sizes="auto"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-[linear-gradient(0deg,_#000_0%,_rgba(0,_0,_0,_0.00)_100%)] rounded-bl-xl rounded-br-xl">
                <div className="py-3 px-5">
                  <div className="text-base font-bold text-white">
                    Lorem ipsum
                  </div>
                  <div className="text-xs font-normal text-white">
                    Lorem ipsum
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-1 flex-grow-2 basis-4/6">
            <div className="grid grid-cols-[repeat(2,_1fr)] gap-4">
              {popularDestinations.slice(1).map((destination) => (
                <div
                  className="w-fill h-[215px] relative rounded-xl"
                  key={destination.id}
                >
                  <Image
                    src={destination.src}
                    alt={destination.alt}
                    fill
                    className="object-cover rounded-xl"
                    sizes="auto"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-[linear-gradient(0deg,_#000_0%,_rgba(0,_0,_0,_0.00)_100%)] rounded-bl-xl rounded-br-xl">
                    <div className="py-3 px-5">
                      <div className="text-base font-bold text-white">
                        Lorem ipsum
                      </div>
                      <div className="text-xs font-normal text-white">
                        Lorem ipsum
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopularDestination;
