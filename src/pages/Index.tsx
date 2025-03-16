
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedServices from "@/components/home/FeaturedServices";
import GalleryPreview from "@/components/home/GalleryPreview";
import Testimonials from "@/components/home/Testimonials";
import { useEffect } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import BookingButton from "@/components/ui/BookingButton";

const Index = () => {
  // Update document title
  useEffect(() => {
    document.title = "Beautique Nails & Lash Lounge | Beaver Dam, WI";
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <Hero />
      
      {/* About Preview */}
      <AboutPreview />
      
      {/* Featured Services */}
      <FeaturedServices />
      
      {/* Gallery Preview */}
      <GalleryPreview />
      
      {/* CTA Section */}
      <section className="py-24 bg-brand-charcoal text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brand-gold opacity-10 blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-pink opacity-10 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6 animate-fade-up">
              Ready to Experience the <span className="text-brand-gold">Beautique Difference</span>?
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Book your appointment today and treat yourself to our premium nail and lash services.
              We can't wait to welcome you to our salon!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <BookingButton size="lg" />
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white px-6 py-4 text-base font-medium text-white hover:bg-white hover:text-brand-charcoal transition-colors duration-300 ease-in-out"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-brand-pink bg-opacity-10 text-brand-charcoal text-sm font-medium mb-4 animate-fade-up">
              Find Us
            </span>
            
            <h2 className="heading-lg mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Visit Our <span className="text-brand-gold">Salon</span>
            </h2>
            
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
              We're conveniently located in Beaver Dam, Wisconsin. Come see us for your next appointment!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden shadow-elegant h-96 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {/* Google Map would go here */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Google Map</span>
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-brand-pink bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="h-6 w-6 text-brand-charcoal" />
                </div>
                
                <div className="ml-4">
                  <h3 className="font-serif text-xl font-medium mb-2 text-brand-charcoal">Address</h3>
                  <p className="text-muted-foreground">
                    205 N. Spring St.<br />
                    Beaver Dam, WI<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-brand-pink bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="h-6 w-6 text-brand-charcoal" />
                </div>
                
                <div className="ml-4">
                  <h3 className="font-serif text-xl font-medium mb-2 text-brand-charcoal">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+19204489371" className="hover:text-brand-gold transition-colors">
                      (920) 448-9371
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-brand-pink bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="h-6 w-6 text-brand-charcoal" />
                </div>
                
                <div className="ml-4">
                  <h3 className="font-serif text-xl font-medium mb-2 text-brand-charcoal">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:beautique@example.com" className="hover:text-brand-gold transition-colors">
                      beautique@example.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/contact"
                  className="button-primary"
                >
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
