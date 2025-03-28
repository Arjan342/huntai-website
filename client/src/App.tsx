import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/home";
import UseCasesPage from "./pages/use-cases";
import UseCaseDetailPage from "./pages/use-case-detail";
import NewsPage from "./pages/news";
import NewsDetailPage from "./pages/news-detail";
import AboutPage from "./pages/about";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/diensten" component={() => <div className="py-32 text-center">Diensten Pagina</div>} />
        <Route path="/news" component={NewsPage} />
        <Route path="/news/:id" component={NewsDetailPage} />
        <Route path="/use-cases" component={UseCasesPage} />
        <Route path="/use-case/:id" component={UseCaseDetailPage} />
        <Route path="/over-ons" component={AboutPage} />
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
