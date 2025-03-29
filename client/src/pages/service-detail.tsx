import React from 'react';
import { useRoute, Link } from 'wouter';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const serviceData = {
  'automatische-ai-pentesten': {
    title: 'Automatische AI Pentesten',
    subtitle: 'Identificeer kwetsbaarheden met ongekende precisie en snelheid',
    description: 'Onze AI-gestuurde pentesten identificeren kwetsbaarheden in uw systemen met ongekende precisie en snelheid. Door gebruik te maken van machine learning-algoritmen kunnen we patronen herkennen die traditionele methoden missen.',
    features: [
      'Continu scannen op beveiligingslekken',
      'AI-gestuurde analyse van netwerkverkeer',
      'Detectie van zero-day kwetsbaarheden',
      'Automatische rapportage en prioritering',
      'Integratie met uw bestaande beveiligingsoplossingen'
    ],
    benefits: [
      'Verhoogde detectiegraad van potentiële kwetsbaarheden',
      'Lagere kosten door automatisering van pentestprocessen',
      'Kortere doorlooptijden voor veiligheidsaudits',
      'Diepgaande inzichten die menselijke testers mogelijk missen',
      'Continue beveiliging in plaats van momentopnamen'
    ],
    color: 'from-purple-500 to-indigo-500',
    icon: '🛡️'
  },
  'kwetsbaarheidsanalyse': {
    title: 'Kwetsbaarheidsanalyse',
    subtitle: 'Scan uw digitale infrastructuur op potentiële risico\'s',
    description: 'Onze diepgaande kwetsbaarheidsanalyses gebruiken AI om uw digitale infrastructuur te scannen en potentiële risico\'s te identificeren voordat ze kunnen worden uitgebuit door kwaadwillenden.',
    features: [
      'Uitgebreide scans van netwerken, systemen en applicaties',
      'Gedetailleerde risicobeoordelingen',
      'Prioritering van kwetsbaarheden op basis van bedrijfsimpact',
      'Aanbevelingen voor risicovermindering',
      'Compliance-verificatie voor diverse standaarden'
    ],
    benefits: [
      'Vroege identificatie van beveiligingsrisico\'s',
      'Verminderde kans op succesvolle cyberaanvallen',
      'Beter inzicht in uw beveiligingsstatus',
      'Ondersteuning bij compliance-vereisten',
      'Kosteneffectieve risicovermindering'
    ],
    color: 'from-blue-500 to-cyan-500',
    icon: '📊'
  },
  'digitale-weerbaarheid': {
    title: 'Digitale Weerbaarheid',
    subtitle: 'Versterk uw cyberverdediging tegen opkomende bedreigingen',
    description: 'Versterk uw digitale weerbaarheid met onze AI-gestuurde oplossingen die voortdurend leren en zich aanpassen aan nieuwe bedreigingen in het cyberlandschap.',
    features: [
      'Adaptieve beveiligingsmaatregelen',
      'Trainingen voor bewustwording van cybersecurity',
      'Respons op incidenten en herstelplanning',
      'Continuïteitsmanagement',
      'Beveiligingsarchitectuur ontwerp'
    ],
    benefits: [
      'Verbeterde weerstand tegen geavanceerde aanvallen',
      'Snellere detectie en respons op incidenten',
      'Minimalisatie van downtime en datalekken',
      'Versterkt vertrouwen van klanten en partners',
      'Toekomstbestendige beveiligingsstrategie'
    ],
    color: 'from-teal-500 to-green-500',
    icon: '🔒'
  },
  'security-consulting': {
    title: 'Security Consulting',
    subtitle: 'Op maat gemaakte beveiligingsstrategieën voor uw organisatie',
    description: 'Onze security experts werken samen met uw team om op maat gemaakte beveiligingsstrategieën te ontwikkelen die aansluiten bij uw specifieke bedrijfsbehoeften en risicoprofiel.',
    features: [
      'Strategische beveiligingsplanning',
      'Beveiligingsaudits en -assessments',
      'Begeleiding bij beveiligingsprogramma\'s',
      'Naleving van regelgeving en framework-implementatie',
      'Training en ontwikkeling van beveiligingsteams'
    ],
    benefits: [
      'Expertise op maat voor uw specifieke behoeften',
      'Optimalisatie van beveiligingsinvesteringen',
      'Objectief perspectief op uw beveiligingsstatus',
      'Begeleiding bij complexe beveiligingsuitdagingen',
      'Toegang tot gespecialiseerde beveiligingskennis'
    ],
    color: 'from-violet-500 to-purple-500',
    icon: '💼'
  }
};

const ServiceDetailPage: React.FC = () => {
  const [, params] = useRoute('/diensten/:id');
  const serviceId = params?.id || '';
  const service = serviceData[serviceId as keyof typeof serviceData];

  if (!service) {
    return <div className="container mx-auto px-4 py-20 text-center">Service niet gevonden</div>;
  }

  return (
    <div className="min-h-screen">
      <div className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <Link to="/diensten">
            <button className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Terug naar alle diensten
            </button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <span className="text-4xl mb-4 inline-block">{service.icon}</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl text-gray-300 mb-6">{service.subtitle}</p>
              <div className={`h-1 w-24 rounded bg-gradient-to-r ${service.color}`}></div>
            </div>

            <div className="mb-12">
              <p className="text-lg text-gray-300">{service.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-6 text-white">Kenmerken</h2>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex">
                      <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-6 text-white">Voordelen</h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex">
                      <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Klaar om uw digitale beveiliging te versterken?
              </h2>
              <p className="text-gray-400 mb-8">
                Laat onze experts u helpen bij het implementeren van {service.title.toLowerCase()}.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-8 rounded-md font-medium transition-colors"
              >
                Neem contact met ons op
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;