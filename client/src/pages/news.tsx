import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, Calendar, User } from 'lucide-react';

// UI Components
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Dummydata voor nieuwsartikelen
const newsArticles = [
  {
    id: '1',
    title: 'AI-gestuurde pentesten ontdekken 40% meer kwetsbaarheden',
    excerpt: 'Uit recent onderzoek blijkt dat AI-gestuurde pentesten significant meer kwetsbaarheden identificeren dan traditionele methoden.',
    date: '27 maart 2025',
    author: 'Thomas Janssen',
    category: 'Onderzoek',
    image: '/images/news1.jpg'
  },
  {
    id: '2',
    title: 'De toekomst van cybersecurity: hoe AI het landschap verandert',
    excerpt: 'Kunstmatige intelligentie transformeert de cybersecurity-industrie door nieuwe verdedigingsmechanismen mogelijk te maken.',
    date: '20 maart 2025',
    author: 'Lisa van der Meer',
    category: 'Trends',
    image: '/images/news2.jpg'
  },
  {
    id: '3',
    title: 'Case study: Hoe een financiële instelling haar beveiliging verbeterde met AI',
    excerpt: 'Een toonaangevende financiële instelling implementeerde AI-beveiligingsoplossingen en zag een drastische vermindering van incidenten.',
    date: '15 maart 2025',
    author: 'Mark de Vries',
    category: 'Case Study',
    image: '/images/news3.jpg'
  }
];

const NewsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nieuws & Inzichten</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Ontdek de nieuwste ontwikkelingen in cybersecurity, diepgaande analyses van dreigingen en inzichten in hoe AI de toekomst van beveiliging transformeert.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsArticles.map(article => (
          <article key={article.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Badge className="bg-blue-500 hover:bg-blue-600 mr-2">{article.category}</Badge>
                <div className="text-gray-400 text-sm flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{article.date}</span>
                </div>
              </div>
              
              <h2 className="text-xl font-bold mb-3 line-clamp-2">{article.title}</h2>
              <p className="text-gray-400 mb-4 line-clamp-3">{article.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <User className="h-3 w-3 mr-1" />
                  <span>{article.author}</span>
                </div>
                
                <Button asChild variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                  <Link to={`/news/${article.id}`} className="flex items-center">
                    Lees meer <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;