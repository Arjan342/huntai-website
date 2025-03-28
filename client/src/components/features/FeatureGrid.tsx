"use client";

import React from "react";
import { Search, Shield, Database, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Geavanceerde Bescherming",
    description:
      "AI-gestuurde detectietechnologie voor vroegtijdige identificatie van kwetsbaarheden.",
  },
  {
    icon: Shield,
    title: "Snelle Detectie",
    description:
      "Realtime identificatie van mogelijke bedreigingen en kwetsbaarheden binnen digitale omgevingen.",
  },
  {
    icon: Database,
    title: "Data-gedreven Inzichten",
    description:
      "Gedetailleerde rapportages en analyses voor een compleet overzicht van uw beveiligingspositie.",
  },
  {
    icon: CheckCircle,
    title: "Compliance Garantie",
    description:
      "Voldoe aan de relevante regelgeving en standaarden voor digitale beveiliging.",
  },
];

const FeatureGrid: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Waarom Kiezen voor HuntAI?</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Onze AI-gestuurde oplossingen bieden ongeëvenaarde bescherming tegen digitale dreigingen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-secondary/50 rounded-xl p-6 transition hover:scale-105 hover:bg-secondary/60"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
