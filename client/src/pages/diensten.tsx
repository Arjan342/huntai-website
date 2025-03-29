import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, Shield, Activity, Lock, HelpCircle } from 'lucide-react';

const DienstenPage: React.FC = () => {
  const services = [
    {
      id: 'automatische-ai-pentesten',
      icon: <Shield className="h-8 w-8 text-purple-400" />,
      title: 'Automatische AI Pentesten',
      description: 'Onze AI-gestuurde pentesten identificeren kwetsbaarheden in uw systemen met ongekende precisie en snelheid. Door gebruik te maken van machine learning-algoritmen kunnen we patronen herkennen die traditionele methoden missen.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'kwetsbaarheidsanalyse',
      icon: <Activity className="h-8 w-8 text-blue-400" />,
      title: 'Kwetsbaarheidsanalyse',
      description: 'Onze diepgaande kwetsbaarheidsanalyses gebruiken AI om uw digitale infrastructuur te scannen en potentiële risico\'s te identificeren voordat ze kunnen worden uitgebuit door kwaadwillenden.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'digitale-weerbaarheid',
      icon: <Lock className="h-8 w-8 text-teal-400" />,
      title: 'Digitale Weerbaarheid',
      description: 'Versterk uw digitale weerbaarheid met onze AI-gestuurde oplossingen die voortdurend leren en zich aanpassen aan nieuwe bedreigingen in het cyberlandschap.',
      color: 'from-teal-500 to-green-500'
    },
    {
      id: 'security-consulting',
      icon: <HelpCircle className="h-8 w-8 text-violet-400" />,
      title: 'Security Consulting',
      description: 'Onze security experts werken samen met uw team om op maat gemaakte beveiligingsstrategieën te ontwikkelen die aansluiten bij uw specifieke bedrijfsbehoeften en risicoprofiel.',
      color: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Onze Diensten
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              HuntAI biedt geavanceerde AI-gestuurde oplossingen om digitale kwetsbaarheden te identificeren en te verhelpen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:translate-y-[-4px]"
              >
                <div className={`h-14 w-14 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-5">{service.description}</p>
                <Link 
                  to={`/diensten/${service.id}`} 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                >
                  Meer informatie <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Klaar om uw digitale beveiliging naar het volgende niveau te tillen?
            </h2>
            <p className="text-gray-400 mb-8">
              Onze experts staan klaar om u te helpen bij het beschermen van uw digitale assets.
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
  );
};

export default DienstenPage;