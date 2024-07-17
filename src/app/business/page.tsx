import ListingHeroSection from "@/components/businesslisting/listingherosection/ListingHeroSection";
import ZeroCommission from "@/components/businesslisting/zerocommission/ZeroCommission";
import BenefitsOfOnboarding from "@/components/businesslisting/benefitsofonboarding/BenefitsOfOnboarding";
import React from "react";
import SimplifyingProcurement from "@/components/businesslisting/simplifyingprocurement/SimplifyingProcurement";
import ExploreMore from "@/components/businesslisting/exploremore/ExploreMore";
import PartnerIntegration from "@/components/businesslisting/partnerintegration/PartnerIntegration";
import OtherServices from "@/components/businesslisting/otherservices/OtherServices";
import HrPayroll from "@/components/businesslisting/hrpayroll/HrPayroll";
import AdNetwork from "@/components/businesslisting/adnetwork/AdNetwork";
import JoinVisitGoa from "@/components/businesslisting/joinVisitGoa/JoinVisitGoa";
import CustomerFeedbacksReviews from "@/components/home/customerfeedbacksreviews/CustomerFeedbacksReviews";
import FrequentlyAskedQuestions from "@/components/businesslisting/frequentlyaskedquestions/FrequentlyAskedQuestions";
import GetInTouch from "@/components/businesslisting/getintouch/GetInTouch";
import SignUpandStart from "@/components/businesslisting/signupandstart/SignUpandStart";

const BusinessListing = () => {
  return (
    <div>
      <ListingHeroSection />

      <ZeroCommission />

      <BenefitsOfOnboarding />

      <SimplifyingProcurement />

      <ExploreMore />

      <PartnerIntegration />

      <OtherServices />

      <HrPayroll />

      <AdNetwork />

      <JoinVisitGoa />

      <CustomerFeedbacksReviews />

      <FrequentlyAskedQuestions />

      <GetInTouch />

      <SignUpandStart />
    </div>
  );
};

export default BusinessListing;
