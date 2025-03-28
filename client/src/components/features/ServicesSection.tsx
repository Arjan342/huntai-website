"use client";

import React from "react";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Search, Database, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <ShieldCheck className="w-10 h-10 mb-4 text-blue-500" />,
    title: "Automatische AI Pentesten",
    description:
      "Onze AI-gestuurde pentesten identificeren kwetsbaarheden in uw systemen met ongekende precisie en snelheid.",
    link: "/automatische-ai-pentesten",
  },
  {
    icon: <Search className="w-10 h-10 mb-4 text-purple-500" />,
    title: "Kwetsbaarheidsanalyse",
    description:
      "Diepgaande analyses van uw digitale infrastructuur om potentiële risico's te identificeren.",
    link: "/kwetsbaarheidsanalyse",
  },
  {
    icon: <Database className="w-10 h-10 mb-4 text-teal-500" />,
    title: "Digitale Weerbaarheid",
    description:
      "Complete oplossingen om uw organisatie te beschermen tegen de nieuwste cyberdreigingen.",
    link: "/diensten",
  },
  {
    icon: <Code className="w-10 h-10 mb-4 text-pink-500" />,
    title: "Security Consulting",
    description:
      "Deskundig advies en begeleiding bij het implementeren van robuuste beveiligingsmaatregelen.",
    link: "/diensten",
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Onze Diensten
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            HuntAI biedt een breed scala aan AI-gestuurde beveiligingsdiensten om uw digitale infrastructuur te beschermen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-black/30 border border-gray-800 rounded-xl p-8 transition-all hover:bg-black/50 hover:border-gray-700"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-6 text-sm">{service.description}</p>
              <Link href={service.link}>
                <a className="text-blue-400 hover:text-blue-300 flex items-center text-sm font-medium">
                  Meer informatie <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-md transition text-base h-auto">
            <Link href="/contact">
              <a>Bekijk al onze diensten</a>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
