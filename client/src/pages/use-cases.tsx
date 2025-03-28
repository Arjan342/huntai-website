import React from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

// UI componenten
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Layout
import Layout from '@/components/layout/Layout';

// Gegevens van use cases
const useCases = [
  {
    id: 'financial-institution',
    title: 'Financiële Instelling Verbetert Beveiliging met AI',
    description: 'Een toonaangevende bank versterkt haar digitale weerbaarheid en reduceert succesvolle phishing-aanvallen met 85% dankzij AI-gestuurde beveiligingsoplossingen.',
    category: 'Financiële Sector',
    results: ['85% minder phishing-aanvallen', '70% snellere detectie', '60% snellere reactietijd'],
    image: '/placeholder-finance.jpg'
  },
  {
    id: 'healthcare-provider',
    title: 'Zorginstelling Beschermt Patiëntgegevens met AI',
    description: 'Een grote Nederlandse zorginstelling implementeert geavanceerde AI-beveiligingsmaatregelen om gevoelige patiëntgegevens te beschermen en te voldoen aan strikte regelgeving.',
    category: 'Gezondheidszorg',
    results: ['90% snellere detectie', '100% compliance', 'Zero downtime'],
    image: '/placeholder-healthcare.jpg'
  },
  {
    id: 'government-agency',
    title: 'Overheidsinstantie Beveiligt Kritieke Infrastructuur',
    description: 'Een Nederlandse overheidsinstantie gebruikt AI-pentesting en monitoring om geavanceerde aanvallen te detecteren en kritieke infrastructuur te beschermen.',
    category: 'Overheid',
    results: ['95% vermindering kwetsbaarheden', '24/7 realtime monitoring', 'Verbeterde weerbaarheid'],
    image: '/placeholder-government.jpg'
  },
  {
    id: 'manufacturing-company',
    title: 'Productiebedrijf Beschermt OT/IT Netwerken',
    description: 'Een groot productiebedrijf implementeert segmentatie en AI-monitoring om de convergentie van operationele technologie (OT) en IT-netwerken veilig te faciliteren.',
    category: 'Industrie',
    results: ['80% betere zichtbaarheid', 'Geïsoleerde kritieke systemen', 'Veilige digitale transformatie'],
    image: '/placeholder-manufacturing.jpg'
  }
];

const UseCasesPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Use Cases</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ontdek hoe onze geavanceerde AI-gestuurde beveiligingsoplossingen 
            organisaties in verschillende sectoren hebben geholpen om hun digitale weerbaarheid 
            te versterken en gevoelige gegevens te beschermen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase) => (
            <Card key={useCase.id} className="bg-gray-900 border border-gray-800 transition-all hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
                    {useCase.category}
                  </Badge>
                </div>
                <CardTitle className="text-2xl mt-4 mb-2">{useCase.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {useCase.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-300">Resultaten:</h4>
                  <ul className="space-y-1">
                    {useCase.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  asChild 
                  variant="ghost" 
                  className="w-full justify-between text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                >
                  <Link to={`/use-case/${useCase.id}`}>
                    Lees de volledige case study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default UseCasesPage;