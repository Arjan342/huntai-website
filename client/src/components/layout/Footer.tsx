"use client";

import React from "react";
import { Link } from "wouter";
import { Linkedin, Twitter, Github, MapPin, Phone, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/">
              <a className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 text-transparent bg-clip-text">
                  HuntAI
                </span>
              </a>
            </Link>
            <p className="text-sm text-gray-400">
              Gespecialiseerd in het zoeken en aantonen van digitale kwetsbaarheden door de inzet van AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Snelle Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/diensten">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Diensten
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/nieuws">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Nieuws
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/over-ons">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Over Ons
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Diensten</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/automatische-ai-pentesten">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Automatische AI Pentesten
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/kwetsbaarheidsanalyse">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Kwetsbaarheidsanalyse
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/diensten">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Digitale Weerbaarheid
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/diensten">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Security Consulting
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-400">info@huntai.nl</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-400">+31 (0) 20 123 4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-gray-400">Amsterdam, Nederland</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} HuntAI. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
