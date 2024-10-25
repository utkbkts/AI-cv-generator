"use client";

import { HeroSection } from "@/components/herosection";
import { PricingSection } from "@/components/pricing-section";
import { api } from "@/lib/api";
import stripePromise from "@/lib/stripe";

export default function Home() {
  const handleUpgrade = async () => {
    try {
      const response = await api.get("/payments/create-checkout-session");
      const stripe = await stripePromise;
      await stripe?.redirectToCheckout({
        sessionId: response.data.sessionId,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <HeroSection />
      <PricingSection />
    </>
  );
}
