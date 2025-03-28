"use client";

import React from "react";
import { Link } from "wouter";
import { Linkedin, Twitter, Facebook, MapPin, Phone, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and info */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-bold text-white mb-4">HuntAI</h2>
            <p className="text-white/70 mb-4">
              Geavanceerde AI-oplossingen voor digitale beveiliging.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Diensten</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/kwetsbaarheidsanalyse">
                  <a className="text-white/70 hover:text-white transition">Kwetsbaarheidsanalyse</a>
                </Link>
              </li>
              <li>
                <Link href="/automatische-ai-pentesten">
                  <a className="text-white/70 hover:text-white transition">Automatische AI Pentesten</a>
                </Link>
              </li>
              <li>
                <Link href="/compliance-audits">
                  <a className="text-white/70 hover:text-white transition">Compliance Audits</a>
                </Link>
              </li>
              <li>
                <Link href="/security-trainingen">
                  <a className="text-white/70 hover:text-white transition">Security Trainingen</a>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Bedrijf</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/over-ons">
                  <a className="text-white/70 hover:text-white transition">Over Ons</a>
                </Link>
              </li>
              <li>
                <Link href="/nieuws">
                  <a className="text-white/70 hover:text-white transition">Nieuws</a>
                </Link>
              </li>
              <li>
                <Link href="/use-cases">
                  <a className="text-white/70 hover:text-white transition">Use Cases</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-white/70 hover:text-white transition">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-white/70 mr-2 mt-0.5" />
                <span className="text-white/70">Cyberstraat 123, 1234 AB Amsterdam</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-white/70 mr-2" />
                <span className="text-white/70">+31 (0)20 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-white/70 mr-2" />
                <span className="text-white/70">info@huntai.nl</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © 2025 HuntAI. Alle rechten voorbehouden.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy">
              <a className="text-white/50 hover:text-white text-sm transition">Privacybeleid</a>
            </Link>
            <Link href="/terms">
              <a className="text-white/50 hover:text-white text-sm transition">Algemene Voorwaarden</a>
            </Link>
            <Link href="/cookies">
              <a className="text-white/50 hover:text-white text-sm transition">Cookiebeleid</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
