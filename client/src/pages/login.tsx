import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [, setLocation] = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Eenvoudige validatie
    if (!username || !password) {
      setError('Vul alstublieft alle velden in');
      return;
    }
    
    // In een echte applicatie zou hier een API-aanroep komen voor authenticatie
    console.log('Login poging met:', username);
    
    // Simuleer succesvolle login en redirect
    setError('');
    setLocation('/');
  };

  return (
    <div className="container mx-auto px-4 py-24 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
            HuntAI Platform
          </h1>
          <p className="text-gray-400 mt-2">
            Log in op het beveiligingsplatform
          </p>
        </div>
        
        {error && (
          <div className="bg-red-900/30 border border-red-800 text-red-300 px-4 py-3 rounded-md mb-6">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label 
              htmlFor="username" 
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Gebruikersnaam
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Voer uw gebruikersnaam in"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div className="mb-6">
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Wachtwoord
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Voer uw wachtwoord in"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded bg-gray-800 border-gray-700 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                Onthoud mij
              </label>
            </div>
            
            <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
              Wachtwoord vergeten?
            </a>
          </div>
          
          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-md text-base h-auto"
          >
            Inloggen
          </Button>
          
          <div className="mt-6 text-center text-sm text-gray-400">
            Nog geen account?{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Vraag toegang aan
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;