
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation, useNavigationType } from "react-router-dom";
import { useEffect } from "react";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const queryClient = new QueryClient();

// Page transition component
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="page-transition-enter page-transition-enter-active">
      {children}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <PageTransition>
                <Index />
              </PageTransition>
            } 
          />
          <Route 
            path="/about" 
            element={
              <PageTransition>
                <About />
              </PageTransition>
            } 
          />
          <Route 
            path="/services" 
            element={
              <PageTransition>
                <Services />
              </PageTransition>
            } 
          />
          <Route 
            path="/gallery" 
            element={
              <PageTransition>
                <Gallery />
              </PageTransition>
            } 
          />
          <Route 
            path="/testimonials" 
            element={
              <PageTransition>
                <Testimonials />
              </PageTransition>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            } 
          />
          <Route 
            path="/booking" 
            element={
              <PageTransition>
                <Booking />
              </PageTransition>
            } 
          />
          <Route 
            path="*" 
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            } 
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
