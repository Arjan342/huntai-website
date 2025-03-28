import React from 'react';
import { Link, useRoute, useLocation } from 'wouter';
import { ArrowLeft } from 'lucide-react';

// Layout
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

// Dummydata voor use cases
type UseCaseData = {
  title: string;
  subtitle: string;
  category: string;
  challenge: string;
  solution: string;
  results: string;
  lessons: string;
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
};

type UseCasesDataType = {
  [key: string]: UseCaseData;
};

const useCasesData: UseCasesDataType = {
  'financial-institution': {
    title: 'Financiële Instelling Verbetert Beveiliging met AI',
    subtitle: 'Een toonaangevende bank versterkt haar digitale weerbaarheid',
    category: 'Financiële Sector',
    challenge: `
      <p>Een toonaangevende Nederlandse bank stond voor aanzienlijke uitdagingen op het gebied van cybersecurity. Met miljoenen klanten en een groeiend aantal digitale diensten werd de bank een steeds aantrekkelijker doelwit voor cybercriminelen.</p>
      
      <p>De specifieke uitdagingen waren:</p>
      <ul>
        <li>Een toenemend aantal geavanceerde phishing-aanvallen gericht op zowel medewerkers als klanten</li>
        <li>Complexe IT-infrastructuur met honderden applicaties en systemen die moeilijk te monitoren waren</li>
        <li>Strenge regelgeving die uitgebreide beveiligingsmaatregelen en rapportage vereist</li>
        <li>De noodzaak om snel te reageren op beveiligingsincidenten om financiële verliezen te minimaliseren</li>
      </ul>
      
      <p>Traditionele beveiligingsmaatregelen bleken ontoereikend om deze uitdagingen effectief aan te pakken, wat resulteerde in meerdere beveiligingsincidenten per maand.</p>
    `,
    solution: `
      <p>In samenwerking met HuntAI implementeerde de bank een uitgebreide AI-gestuurde beveiligingsoplossing die bestond uit:</p>
      
      <ol>
        <li><strong>AI-gestuurde dreigingsdetectie:</strong> Een systeem dat netwerkverkeer in real-time analyseert om afwijkingen te identificeren die kunnen wijzen op een beveiligingsincident.</li>
        <li><strong>Automatische respons:</strong> Geautomatiseerde workflows die onmiddellijk reageren op gedetecteerde dreigingen, zoals het isoleren van gecompromitteerde systemen.</li>
        <li><strong>Gebruikersgedragsanalyse:</strong> AI-algoritmen die het normale gedrag van gebruikers leren en afwijkingen signaleren die kunnen wijzen op een gecompromitteerd account.</li>
        <li><strong>Geavanceerde phishing-bescherming:</strong> Een systeem dat e-mails analyseert op subtiele indicatoren van phishing die traditionele filters missen.</li>
      </ol>
      
      <p>De implementatie werd gefaseerd uitgevoerd over een periode van zes maanden, beginnend met de meest kritieke systemen en geleidelijk uitbreidend naar de gehele organisatie.</p>
    `,
    results: `
      <p>Na de volledige implementatie van de AI-gestuurde beveiligingsoplossingen zag de bank indrukwekkende resultaten:</p>
      
      <ul>
        <li><strong>85% vermindering</strong> van succesvolle phishing-aanvallen</li>
        <li><strong>70% snellere detectie</strong> van beveiligingsincidenten</li>
        <li><strong>60% vermindering</strong> van de gemiddelde tijd om een incident op te lossen</li>
        <li><strong>90% vermindering</strong> van valse positieven, waardoor het beveiligingsteam zich kon concentreren op echte dreigingen</li>
      </ul>
      
      <p>"De implementatie van AI-gestuurde beveiligingsoplossingen heeft een transformatief effect gehad op onze cybersecurity-posture," aldus de CISO van de bank. "We hebben niet alleen het aantal incidenten drastisch verminderd, maar ook onze capaciteit om snel en effectief te reageren op dreigingen aanzienlijk verbeterd."</p>
    `,
    lessons: `
      <p>Het succes van dit project kan worden toegeschreven aan verschillende factoren:</p>
      
      <ul>
        <li>Een gefaseerde implementatieaanpak die prioriteit gaf aan kritieke systemen</li>
        <li>Nauwe samenwerking tussen het interne beveiligingsteam en externe experts</li>
        <li>Uitgebreide training voor beveiligingspersoneel om effectief met de nieuwe technologieën te werken</li>
        <li>Continue verfijning en optimalisatie van de AI-modellen op basis van feedback en resultaten</li>
      </ul>
      
      <p>Deze case study illustreert hoe AI-gestuurde beveiligingsoplossingen, wanneer correct geïmplementeerd, een transformatief effect kunnen hebben op de cybersecurity-posture van financiële instellingen en andere organisaties die met gevoelige gegevens werken.</p>
    `,
    testimonial: {
      quote: "De AI-gestuurde beveiligingsoplossingen van HuntAI hebben onze capaciteit om cyberdreigingen te detecteren en erop te reageren fundamenteel getransformeerd.",
      author: "Jan de Vries",
      position: "CISO, Toonaangevende Nederlandse Bank"
    }
  },
  'healthcare-provider': {
    title: 'Zorginstelling Beschermt Patiëntgegevens met AI',
    subtitle: 'Een grote zorginstelling versterkt de beveiliging van gevoelige medische data',
    category: 'Gezondheidszorg',
    challenge: `
      <p>Een grote Nederlandse zorginstelling met meerdere locaties en duizenden patiënten stond voor aanzienlijke uitdagingen bij het beschermen van gevoelige patiëntgegevens en medische systemen tegen cyberdreigingen.</p>
      
      <p>De specifieke uitdagingen waren:</p>
      <ul>
        <li>Toenemende regelgeving rondom de bescherming van patiëntgegevens (AVG, NEN7510)</li>
        <li>Verouderde IT-systemen die moeilijk te beveiligen waren</li>
        <li>Beperkte cybersecurity-expertise binnen de organisatie</li>
        <li>Groeiend aantal gerichte aanvallen op zorginstellingen</li>
        <li>Complexe netwerkomgeving met medische apparatuur, patiëntendossiers en administratieve systemen</li>
      </ul>
      
      <p>Een recente ransomware-aanval bij een vergelijkbare instelling had de urgentie van verbeterde beveiliging onderstreept.</p>
    `,
    solution: `
      <p>HuntAI ontwikkelde een op maat gemaakte beveiligingsoplossing voor de zorginstelling, met speciale aandacht voor de unieke uitdagingen in de zorgsector:</p>
      
      <ol>
        <li><strong>Geavanceerde kwetsbaarheidsanalyse:</strong> Een uitgebreide scan van alle systemen om kwetsbaarheden te identificeren, met speciale aandacht voor medische apparatuur en patiëntendossiersystemen.</li>
        <li><strong>AI-gestuurde monitoring:</strong> Implementatie van een intelligent monitoringsysteem dat afwijkend gedrag kan detecteren dat wijst op een mogelijke inbreuk.</li>
        <li><strong>Segmentatie van netwerken:</strong> Herstructurering van het netwerk om kritieke medische systemen te isoleren van algemene administratieve systemen.</li>
        <li><strong>Security awareness training:</strong> Uitgebreide training voor alle medewerkers, met speciale modules voor medisch personeel over het veilig omgaan met patiëntgegevens.</li>
        <li><strong>Incident response plan:</strong> Ontwikkeling van een uitgebreid plan voor het reageren op beveiligingsincidenten, met speciale aandacht voor het waarborgen van de continuïteit van patiëntenzorg.</li>
      </ol>
      
      <p>De implementatie werd zorgvuldig gepland om minimale verstoring van de patiëntenzorg te garanderen.</p>
    `,
    results: `
      <p>Na implementatie van de beveiligingsoplossingen zag de zorginstelling aanzienlijke verbeteringen:</p>
      
      <ul>
        <li><strong>90% snellere detectie</strong> van beveiligingsincidenten</li>
        <li><strong>75% vermindering</strong> van kwetsbaarheden in kritieke systemen</li>
        <li><strong>100% compliance</strong> met NEN7510 en AVG-vereisten</li>
        <li><strong>80% verbetering</strong> in security awareness onder medewerkers</li>
        <li><strong>Zero downtime</strong> van kritieke patiëntzorgsystemen tijdens de implementatie</li>
      </ul>
      
      <p>"De implementatie van deze geavanceerde beveiligingsmaatregelen heeft ons niet alleen geholpen om te voldoen aan regelgeving, maar heeft ook ons vertrouwen vergroot in onze capaciteit om patiëntgegevens te beschermen," aldus de IT-directeur van de zorginstelling.</p>
    `,
    lessons: `
      <p>Deze case study biedt waardevolle inzichten voor andere zorginstellingen:</p>
      
      <ul>
        <li>Het belang van een gespecialiseerde aanpak voor de zorgsector, rekening houdend met de unieke uitdagingen van medische omgevingen</li>
        <li>De effectiviteit van AI bij het detecteren van subtiele afwijkingen die kunnen wijzen op beveiligingsincidenten</li>
        <li>Het belang van balans tussen beveiliging en toegankelijkheid van systemen voor zorgverleners</li>
        <li>De noodzaak van continue training en bewustwording onder alle medewerkers</li>
        <li>Het belang van een uitgebreid incident response plan dat prioriteit geeft aan patiëntenzorg</li>
      </ul>
      
      <p>Deze implementatie toont aan dat zelfs in complexe zorgomgevingen, met de juiste expertise en technologie, aanzienlijke verbeteringen in cybersecurity kunnen worden bereikt zonder de kwaliteit van zorg te compromitteren.</p>
    `,
    testimonial: {
      quote: "De AI-gestuurde beveiligingsoplossingen hebben ons in staat gesteld om patiëntgegevens beter te beschermen zonder de toegankelijkheid voor zorgverleners te beperken.",
      author: "Dr. Maria Jansen",
      position: "IT-directeur, Grote Nederlandse Zorginstelling"
    }
  },
  'government-agency': {
    title: 'Overheidsinstantie Beveiligt Kritieke Infrastructuur',
    subtitle: 'Een Nederlandse overheidsinstantie versterkt de bescherming van vitale infrastructuur',
    category: 'Overheid',
    challenge: `
      <p>Een Nederlandse overheidsinstantie verantwoordelijk voor kritieke infrastructuur stond voor uitdagingen bij het beschermen van essentiële diensten tegen steeds geavanceerdere cyberdreigingen.</p>
      
      <p>De specifieke uitdagingen waren:</p>
      <ul>
        <li>Toenemende dreigingen van staatsgesponsorde hackers gericht op kritieke infrastructuur</li>
        <li>Complexe, verouderde systemen met talrijke kwetsbaarheden</li>
        <li>Strenge nalevingsvereisten voor beveiliging van vitale infrastructuur</li>
        <li>Beperkte zichtbaarheid in het netwerk, waardoor vroege detectie van bedreigingen moeilijk was</li>
        <li>De noodzaak om operationele continuïteit te garanderen, zelfs tijdens beveiligingsincidenten</li>
      </ul>
      
      <p>De instantie had eerder kleinere beveiligingsincidenten meegemaakt die de potentiële risico's voor de nationale veiligheid onderstreepten.</p>
    `,
    solution: `
      <p>HuntAI ontwikkelde een uitgebreid cybersecurity-raamwerk voor de overheidsinstantie:</p>
      
      <ol>
        <li><strong>Geavanceerde dreigingsdetectie:</strong> Implementatie van AI-gestuurde SIEM-oplossingen die geavanceerde dreigingen kunnen detecteren, specifiek gericht op de tactieken van staatsgesponsorde hackers.</li>
        <li><strong>Verbeterde netwerkzichtbaarheid:</strong> Implementatie van sensoren in het hele netwerk om volledig inzicht te krijgen in alle verkeer, inclusief verouderde systemen.</li>
        <li><strong>Proactieve penetratietests:</strong> Regelmatige, geautomatiseerde pentests met AI die worden gebruikt om zwakke plekken te identificeren voordat aanvallers dat doen.</li>
        <li><strong>Zero-trust architectuur:</strong> Implementatie van een zero-trust-model om segmentatie af te dwingen en laterale beweging binnen het netwerk te beperken.</li>
        <li><strong>Incident response automatisering:</strong> Ontwikkeling van geautomatiseerde response-workflows die onmiddellijk kunnen reageren op gedetecteerde bedreigingen.</li>
      </ol>
      
      <p>Het beveiligingsraamwerk werd geïmplementeerd in fasen, met prioriteit voor de meest kritieke systemen.</p>
    `,
    results: `
      <p>Na implementatie van het cybersecurity-raamwerk zag de overheidsinstantie aanzienlijke verbeteringen:</p>
      
      <ul>
        <li><strong>95% vermindering</strong> van identificeerbare kwetsbaarheden in kritieke systemen</li>
        <li><strong>85% snellere detectie</strong> van potentiële bedreigingen</li>
        <li><strong>100% naleving</strong> van alle relevante beveiligingsrichtlijnen</li>
        <li><strong>70% vermindering</strong> van handmatige beveiligingsprocessen door automatisering</li>
        <li><strong>Nul succesvolle aanvallen</strong> sinds de volledige implementatie</li>
      </ul>
      
      <p>"Het nieuwe cybersecurity-raamwerk heeft onze capaciteit om geavanceerde bedreigingen te detecteren en te neutraliseren aanzienlijk verbeterd," aldus het hoofd Cybersecurity van de instantie. "We hebben nu het vertrouwen dat we onze kritieke infrastructuur effectief kunnen beschermen."</p>
    `,
    lessons: `
      <p>Deze case study biedt waardevolle inzichten voor andere overheidsinstanties:</p>
      
      <ul>
        <li>Het belang van een specifieke aanpak gericht op de bedreigingen waar overheidsinstanties mee te maken hebben</li>
        <li>De effectiviteit van AI bij het detecteren van geavanceerde bedreigingen die door traditionele beveiligingsmaatregelen worden gemist</li>
        <li>Het belang van een gelaagde beveiligingsstrategie die zowel preventie als detectie en respons omvat</li>
        <li>De waarde van automatisering bij het verminderen van de werkdruk van beveiligingsteams</li>
        <li>Het belang van regelmatige pentests om kwetsbaarheden proactief te identificeren</li>
      </ul>
      
      <p>Deze implementatie toont aan dat zelfs in de meest uitdagende beveiligingsomgevingen, met de juiste combinatie van technologie, expertise en processen, een robuuste verdediging tegen geavanceerde dreigingen kan worden opgebouwd.</p>
    `,
    testimonial: {
      quote: "De AI-gestuurde beveiligingsoplossingen van HuntAI hebben ons een ongekend niveau van zichtbaarheid en bescherming gegeven voor onze kritieke infrastructuur.",
      author: "Pieter van der Meer",
      position: "Hoofd Cybersecurity, Nederlandse Overheidsinstantie"
    }
  },
  'manufacturing-company': {
    title: 'Productiebedrijf Beschermt OT/IT Netwerken',
    subtitle: 'Een industrieel bedrijf beveiligt de convergentie van operationele technologie en IT-netwerken',
    category: 'Industrie',
    challenge: `
      <p>Een groot Nederlands productiebedrijf stond voor uitdagingen bij het beveiligen van hun netwerken tijdens de digitale transformatie, waarbij operationele technologie (OT) en informatietechnologie (IT) steeds meer convergeerden.</p>
      
      <p>De specifieke uitdagingen waren:</p>
      <ul>
        <li>Toenemende verbinding tussen voorheen geïsoleerde OT-systemen en het corporate IT-netwerk</li>
        <li>Verouderde industriële controlesystemen die niet ontworpen waren met cybersecurity in gedachten</li>
        <li>Beperkt inzicht in het verkeer tussen OT- en IT-netwerken</li>
        <li>Risico van productieverstoring bij beveiligingsincidenten</li>
        <li>Gebrek aan gespecialiseerde OT-security expertise binnen het bedrijf</li>
      </ul>
      
      <p>Een recente toename van ransomware-aanvallen gericht op industriële bedrijven onderstreepte de urgentie van verbeterde beveiliging.</p>
    `,
    solution: `
      <p>HuntAI ontwikkelde een gespecialiseerde beveiligingsoplossing voor het productiebedrijf:</p>
      
      <ol>
        <li><strong>OT/IT netwerksegmentatie:</strong> Implementatie van een geavanceerde segmentatiestrategie die veilige communicatie tussen OT- en IT-netwerken mogelijk maakt, terwijl de risico's worden beperkt.</li>
        <li><strong>Passieve OT-monitoring:</strong> Installatie van passieve monitoringoplossingen die OT-verkeer analyseren zonder de productie te verstoren.</li>
        <li><strong>AI-gestuurde anomaliedetectie:</strong> Implementatie van AI-algoritmen die afwijkend gedrag kunnen detecteren in zowel OT- als IT-netwerken.</li>
        <li><strong>Industriële firewall-oplossingen:</strong> Implementatie van gespecialiseerde firewalls ontworpen voor industriële omgevingen.</li>
        <li><strong>OT-specifieke incident response plan:</strong> Ontwikkeling van een incident response plan dat prioriteit geeft aan productiecontinuïteit.</li>
      </ol>
      
      <p>De implementatie werd gefaseerd uitgevoerd, beginnend met passieve monitoring om inzicht te krijgen, gevolgd door meer actieve beveiligingsmaatregelen.</p>
    `,
    results: `
      <p>Na implementatie van de gespecialiseerde OT/IT-beveiligingsoplossing zag het productiebedrijf belangrijke verbeteringen:</p>
      
      <ul>
        <li><strong>80% verbeterde zichtbaarheid</strong> in OT/IT-netwerkverkeer</li>
        <li><strong>90% vermindering</strong> van ongeautoriseerd verkeer tussen OT- en IT-netwerken</li>
        <li><strong>Zero impact</strong> op productieprocessen door beveiligingsmaatregelen</li>
        <li><strong>75% snellere detectie</strong> van potentiële beveiligingsincidenten</li>
        <li><strong>100% documentatie</strong> van alle OT-assets en hun communicatiepatronen</li>
      </ul>
      
      <p>"De implementatie van deze gespecialiseerde beveiligingsoplossingen heeft ons in staat gesteld om onze digitale transformatie veilig voort te zetten zonder onze productieprocessen in gevaar te brengen," aldus de COO van het bedrijf.</p>
    `,
    lessons: `
      <p>Deze case study biedt waardevolle inzichten voor andere industriële bedrijven:</p>
      
      <ul>
        <li>Het belang van een gespecialiseerde aanpak voor OT/IT-convergentie, die rekening houdt met de unieke eisen van industriële omgevingen</li>
        <li>De waarde van passieve monitoring als eerste stap naar verbeterde OT-security</li>
        <li>Het belang van een gefaseerde implementatieaanpak die productiecontinuïteit waarborgt</li>
        <li>De effectiviteit van AI bij het detecteren van afwijkingen in industriële systemen</li>
        <li>Het belang van een incident response plan dat prioriteit geeft aan bedrijfscontinuïteit</li>
      </ul>
      
      <p>Deze implementatie toont aan dat zelfs in complexe industriële omgevingen, met de juiste expertise en aanpak, digitale transformatie veilig kan worden gefaciliteerd zonder de productieprocessen in gevaar te brengen.</p>
    `,
    testimonial: {
      quote: "HuntAI's gespecialiseerde OT/IT-beveiligingsoplossingen hebben ons in staat gesteld om veilig te innoveren zonder onze productieprocessen te compromitteren.",
      author: "Erik Jansen",
      position: "COO, Nederlands Productiebedrijf"
    }
  }
};

const UseCaseDetailPage: React.FC = () => {
  const [match, params] = useRoute('/use-case/:id');
  const [, setLocation] = useLocation();
  
  if (!match) {
    return null;
  }
  
  const useCaseId = params?.id as string;
  const useCase = useCasesData[useCaseId];
  
  if (!useCase) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-6">Case study niet gevonden</h1>
          <p className="text-xl text-gray-400 mb-8">De case study die u zoekt bestaat niet of is verwijderd.</p>
          <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            <Link href="/use-cases">Terug naar use cases</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/use-cases" className="inline-flex items-center text-blue-400 hover:text-blue-300">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar use cases
          </Link>
        </div>

        <article className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="text-sm text-purple-400 mb-2">{useCase.category}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{useCase.title}</h1>
            <p className="text-xl text-gray-300 mb-8">{useCase.subtitle}</p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">De Uitdaging</h2>
              <div 
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: useCase.challenge }}
              />
            </section>
            
            <section>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-teal-500 text-transparent bg-clip-text">De Oplossing</h2>
              <div 
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: useCase.solution }}
              />
            </section>
            
            <section>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text">De Resultaten</h2>
              <div 
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: useCase.results }}
              />
            </section>
            
            <section>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Geleerde Lessen</h2>
              <div 
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: useCase.lessons }}
              />
            </section>
            
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <blockquote className="text-xl italic text-gray-300 mb-4">"{useCase.testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <div className="ml-4">
                  <div className="font-semibold text-white">{useCase.testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{useCase.testimonial.position}</div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default UseCaseDetailPage;