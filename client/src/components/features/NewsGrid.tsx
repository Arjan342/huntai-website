"use client";

import React from "react";
import { Link } from "wouter";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
    date: "24 maart 2025",
    tag: "Onderzoek",
    title: "AI-pentesten ontdekken 45% meer kwetsbaarheden dan traditionele methoden",
    description:
      "Recente benchmarks tonen aan dat AI-gestuurde penetratietesten aanzienlijk effectiever zijn in het identificeren van verborgen beveiligingsrisico's.",
    link: "/nieuws/ai-pentesten",
  },
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
    date: "18 maart 2025",
    tag: "Technologie",
    title: "De toekomst van cybersecurity: Hoe AI het beveiligingslandschap transformeert",
    description:
      "Een diepgaande analyse van de nieuwste trends in AI-gestuurde beveiligingstechnologieën en hun impact op de sector.",
    link: "/nieuws/toekomst-cybersecurity",
  },
  {
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
    date: "10 maart 2025",
    tag: "Case Study",
    title: "Hoe een grote financiële instelling haar beveiliging verbeterde met HuntAI",
    description:
      "Een praktijkvoorbeeld waarbij onze AI-beveiligingsoplossingen hielpen bij het detecteren en elimineren van kritieke kwetsbaarheden.",
    link: "/nieuws/case-study-financiele-instelling",
  },
];

const NewsGrid: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
            Laatste Nieuws
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Blijf op de hoogte van de nieuwste ontwikkelingen in cybersecurity en AI-technologie.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden transition-all hover:border-gray-700 hover:translate-y-[-4px]"
            >
              <div className="relative">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="absolute top-0 right-0 bg-blue-600 text-xs font-medium px-3 py-1 text-white">
                  {item.tag}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" /> {item.date}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white line-clamp-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{item.description}</p>
                <Link href={item.link}>
                  <a className="text-blue-400 hover:text-blue-300 flex items-center text-sm font-medium">
                    Lees meer <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild 
            variant="outline" 
            className="border border-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-md text-base h-auto"
          >
            <Link href="/nieuws">
              <a>Bekijk al het nieuws</a>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
