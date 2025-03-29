import React, { useState } from "react";
import { useLocation } from "wouter";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const locales = ['nl', 'en'];
const defaultLocale = 'nl';

interface LanguageSwitcherProps {
  currentLang: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Button 
        variant="ghost" 
        size="sm" 
        className="flex items-center gap-1 text-gray-300 hover:text-white"
        onClick={toggleDropdown}
      >
        <Globe className="h-4 w-4" />
        <span className="uppercase">{currentLang}</span>
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-gray-900 border border-gray-800 rounded-md shadow-lg z-50">
          {locales.map((locale) => (
            <div
              key={locale}
              role="button"
              tabIndex={0}
              className={`block px-4 py-2 text-sm cursor-pointer ${
                currentLang === locale ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800'
              }`}
              onClick={() => {
                // Hier zou de taalwissel-logica komen
                // Voor nu gebruiken we een placeholder die naar de homepage navigeert
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
              {locale === 'nl' ? 'Nederlands' : 'English'}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;