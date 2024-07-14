import ListingHeroSection from '@/components/businesslisting/listingherosection/ListingHeroSection';
import ZeroCommission from '@/components/businesslisting/zerocommission/ZeroCommission';
import BenefitsOfOnboarding from "@/components/businesslisting/benefitsofonboarding/BenefitsOfOnboarding";
import React from 'react'
import SimplifyingProcurement from '@/components/businesslisting/simplifyingprocurement/SimplifyingProcurement';

const BusinessListing = () => {
  return (
    <div>
      <ListingHeroSection />

      <ZeroCommission />

      <BenefitsOfOnboarding />

      <SimplifyingProcurement />
    </div>
  )
}

export default BusinessListing