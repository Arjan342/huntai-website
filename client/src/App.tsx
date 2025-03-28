import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/home";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/diensten" component={() => <div className="py-32 text-center">Diensten Pagina</div>} />
        <Route path="/nieuws" component={() => <div className="py-32 text-center">Nieuws Pagina</div>} />
        <Route path="/use-cases" component={() => <div className="py-32 text-center">Use Cases Pagina</div>} />
        <Route path="/over-ons" component={() => <div className="py-32 text-center">Over Ons Pagina</div>} />
        <Route path="/onze-diensten" component={() => <div className="py-32 text-center">Onze Diensten Pagina</div>} />
        <Route path="/kwetsbaarheidsanalyse" component={() => <div className="py-32 text-center">Kwetsbaarheidsanalyse Pagina</div>} />
        <Route path="/automatische-ai-pentesten" component={() => <div className="py-32 text-center">Automatische AI Pentesten Pagina</div>} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
