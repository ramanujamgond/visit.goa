import Image from "next/image";

const ServicesOffered = () => {
  const services_list = [
    {
      id: 1,
      service_name: "Loyalty & Rewards Program",
      service_text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend molestie metus, venenatis rhoncus mauris tempor",
      service_image: "/loyalty.png",
    },
    {
      id: 2,
      service_name: "Buy now pay Later",
      service_text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend molestie metus, venenatis rhoncus mauris tempor",
      service_image: "/paylater.png",
    },
    {
      id: 3,
      service_name: "Local Tour Guides",
      service_text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend molestie metus, venenatis rhoncus mauris tempor",
      service_image: "/local_tour_guides.png",
    },
    {
      id: 4,
      service_name: "Express Check In",
      service_text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend molestie metus, venenatis rhoncus mauris tempor",
      service_image: "/express_checkin.png",
    },
    {
      id: 5,
      service_name: "AI Enabled Travel Companion",
      service_text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend molestie metus, venenatis rhoncus mauris tempor",
      service_image: "/ai_companion.png",
    },
    {
      id: 6,
      service_name: "Virtual Tour",
      service_text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend molestie metus, venenatis rhoncus mauris tempor",
      service_image: "/virtual_tour.png",
    },
  ];
  return (
    <div className="container">
      <div className="mb-14">
        <div className="text-xl font-bold mb-6">Services we Offer</div>
        <div className="grid grid-cols-[repeat(3,_1fr)] gap-4">
          {services_list.map((service) => (
            <div className="p-2 w-full rounded-xl bg-white" key={service.id}>
              <div className="w-full h-48 relative rounded-xl">
                <Image
                  src={service.service_image}
                  alt={service.service_name}
                  fill
                  className="object-cover rounded-xl"
                  sizes="auto"
                  loading="lazy"
                />
              </div>
              <div className="text-xl font-bold p-2 pb-0">
                {service.service_name}
              </div>
              <div className="text-xs text-[#858585] p-2">
                {service.service_text}
                <span className="inline-block text-[#685CF1] underline ms-1 cursor-pointer">
                  View more
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServicesOffered;
