'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import { Locale, dictionary } from '@/lib/i18n'

interface FooterProps {
  locale: Locale
}

const Footer = ({ locale }: FooterProps) => {
  const t = dictionary[locale]
  const localePrefix = locale === 'nl' ? '' : `/${locale}`
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href={`${localePrefix}/`} className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 text-transparent bg-clip-text">
                HuntAI
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              {locale === 'nl' 
                ? 'Gespecialiseerd in het zoeken en aantonen van digitale kwetsbaarheden door de inzet van AI.'
                : 'Specialized in finding and demonstrating digital vulnerabilities through the use of AI.'}
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
            <h3 className="text-lg font-semibold mb-4">{t.quick_links}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`${localePrefix}/`} className="text-gray-400 hover:text-white transition-colors">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href={`${localePrefix}/services`} className="text-gray-400 hover:text-white transition-colors">
                  {t.services}
                </Link>
              </li>
              <li>
                <Link href={`${localePrefix}/news`} className="text-gray-400 hover:text-white transition-colors">
                  {t.news}
                </Link>
              </li>
              <li>
                <Link href={`${localePrefix}/about`} className="text-gray-400 hover:text-white transition-colors">
                  {t.about_us}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.services}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`${localePrefix}/services/ai-pentests`} className="text-gray-400 hover:text-white transition-colors">
                  {t.ai_pentests}
                </Link>
              </li>
              <li>
                <Link href={`${localePrefix}/services/vulnerability-analysis`} className="text-gray-400 hover:text-white transition-colors">
                  {t.vulnerability_analysis}
                </Link>
              </li>
              <li>
                <Link href={`${localePrefix}/services/digital-resilience`} className="text-gray-400 hover:text-white transition-colors">
                  {locale === 'nl' ? 'Digitale Weerbaarheid' : 'Digital Resilience'}
                </Link>
              </li>
              <li>
                <Link href={`${localePrefix}/services/security-consulting`} className="text-gray-400 hover:text-white transition-colors">
                  {locale === 'nl' ? 'Security Consulting' : 'Security Consulting'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
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
                <span className="text-gray-400">Amsterdam, {locale === 'nl' ? 'Nederland' : 'Netherlands'}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} HuntAI. {t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
