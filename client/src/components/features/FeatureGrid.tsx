"use client";

import React from "react";
import { ShieldCheck, Zap, PieChart, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Geavanceerde Bescherming",
    description:
      "Onze AI-algoritmen detecteren en beschermen tegen de nieuwste cyberdreigingen.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: Zap,
    title: "Snelle Detectie",
    description:
      "Identificeer kwetsbaarheden in real-time voordat ze kunnen worden uitgebuit.",
    gradient: "from-purple-500 to-purple-700",
  },
  {
    icon: PieChart,
    title: "Data-gedreven Inzichten",
    description:
      "Gedetailleerde rapportages en analyses voor een compleet beeld van uw beveiligingsstatus.",
    gradient: "from-teal-500 to-teal-700",
  },
  {
    icon: CheckCircle2,
    title: "Compliance Garantie",
    description:
      "Voldoe aan de nieuwste regelgeving en standaarden voor digitale beveiliging.",
    gradient: "from-pink-500 to-pink-700",
  },
];

const FeatureGrid: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-teal-500 bg-clip-text text-transparent">
            Waarom Kiezen voor HuntAI?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Onze AI-gestuurde oplossingen bieden ongekende bescherming tegen digitale dreigingen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 transition-all hover:translate-y-[-4px] hover:border-gray-700"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
