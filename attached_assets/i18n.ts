export const defaultLocale = 'nl'
export const locales = ['nl', 'en']

export type Locale = (typeof locales)[number]

export function getLocalePartsFrom(path: string) {
  const pathnameParts = path.split('/')
  const locale = pathnameParts[1] as Locale
  const isValidLocale = locales.includes(locale)
  
  return {
    locale: isValidLocale ? locale : defaultLocale,
    pathname: isValidLocale ? `/${pathnameParts.slice(2).join('/')}` : path,
  }
}

export function getPathWithLocale(path: string, locale: Locale) {
  return `/${locale}${path.startsWith('/') ? path : `/${path}`}`
}

export const dictionary = {
  nl: {
    // Navigation
    'home': 'Home',
    'services': 'Diensten',
    'news': 'Nieuws',
    'use_cases': 'Use Cases',
    'about': 'Over Ons',
    'contact': 'Contact',
    'contact_us': 'Neem contact op',
    
    // Homepage
    'hero_title': 'Digitale Kwetsbaarheden Detecteren met AI',
    'hero_subtitle': 'HuntAI is gespecialiseerd in het zoeken en aantonen van digitale kwetsbaarheden van organisaties door de inzet van geavanceerde AI-technologie.',
    'our_services': 'Onze Diensten',
    'contact_us_button': 'Contact Opnemen',
    'why_choose_huntai': 'Waarom Kiezen voor HuntAI?',
    'ai_solutions': 'Onze AI-gestuurde oplossingen bieden ongekende bescherming tegen digitale dreigingen.',
    'advanced_protection': 'Geavanceerde Bescherming',
    'advanced_protection_desc': 'Onze AI-algoritmen detecteren en beschermen tegen de nieuwste cyberdreigingen.',
    'fast_detection': 'Snelle Detectie',
    'fast_detection_desc': 'Identificeer kwetsbaarheden in real-time voordat ze kunnen worden uitgebuit.',
    'data_driven': 'Data-gedreven Inzichten',
    'data_driven_desc': 'Gedetailleerde rapportages en analyses voor een compleet beeld van uw beveiligingsstatus.',
    'compliance': 'Compliance Garantie',
    'compliance_desc': 'Voldoe aan de nieuwste regelgeving en standaarden voor digitale beveiliging.',
    'services_title': 'Onze Diensten',
    'services_subtitle': 'HuntAI biedt een breed scala aan AI-gestuurde beveiligingsdiensten.',
    'view_all_services': 'Bekijk al onze diensten',
    'latest_news': 'Laatste Nieuws',
    'news_subtitle': 'Blijf op de hoogte van de nieuwste ontwikkelingen in cybersecurity en AI.',
    'view_all_news': 'Bekijk al het nieuws',
    'ready_cta': 'Klaar om uw digitale beveiliging te versterken?',
    'cta_subtitle': 'Neem vandaag nog contact met ons op voor een gratis beveiligingsscan en ontdek hoe HuntAI uw organisatie kan beschermen.',
    
    // Services
    'ai_pentests': 'Automatische AI Pentesten',
    'ai_pentests_desc': 'Onze AI-gestuurde pentesten identificeren kwetsbaarheden in uw systemen met ongekende precisie en snelheid.',
    'vulnerability_analysis': 'Kwetsbaarheidsanalyse',
    'vulnerability_analysis_desc': 'Diepgaande analyses van uw digitale infrastructuur om potentiële risicos te identificeren.',
    'more_info': 'Meer informatie',
    
    // News
    'news_insights': 'Nieuws & Inzichten',
    'news_page_subtitle': 'Blijf op de hoogte van de laatste ontwikkelingen in digitale weerbaarheid en de inzet van AI in cybersecurity.',
    'read_more': 'Lees meer',
    'newsletter': 'Abonneer op onze nieuwsbrief',
    'newsletter_desc': 'Ontvang maandelijks de nieuwste inzichten, trends en tips op het gebied van AI-gestuurde cybersecurity direct in uw inbox.',
    'your_email': 'Uw e-mailadres',
    'subscribe': 'Abonneren',
    'interested_services': 'Interesse in onze diensten?',
    'discover_services': 'Ontdek hoe HuntAI uw organisatie kan helpen bij het versterken van uw digitale beveiliging.',
    'view_services': 'Bekijk onze diensten',
    'view_use_cases': 'Bekijk onze use cases',
    
    // Use Cases
    'use_cases_title': 'Use Cases',
    'use_cases_subtitle': 'Ontdek hoe organisaties in verschillende sectoren hun digitale beveiliging hebben verbeterd met de AI-gestuurde oplossingen van HuntAI.',
    'read_full_case': 'Lees de volledige case study',
    'sectors_title': 'Sectoren die we bedienen',
    'financial_sector': 'Financiële Sector',
    'financial_sector_desc': 'Banken, verzekeraars en andere financiële instellingen die gevoelige klantgegevens beschermen.',
    'healthcare': 'Gezondheidszorg',
    'healthcare_desc': 'Ziekenhuizen, klinieken en zorginstellingen die patiëntgegevens en medische systemen beveiligen.',
    'government': 'Overheid',
    'government_desc': 'Overheidsinstanties die gevoelige informatie en kritieke infrastructuur beschermen.',
    'manufacturing': 'Productie',
    'manufacturing_desc': 'Productiebedrijven die hun intellectueel eigendom en productiesystemen beveiligen.',
    'retail': 'Retail',
    'retail_desc': 'Retailbedrijven die klantgegevens en betalingssystemen beschermen tegen cyberdreigingen.',
    'education': 'Onderwijs',
    'education_desc': 'Onderwijsinstellingen die studentgegevens en onderzoeksinformatie beschermen.',
    'create_success': 'Klaar om uw eigen succesverhaal te creëren?',
    'discuss_security': 'Neem contact met ons op om te bespreken hoe HuntAI uw organisatie kan helpen bij het versterken van uw digitale beveiliging.',
    
    // Contact
    'contact_title': 'Neem Contact Met Ons Op',
    'contact_subtitle': 'Heeft u vragen over onze diensten of wilt u weten hoe HuntAI uw organisatie kan helpen? Neem contact met ons op en we helpen u graag verder.',
    'send_message': 'Stuur ons een bericht',
    'name': 'Naam',
    'email': 'E-mail',
    'phone': 'Telefoonnummer',
    'company': 'Bedrijf',
    'message': 'Bericht',
    'send': 'Verstuur bericht',
    'sending': 'Verzenden...',
    'message_sent': 'Bericht verzonden!',
    'thanks_message': 'Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.',
    'new_message': 'Nieuw bericht versturen',
    'contact_details': 'Contactgegevens',
    'address': 'Adres',
    'office_hours': 'Kantooruren',
    'monday_friday': 'Maandag - Vrijdag',
    'saturday': 'Zaterdag',
    'sunday': 'Zondag',
    'closed': 'Gesloten',
    'faq': 'Veelgestelde vragen',
    'ready_strengthen': 'Klaar om uw digitale beveiliging te versterken?',
    'schedule_call': 'Plan een gesprek',
    
    // Footer
    'quick_links': 'Snelle Links',
    'about_us': 'Over Ons',
    'copyright': 'Alle rechten voorbehouden.',
  },
  en: {
    // Navigation
    'home': 'Home',
    'services': 'Services',
    'news': 'News',
    'use_cases': 'Use Cases',
    'about': 'About Us',
    'contact': 'Contact',
    'contact_us': 'Contact Us',
    
    // Homepage
    'hero_title': 'Detecting Digital Vulnerabilities with AI',
    'hero_subtitle': 'HuntAI specializes in finding and demonstrating digital vulnerabilities of organizations through the use of advanced AI technology.',
    'our_services': 'Our Services',
    'contact_us_button': 'Contact Us',
    'why_choose_huntai': 'Why Choose HuntAI?',
    'ai_solutions': 'Our AI-driven solutions offer unprecedented protection against digital threats.',
    'advanced_protection': 'Advanced Protection',
    'advanced_protection_desc': 'Our AI algorithms detect and protect against the latest cyber threats.',
    'fast_detection': 'Fast Detection',
    'fast_detection_desc': 'Identify vulnerabilities in real-time before they can be exploited.',
    'data_driven': 'Data-driven Insights',
    'data_driven_desc': 'Detailed reports and analyses for a complete picture of your security status.',
    'compliance': 'Compliance Guarantee',
    'compliance_desc': 'Meet the latest regulations and standards for digital security.',
    'services_title': 'Our Services',
    'services_subtitle': 'HuntAI offers a wide range of AI-driven security services.',
    'view_all_services': 'View all our services',
    'latest_news': 'Latest News',
    'news_subtitle': 'Stay up to date with the latest developments in cybersecurity and AI.',
    'view_all_news': 'View all news',
    'ready_cta': 'Ready to strengthen your digital security?',
    'cta_subtitle': 'Contact us today for a free security scan and discover how HuntAI can protect your organization.',
    
    // Services
    'ai_pentests': 'Automatic AI Pentests',
    'ai_pentests_desc': 'Our AI-driven pentests identify vulnerabilities in your systems with unprecedented precision and speed.',
    'vulnerability_analysis': 'Vulnerability Analysis',
    'vulnerability_analysis_desc': 'In-depth analyses of your digital infrastructure to identify potential risks.',
    'more_info': 'More information',
    
    // News
    'news_insights': 'News & Insights',
    'news_page_subtitle': 'Stay up to date with the latest developments in digital resilience and the use of AI in cybersecurity.',
    'read_more': 'Read more',
    'newsletter': 'Subscribe to our newsletter',
    'newsletter_desc': 'Receive monthly insights, trends, and tips on AI-driven cybersecurity directly in your inbox.',
    'your_email': 'Your email address',
    'subscribe': 'Subscribe',
    'interested_services': 'Interested in our services?',
    'discover_services': 'Discover how HuntAI can help your organization strengthen its digital security.',
    'view_services': 'View our services',
    'view_use_cases': 'View our use cases',
    
    // Use Cases
    'use_cases_title': 'Use Cases',
    'use_cases_subtitle': 'Discover how organizations in various sectors have improved their digital security with HuntAI\'s AI-driven solutions.',
    'read_full_case': 'Read the full case study',
    'sectors_title': 'Sectors we serve',
    'financial_sector': 'Financial Sector',
    'financial_sector_desc': 'Banks, insurers, and other financial institutions protecting sensitive customer data.',
    'healthcare': 'Healthcare',
    'healthcare_desc': 'Hospitals, clinics, and healthcare institutions securing patient data and medical systems.',
    'government': 'Government',
    'government_desc': 'Government agencies protecting sensitive information and critical infrastructure.',
    'manufacturing': 'Manufacturing',
    'manufacturing_desc': 'Manufacturing companies protecting their intellectual property and production systems.',
    'retail': 'Retail',
    'retail_desc': 'Retail companies protecting customer data and payment systems against cyber threats.',
    'education': 'Education',
    'education_desc': 'Educational institutions protecting student data and research information.',
    'create_success': 'Ready to create your own success story?',
    'discuss_security': 'Contact us to discuss how HuntAI can help your organization strengthen its digital security.',
    
    // Contact
    'contact_title': 'Contact Us',
    'contact_subtitle': 'Do you have questions about our services or want to know how HuntAI can help your organization? Contact us and we\'ll be happy to help.',
    'send_message': 'Send us a message',
    'name': 'Name',
    'email': 'Email',
    'phone': 'Phone number',
    'company': 'Company',
    'message': 'Message',
    'send': 'Send message',
    'sending': 'Sending...',
    'message_sent': 'Message sent!',
    'thanks_message': 'Thank you for your message. We will contact you as soon as possible.',
    'new_message': 'Send new message',
    'contact_details': 'Contact details',
    'address': 'Address',
    'office_hours': 'Office hours',
    'monday_friday': 'Monday - Friday',
    'saturday': 'Saturday',
    'sunday': 'Sunday',
    'closed': 'Closed',
    'faq': 'Frequently Asked Questions',
    'ready_strengthen': 'Ready to strengthen your digital security?',
    'schedule_call': 'Schedule a call',
    
    // Footer
    'quick_links': 'Quick Links',
    'about_us': 'About Us',
    'copyright': 'All rights reserved.',
  }
}
