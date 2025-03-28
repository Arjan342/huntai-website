"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#2D1A64]">
      <div className="container max-w-[1440px] mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar om uw digitale beveiliging te versterken?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Neem vandaag nog contact met ons op voor een gratis beveiligingsscan en ontdek hoe HuntAI uw organisatie kan beschermen.
          </p>
          <Button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition text-base h-auto">
            Neem contact met ons op
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
