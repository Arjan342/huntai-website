import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft, CheckCircle, Activity } from 'lucide-react';

const KwetsbaarheidsanalysePage: React.FC = () => {
  const service = {
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
  };

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
              <div className={`h-14 w-14 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                <Activity className="h-8 w-8 text-white" />
              </div>
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

export default KwetsbaarheidsanalysePage;