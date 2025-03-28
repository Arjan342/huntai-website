"use client";

import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LanguageSwitcherProps {
  currentLang: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <button 
        className="flex items-center gap-1 text-gray-300 hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="uppercase">{currentLang}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-gray-900 border border-gray-800 rounded-md shadow-lg z-50">
          <div
            role="button"
            tabIndex={0}
            className={`block px-4 py-2 text-sm cursor-pointer ${
              currentLang === 'nl' ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800'
            }`}
            onClick={() => {
              window.location.href = '/';
              setIsOpen(false);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.location.href = '/';
                setIsOpen(false);
              }
            }}
          >
            Nederlands
          </div>
          <div
            role="button"
            tabIndex={0}
            className={`block px-4 py-2 text-sm cursor-pointer ${
              currentLang === 'en' ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800'
            }`}
            onClick={() => {
              window.location.href = '/';
              setIsOpen(false);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.location.href = '/';
                setIsOpen(false);
              }
            }}
          >
            English
          </div>
        </div>
      )}
    </div>
  );
};

const Header: React.FC = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Diensten", path: "/diensten" },
    { name: "Nieuws", path: "/news" },
    { name: "Use Cases", path: "/use-cases" },
    { name: "Over Ons", path: "/over-ons" }
  ];

  const mobileNavLinks = [
    ...navLinks,
    { name: "Onze Diensten", path: "/onze-diensten" },
    { name: "Kwetsbaarheidsanalyse", path: "/kwetsbaarheidsanalyse" },
    { name: "Automatische AI Pentesten", path: "/automatische-ai-pentesten" }
  ];

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 text-transparent bg-clip-text"
          >
            HuntAI
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-gray-300 hover:text-white transition-colors ${
                  location === link.path ? "text-white" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher currentLang="nl" />
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              <Link to="/contact">
                Request Demo
              </Link>
            </Button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-300"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {mobileNavLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-gray-300 hover:text-white transition-colors py-2 ${
                  location === link.path ? "text-white" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full">
              <Link 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Request Demo
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
