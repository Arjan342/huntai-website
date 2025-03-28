"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20"></div>
        <div className="absolute w-full h-full bg-[url('https://picsum.photos/id/1/1920/1080')] bg-cover bg-center opacity-20"></div>
      </div>
      <div className="container max-w-[1440px] mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Digitale Kwetsbaarheden Detecteren met AI
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            HuntAI is gespecialiseerd in het zoeken en opsporen van digitale kwetsbaarheden 
            van organisaties door de inzet van geavanceerde AI-technologie.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition text-base h-auto">
              Direct beginnen
            </Button>
            <Button variant="outline" className="border border-white/30 text-white px-6 py-3 rounded-md hover:bg-white/10 transition text-base h-auto">
              Contact opnemen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
