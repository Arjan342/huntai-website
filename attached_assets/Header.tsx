'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { Locale, dictionary } from '@/lib/i18n'

interface HeaderProps {
  locale: Locale
}

const Header = ({ locale }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = dictionary[locale]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const localePrefix = locale === 'nl' ? '' : `/${locale}`

  return (
    <header className="w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 fixed top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={`${localePrefix}/`} className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 text-transparent bg-clip-text">
            HuntAI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href={`${localePrefix}/`} className="text-gray-300 hover:text-white transition-colors">
            {t.home}
          </Link>
          <Link href={`${localePrefix}/services`} className="text-gray-300 hover:text-white transition-colors">
            {t.services}
          </Link>
          <Link href={`${localePrefix}/news`} className="text-gray-300 hover:text-white transition-colors">
            {t.news}
          </Link>
          <Link href={`${localePrefix}/use-cases`} className="text-gray-300 hover:text-white transition-colors">
            {t.use_cases}
          </Link>
          <Link href={`${localePrefix}/about`} className="text-gray-300 hover:text-white transition-colors">
            {t.about}
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            <Link href={`${localePrefix}/contact`}>
              {t.contact_us}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <LanguageSwitcher />
          <button className="ml-4 text-gray-300" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href={`${localePrefix}/`}
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={toggleMenu}
            >
              {t.home}
            </Link>
            <Link 
              href={`${localePrefix}/services`}
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={toggleMenu}
            >
              {t.services}
            </Link>
            <Link 
              href={`${localePrefix}/news`}
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={toggleMenu}
            >
              {t.news}
            </Link>
            <Link 
              href={`${localePrefix}/use-cases`}
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={toggleMenu}
            >
              {t.use_cases}
            </Link>
            <Link 
              href={`${localePrefix}/about`}
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={toggleMenu}
            >
              {t.about}
            </Link>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full">
              <Link href={`${localePrefix}/contact`} onClick={toggleMenu}>
                {t.contact_us}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header