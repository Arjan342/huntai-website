'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Locale, defaultLocale, locales, getPathWithLocale } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'
import { useState } from 'react'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  // Determine current locale from pathname
  const currentLocale = pathname.startsWith('/en') ? 'en' : 'nl'
  
  // Get path without locale prefix
  const getBasePath = (path: string, locale: string) => {
    if (path.startsWith(`/${locale}`)) {
      return path.substring(locale.length + 1) || '/'
    }
    return path
  }
  
  const basePath = currentLocale === defaultLocale 
    ? pathname 
    : getBasePath(pathname, currentLocale)
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <Button 
        variant="ghost" 
        size="sm" 
        className="flex items-center gap-1 text-gray-300 hover:text-white"
        onClick={toggleDropdown}
      >
        <Globe className="h-4 w-4" />
        <span className="uppercase">{currentLocale}</span>
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-gray-900 border border-gray-800 rounded-md shadow-lg z-50">
          {locales.map((locale) => (
            <Link
              key={locale}
              href={locale === defaultLocale ? basePath : getPathWithLocale(basePath, locale as Locale)}
              className={`block px-4 py-2 text-sm ${
                currentLocale === locale ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {locale === 'nl' ? 'Nederlands' : 'English'}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
