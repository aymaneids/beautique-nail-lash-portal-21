
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, Scissors, SprayCanIcon } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Manicures & Pedicures',
    description: 'Relax and rejuvenate with our classic or spa manicures and pedicures.',
    icon: Heart,
  },
  {
    id: 2,
    title: 'Nail Art & Design',
    description: 'Express yourself with custom nail art from our talented technicians.',
    icon: SprayCanIcon,
  },
  {
    id: 3,
    title: 'Gel & Acrylic Nails',
    description: 'Long-lasting, durable nail enhancements for a flawless finish.',
    icon: Sparkles,
  },
  {
    id: 4,
    title: 'Lash Extensions',
    description: 'Enhance your natural beauty with our premium lash extension services.',
    icon: Scissors,
  },
];

const FeaturedServices = () => {
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
    <section ref={sectionRef} className="section-padding bg-brand-light relative">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className={`inline-block px-4 py-2 rounded-full bg-brand-gold bg-opacity-10 text-brand-charcoal text-sm font-medium mb-4 transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Our Services
          </span>
          
          <h2 
            className={`heading-lg mb-6 transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Premium Beauty Services <span className="text-brand-gold">Just For You</span>
          </h2>
          
          <p 
            className={`text-lg text-muted-foreground transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Discover our range of personalized beauty services designed to make you look 
            and feel your best. From stunning nails to beautiful lashes, we've got you covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`bg-white rounded-xl p-6 shadow-soft card-hover transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-brand-pink bg-opacity-20 flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-brand-charcoal" />
              </div>
              
              <h3 className="font-serif text-xl font-medium mb-3 text-brand-charcoal">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              
              <Link 
                to="/services" 
                className="inline-flex items-center font-medium text-brand-gold hover:text-brand-charcoal transition-colors duration-300 ease-in-out"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/services"
            className={`button-primary inline-flex items-center transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
