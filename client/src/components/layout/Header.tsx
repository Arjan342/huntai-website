"use client";

import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Diensten", path: "/diensten" },
    { name: "Nieuws", path: "/nieuws" },
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
    <header className="fixed w-full bg-secondary/80 backdrop-blur-sm z-50">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link href="/">
              <a className="text-xl font-bold text-white">HuntAI</a>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path}>
                      <a className={`text-white hover:text-accent transition ${
                        location === link.path ? "text-accent" : ""
                      }`}>{link.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-accent transition">NL</button>
            <Button className="bg-primary text-white hover:bg-primary/90 transition">
              Request Demo
            </Button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden text-white hover:text-accent"
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
      <div className={`md:hidden bg-secondary ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-6 py-4 space-y-3">
          {mobileNavLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <a 
                className={`block text-white hover:text-accent transition ${
                  location === link.path ? "text-accent" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
