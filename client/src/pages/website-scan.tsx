import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AlertCircle, Check, Shield, Server, AlertTriangle, Lock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const WebsiteScanPage: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState<any>(null);
  const [error, setError] = useState('');
  
  const validateUrl = (input: string) => {
    try {
      const newUrl = new URL(input);
      return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
    } catch (err) {
      return false;
    }
  };

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setError('');
    setScanResults(null);
    
    // Validate URL
    if (!url) {
      setError('Voer een URL in om te scannen');
      return;
    }
    
    if (!validateUrl(url)) {
      setError('Voer een geldige URL in (inclusief http:// of https://)');
      return;
    }
    
    setIsScanning(true);
    
    try {
      // Placeholder scanning logic - would be replaced with actual API call
      // to your WebSecurityScanner
      const response = await fetch('/api/scan-website', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
      
      if (!response.ok) {
        throw new Error('Er is een fout opgetreden bij het scannen');
      }
      
      const data = await response.json();
      setScanResults(data);
    } catch (err) {
      // If API is not available, show mock results for demo purposes
      console.error('Error fetching scan results:', err);
      setError('Het scannen kon niet worden voltooid. Probeer het later nog eens of neem contact op met ons team.');
      
      // Show mock results for demonstration
      setScanResults({
        url: url,
        scanDate: new Date().toISOString(),
        securityScore: 72,
        headers: {
          'Content-Security-Policy': false,
          'X-Content-Type-Options': true,
          'X-Frame-Options': true,
          'Strict-Transport-Security': false,
          'X-XSS-Protection': true
        },
        ssl: {
          valid: true,
          grade: 'B',
          expiresIn: 180
        },
        outdatedLibraries: [
          { name: 'jQuery', version: '1.11.3', latestVersion: '3.6.0', severity: 'high' },
          { name: 'Bootstrap', version: '4.3.1', latestVersion: '5.2.3', severity: 'medium' }
        ],
        recommendations: [
          'Implementeer een Content Security Policy (CSP)',
          'Configureer HTTP Strict Transport Security (HSTS)',
          'Update jQuery naar de nieuwste versie',
          'Update Bootstrap naar de nieuwste versie'
        ]
      });
    } finally {
      setIsScanning(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-700 text-white';
      case 'high': return 'bg-red-600 text-white';
      case 'medium': return 'bg-orange-500 text-white';
      case 'low': return 'bg-yellow-500 text-black';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Gratis Website Scan
          </h1>
          <p className="text-lg text-gray-300 mb-10 text-center">
            Ontdek de kwetsbaarheden in uw website met onze geavanceerde AI-gestuurde security scanner.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-10">
            <form onSubmit={handleScan}>
              <div className="mb-6">
                <label htmlFor="url" className="block text-white mb-2 font-medium">
                  Website URL
                </label>
                <div className="flex gap-3">
                  <Input
                    id="url"
                    type="text"
                    placeholder="https://voorbeeld.nl"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="flex-1 bg-gray-800 border-gray-700 text-white"
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    disabled={isScanning}
                  >
                    {isScanning ? 'Bezig met scannen...' : 'Scan Website'}
                  </Button>
                </div>
                {error && (
                  <div className="text-red-400 mt-2 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {error}
                  </div>
                )}
              </div>
            </form>
          </div>

          {isScanning && (
            <div className="text-center py-10">
              <div className="animate-pulse flex flex-col items-center">
                <Shield className="h-16 w-16 text-blue-500 mb-4" />
                <h3 className="text-xl font-medium mb-2">Bezig met scannen...</h3>
                <p className="text-gray-400">
                  We controleren de beveiliging van {url}
                </p>
              </div>
            </div>
          )}

          {scanResults && !isScanning && (
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 animate-fade-in">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-800">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Scanresultaten</h2>
                  <p className="text-gray-400">
                    {new Date(scanResults.scanDate).toLocaleDateString('nl-NL', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                <div className="text-center">
                  <div className={`text-4xl font-bold ${getScoreColor(scanResults.securityScore)}`}>
                    {scanResults.securityScore}%
                  </div>
                  <div className="text-sm text-gray-400">Security Score</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800 p-5 rounded-lg">
                  <h3 className="text-xl font-medium mb-4 flex items-center">
                    <Lock className="w-5 h-5 mr-2 text-blue-400" /> SSL Certificaat
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status</span>
                      <span className={scanResults.ssl.valid ? "text-green-500 flex items-center" : "text-red-500 flex items-center"}>
                        {scanResults.ssl.valid ? <Check className="w-4 h-4 mr-1" /> : <AlertCircle className="w-4 h-4 mr-1" />}
                        {scanResults.ssl.valid ? "Geldig" : "Ongeldig"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Kwaliteitsgraad</span>
                      <span className="font-medium">{scanResults.ssl.grade}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Verloopt over</span>
                      <span>{scanResults.ssl.expiresIn} dagen</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 p-5 rounded-lg">
                  <h3 className="text-xl font-medium mb-4 flex items-center">
                    <Server className="w-5 h-5 mr-2 text-blue-400" /> Security Headers
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(scanResults.headers).map(([header, value]) => {
                      const implemented = Boolean(value);
                      return (
                        <div key={header} className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">{header}</span>
                          {implemented ? (
                            <Badge variant="outline" className="bg-green-900/30 text-green-400 border-green-800">
                              <Check className="w-3 h-3 mr-1" /> Aanwezig
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="bg-red-900/30 text-red-400 border-red-800">
                              <AlertCircle className="w-3 h-3 mr-1" /> Ontbreekt
                            </Badge>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {scanResults.outdatedLibraries && scanResults.outdatedLibraries.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-medium mb-4 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" /> Verouderde Libraries
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-gray-800 text-gray-400 text-sm">
                        <tr>
                          <th className="py-3 px-4 rounded-tl-lg">Naam</th>
                          <th className="py-3 px-4">Huidige Versie</th>
                          <th className="py-3 px-4">Nieuwste Versie</th>
                          <th className="py-3 px-4 rounded-tr-lg">Ernst</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {scanResults.outdatedLibraries.map((lib: any, index: number) => (
                          <tr key={index} className="bg-gray-900/50">
                            <td className="py-3 px-4 font-medium">{lib.name}</td>
                            <td className="py-3 px-4 text-red-400">{lib.version}</td>
                            <td className="py-3 px-4 text-green-400">{lib.latestVersion}</td>
                            <td className="py-3 px-4">
                              <Badge className={getSeverityColor(lib.severity)}>
                                {lib.severity}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-xl font-medium mb-4">Aanbevelingen</h3>
                <ul className="space-y-3">
                  {scanResults.recommendations.map((rec: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-900/30 text-blue-400 rounded-full p-1 mr-3 mt-0.5">
                        <Check className="w-4 h-4" />
                      </div>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-800">
                <p className="text-gray-400 mb-4">
                  Deze scan is een momentopname en geeft een indicatie van de beveiligingsstatus van uw website. 
                  Voor een volledige beveiligingsanalyse raden wij u aan contact op te nemen met ons team.
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-full">
                  Download Volledig Rapport
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebsiteScanPage;