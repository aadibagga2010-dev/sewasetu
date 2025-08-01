import { useEffect } from 'react';
import { useLocation, Switch, Route } from 'wouter';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import './lib/i18n';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Shopkeepers from './pages/Shopkeepers';
import Elderly from './pages/Elderly';
import Farmers from './pages/Farmers';
import Workers from './pages/Workers';
import Women from './pages/Women';
import NotFound from '@/pages/not-found';

function ScrollToTopOnRouteChange() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/shopkeepers" component={Shopkeepers} />
      <Route path="/elderly" component={Elderly} />
      <Route path="/farmers" component={Farmers} />
      <Route path="/workers" component={Workers} />
      <Route path="/women" component={Women} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTopOnRouteChange />
        <div className="min-h-screen flex flex-col font-sans">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
