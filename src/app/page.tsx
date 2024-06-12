import AdvertisementSection from "@/components/home/advertisement/AdvertisementSection";
import JoinBharatstay from "@/components/home/ctajoinbharatstay/JoinBharatstay";
import CustomerFeedbacksReviews from "@/components/home/customerfeedbacksreviews/CustomerFeedbacksReviews";
import HeroSection from "@/components/home/herosection/HeroSection";
import LastMinuteSale from "@/components/home/lastminutesale/LastMinuteSale";
import OffersList from "@/components/home/offerslist/OffersList";
import PopularDestination from "@/components/home/populardestination/PopularDestination";
import PopularHotels from "@/components/home/popularhotels/PopularHotels";
import ZeroCommissionServices from "@/components/home/zerocommissionservices/ZeroCommissionServices";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ZeroCommissionServices />
      <OffersList />
      <PopularHotels />
      <PopularDestination />
      <AdvertisementSection />
      <LastMinuteSale />
      <CustomerFeedbacksReviews />
      <JoinBharatstay />
    </main>
  );
}
