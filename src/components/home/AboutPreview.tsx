
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-brand-pink opacity-10"></div>
      <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-brand-gold opacity-10"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div 
              className={`rounded-2xl overflow-hidden shadow-elegant transition-all duration-1000 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              {/* This would normally be an actual image - using a placeholder for now */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200"></div>
            </div>
            
            <div 
              className={`absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-elegant max-w-xs transition-all duration-1000 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="block text-sm font-medium text-brand-gold mb-2">OUR COMMITMENT</span>
              <p className="text-brand-charcoal">
                "We prioritize cleanliness and sanitation to ensure your health and safety with every visit."
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span 
              className={`inline-block px-4 py-2 rounded-full bg-brand-pink bg-opacity-10 text-brand-charcoal text-sm font-medium mb-4 transition-all duration-1000 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              About Beautique
            </span>
            
            <h2 
              className={`heading-lg mb-6 transition-all duration-1000 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Your Destination for <span className="text-brand-gold">Gorgeous Nails and Lashes</span>
            </h2>
            
            <p 
              className={`text-lg text-muted-foreground mb-6 transition-all duration-1000 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              At Beautique Nails & Lash Lounge, we believe in providing personalized service 
              in a classy atmosphere. Our skilled technicians bring your vision to life, 
              whether it's stunning nail art or perfect lash extensions.
            </p>
            
            <p 
              className={`text-lg text-muted-foreground mb-8 transition-all duration-1000 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              Located in the heart of Beaver Dam, Wisconsin, our salon combines luxury 
              with affordability, ensuring that you leave feeling beautiful and confident.
            </p>
            
            <Link 
              to="/about" 
              className={`inline-flex items-center font-medium text-brand-charcoal hover:text-brand-gold transition-colors duration-300 ease-in-out transition-all duration-1000 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
