"use client";

import React from "react";
import HeroSection from "@/components/features/HeroSection";
import FeatureGrid from "@/components/features/FeatureGrid";
import ServicesSection from "@/components/features/ServicesSection";
import NewsGrid from "@/components/features/NewsGrid";
import CTASection from "@/components/features/CTASection";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeatureGrid />
      <ServicesSection />
      <NewsGrid />
      <CTASection />
    </>
  );
};

export default Home;
