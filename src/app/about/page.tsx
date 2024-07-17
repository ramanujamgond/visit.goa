import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="container my-20">
      <div className="text-xl font-bold pt-10">About Us</div>

      <div className="text-base text-[#7A7A7A] my-3 text-justify">
        Welcome to BharatSaty – your ultimate destination for seamless hotel
        bookings and innovative property management solutions.
      </div>

      <div className="text-xl font-bold mt-10">For Travelers</div>

      <div className="text-base text-[#7A7A7A] my-3 text-justify">
        At VisitGoa, we strive to make your travel planning effortless and
        enjoyable. Our platform allows you to book hotels at competitive rates
        with fees, ensuring you get the best value for your money. Whether
        you're traveling for leisure or business, we provide a wide range of
        accommodations to suit your needs. Enjoy exclusive rewards through our
        loyalty program, and make the most of your travels with personalized
        recommendations and easy booking processes.
      </div>

      <div className="text-xl font-bold mt-10">For Hoteliers</div>

      <div className="text-base text-[#7A7A7A] my-3 text-justify">
        We understand the challenges faced by hoteliers, and we are here to help
        you succeed. VisitGoa offers a comprehensive suite of services designed
        to enhance your property's performance and guest satisfaction. List your
        property with us at and benefit from the following services:
      </div>

      <div className="text-base font-bold my-10">
        Loyalty and Reward Program -{" "}
        <span className="text-sm font-normal text-[#7A7A7A]">
          Attract and retain guests with our customized loyalty programs.
        </span>
      </div>

      <div className="text-base font-bold my-10">
        Financial Support -{" "}
        <span className="text-sm font-normal text-[#7A7A7A]">
          Access financing options to improve and expand your property.
        </span>
      </div>

      <div className="text-base font-bold my-10">
        Analytical Reports -{" "}
        <span className="text-sm font-normal text-[#7A7A7A]">
          Gain insights with our detailed analytical reports to make informed
          decisions.
        </span>
      </div>

      <div className="text-base font-bold my-10">
        Express Check-In -{" "}
        <span className="text-sm font-normal text-[#7A7A7A]">
          Provide a seamless check-in experience for your guests.
        </span>
      </div>

      <div className="text-base font-bold my-10">
        Pest Control -{" "}
        <span className="text-sm font-normal text-[#7A7A7A]">
          Ensure a safe and comfortable environment with our pest control
          services.
        </span>
      </div>

      <div className="text-base font-bold my-10">
        Energy Management -{" "}
        <span className="text-sm font-normal text-[#7A7A7A]">
          Optimize energy usage and reduce costs with our energy management
          solutions.
        </span>
      </div>

      <div className="text-lg my-10">
        Join our network of satisfied hoteliers and leverage our tools to boost
        your property's visibility and profitability.
      </div>

      <Button size={"lg"} className="text-white bg-[#685CF1]">
        Join VisitGoa
      </Button>
    </div>
  );
};
export default About;
