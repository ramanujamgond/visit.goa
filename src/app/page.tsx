import AdvertisementSection from "@/components/home/advertisement/AdvertisementSection";
import JoinVisitGoa from "@/components/home/ctajoinVisitGoa/JoinVisitGoa";
import CustomerFeedbacksReviews from "@/components/home/customerfeedbacksreviews/CustomerFeedbacksReviews";
import HeroSection from "@/components/home/herosection/HeroSection";
import LastMinuteSale from "@/components/home/lastminutesale/LastMinuteSale";
import OffersList from "@/components/home/offerslist/OffersList";
import PopularDestination from "@/components/home/populardestination/PopularDestination";
import PopularHotels from "@/components/home/popularhotels/PopularHotels";
import ServicesOffered from "@/components/home/servicesoffered/ServicesOffered";
import ZeroCommissonOta from "@/components/home/zerocommissonota/ZeroCommissonOta";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ZeroCommissonOta />
      <ServicesOffered />
      <OffersList />
      <PopularHotels />
      <PopularDestination />
      <AdvertisementSection />
      <LastMinuteSale />
      <CustomerFeedbacksReviews />
      <JoinVisitGoa />
    </main>
  );
}
