"use client";

import React from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Automatische AI Pentesten",
    description:
      "Onze geavanceerde pentesten identificeren kwetsbaarheden in uw systemen met ongeëvenaarde precisie en snelheid.",
    link: "/automatische-ai-pentesten",
  },
  {
    title: "Kwetsbaarheidsanalyse",
    description:
      "Onze diepgaande analyse identificeert digitale kwetsbaarheden en potentiële risico's in bedrijven.",
    link: "/kwetsbaarheidsanalyse",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Onze Diensten</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            HuntAI biedt een breed scala aan AI-gestuurde beveiligingsdiensten.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-secondary/40 rounded-xl p-8 transition hover:bg-secondary/50"
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-white/70 mb-6">{service.description}</p>
              <Link href={service.link}>
                <a className="text-accent hover:text-accent/80 flex items-center">
                  Meer informatie <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-primary/90 hover:bg-primary text-white px-6 py-3 rounded-md transition text-base h-auto">
            Praat met een expert
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
