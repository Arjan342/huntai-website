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
import LoginPage from "./pages/login";
import DienstenPage from "./pages/diensten";
import ServiceDetailPage from "./pages/service-detail";
import AutomatischeAIPentestenPage from "./pages/automatische-ai-pentesten";
import KwetsbaarheidsanalysePage from "./pages/kwetsbaarheidsanalyse";
import WebsiteScanPage from "./pages/website-scan";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/diensten" component={DienstenPage} />
        <Route path="/diensten/:id" component={ServiceDetailPage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/news/:id" component={NewsDetailPage} />
        <Route path="/use-cases" component={UseCasesPage} />
        <Route path="/use-case/:id" component={UseCaseDetailPage} />
        <Route path="/over-ons" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/onze-diensten" component={DienstenPage} />
        <Route path="/kwetsbaarheidsanalyse" component={KwetsbaarheidsanalysePage} />
        <Route path="/automatische-ai-pentesten" component={AutomatischeAIPentestenPage} />
        <Route path="/website-scan" component={WebsiteScanPage} />
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
