"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:py-36 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500">
            Digitale Kwetsbaarheden Detecteren met AI
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            HuntAI is gespecialiseerd in het zoeken en aantonen van digitale kwetsbaarheden 
            van organisaties door de inzet van geavanceerde AI-technologie.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-md text-base h-auto">
              <Link href="/diensten">
                Onze Diensten
              </Link>
            </Button>
            <Button asChild variant="outline" className="border border-gray-600 text-white hover:bg-gray-800 px-8 py-3 rounded-md text-base h-auto">
              <Link href="/website-scan">
                Gratis website scan
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
