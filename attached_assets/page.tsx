'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 text-transparent bg-clip-text">
          Over HuntAI
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Wij combineren geavanceerde AI-technologie met cybersecurity expertise om organisaties te beschermen tegen digitale dreigingen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Onze Missie</h2>
          <p className="text-gray-300 mb-6">
            Bij HuntAI geloven we dat elke organisatie recht heeft op een veilige digitale omgeving. Onze missie is om de kracht van kunstmatige intelligentie te benutten om digitale kwetsbaarheden op te sporen en te verhelpen voordat ze kunnen worden uitgebuit.
          </p>
          <p className="text-gray-300 mb-6">
            We streven ernaar om de meest geavanceerde en effectieve AI-gestuurde beveiligingsoplossingen te ontwikkelen die organisaties helpen hun digitale weerbaarheid te versterken in een steeds complexer wordend cyberlandschap.
          </p>
          <p className="text-gray-300">
            Door voortdurend te innoveren en onze technologie te verfijnen, willen we de standaard zetten voor de toekomst van cybersecurity en organisaties helpen om een stap voor te blijven op cyberdreigingen.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Onze Visie</h2>
          <p className="text-gray-300 mb-6">
            We zien een toekomst waarin AI een centrale rol speelt in het beschermen van digitale infrastructuren. Door machine learning en geavanceerde algoritmen in te zetten, kunnen we patronen herkennen die voor mensen onzichtbaar blijven en proactief handelen voordat schade ontstaat.
          </p>
          <p className="text-gray-300 mb-6">
            Onze visie is een wereld waarin organisaties zich kunnen concentreren op hun kernactiviteiten, wetende dat hun digitale omgeving wordt beschermd door intelligente systemen die voortdurend leren en zich aanpassen aan nieuwe bedreigingen.
          </p>
          <p className="text-gray-300">
            We geloven dat de combinatie van menselijke expertise en kunstmatige intelligentie de sleutel is tot effectieve cybersecurity in het digitale tijdperk.
          </p>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Waarom HuntAI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI-gedreven Analyses</h3>
            <p className="text-gray-400">
              Onze geavanceerde AI-algoritmen detecteren kwetsbaarheden die traditionele methoden missen.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-full bg-gradient-to-r from-purple-600 to-teal-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Team</h3>
            <p className="text-gray-400">
              Ons team bestaat uit ervaren cybersecurity professionals met diepgaande kennis van de nieuwste bedreigingen.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Proactieve Benadering</h3>
            <p className="text-gray-400">
              We wachten niet op incidenten, maar zoeken actief naar kwetsbaarheden voordat ze kunnen worden uitgebuit.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Klaar om samen te werken?</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          Neem contact met ons op om te bespreken hoe HuntAI uw organisatie kan helpen bij het versterken van uw digitale weerbaarheid.
        </p>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg">
          Neem contact met ons op
        </Button>
      </div>
    </div>
  )
}
