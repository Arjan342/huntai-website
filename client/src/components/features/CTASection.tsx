"use client";

import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldAlert } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient & effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 opacity-90"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute right-10 top-10 opacity-20">
        <ShieldAlert className="w-40 h-40 text-white" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center py-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Klaar om uw digitale beveiliging te versterken?
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10">
            Neem vandaag nog contact met ons op voor een gratis beveiligingsscan en ontdek hoe HuntAI uw organisatie kan beschermen tegen de nieuwste cyberdreigingen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-md transition text-base h-auto group">
              <Link href="/contact" className="flex items-center">
                Gratis website scan
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-md transition text-base h-auto">
              <Link href="/over-ons">
                Meer over ons
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
