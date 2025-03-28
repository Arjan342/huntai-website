"use client";

import React from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    image: "https://picsum.photos/id/0/800/450",
    title: "AI-gestuurde pentesten ontdekken 45% meer kwetsbaarheden",
    description:
      "De meest recente onderzoeken tonen aan dat AI-pentesten aanzienlijk effectiever zijn dan traditionele methoden.",
    link: "/nieuws/ai-pentesten",
  },
  {
    image: "https://picsum.photos/id/3/800/450",
    title: "De toekomst van cybersecurity: Hoe AI het landschap verandert",
    description:
      "Een uitgebreid onderzoek naar de transformatie die cybersecurity ondergaat door AI-technologie.",
    link: "/nieuws/toekomst-cybersecurity",
  },
  {
    image: "https://picsum.photos/id/4/800/450",
    title: "Case study: Hoe een financiële instelling haar beveiliging verbeterde met AI",
    description:
      "Een indrukwekkende business case waarbij AI-beveiligingsoplossingen aanzienlijk verbeteringen brachten in beveiliging.",
    link: "/nieuws/case-study-financiele-instelling",
  },
];

const NewsGrid: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Laatste Nieuws</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Blijf op de hoogte van de nieuwste ontwikkelingen in cybersecurity en AI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div 
              key={index}
              className="bg-secondary/30 rounded-xl overflow-hidden transition hover:bg-secondary/40"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/70 mb-4">{item.description}</p>
                <Link href={item.link}>
                  <a className="text-accent hover:text-accent/80 flex items-center">
                    Lees meer <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="secondary" 
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md transition text-base h-auto"
          >
            Bekijk al het nieuws
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
