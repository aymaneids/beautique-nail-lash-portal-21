
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    text: 'Absolutely love my nails! The staff is so professional and the salon is immaculate. I won't go anywhere else in Beaver Dam!',
    rating: 5,
    service: 'Gel Manicure',
  },
  {
    id: 2,
    name: 'Michelle Davis',
    text: 'The lash extensions completely transformed my look. I love waking up with perfect lashes every day. Beautique is a gem!',
    rating: 5,
    service: 'Lash Extensions',
  },
  {
    id: 3,
    name: 'Rebecca Wilson',
    text: 'Such a relaxing experience. The attention to detail and cleanliness is impressive. My pedicure lasted for weeks!',
    rating: 5,
    service: 'Deluxe Pedicure',
  },
];

const Testimonials = () => {
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
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className={`inline-block px-4 py-2 rounded-full bg-brand-gold bg-opacity-10 text-brand-charcoal text-sm font-medium mb-4 transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Client Testimonials
          </span>
          
          <h2 
            className={`heading-lg mb-6 transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            What Our <span className="text-brand-gold">Clients Say</span>
          </h2>
          
          <p 
            className={`text-lg text-muted-foreground transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            We're proud to have a 96% recommendation rate from our clients. Here's what some 
            of them have to say about their experience at Beautique Nails & Lash Lounge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-white rounded-xl p-8 shadow-elegant relative transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-brand-pink flex items-center justify-center">
                <Quote className="h-4 w-4 text-white" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-brand-gold fill-brand-gold" />
                ))}
              </div>
              
              <p className="text-brand-charcoal mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex flex-col">
                <span className="font-medium text-brand-charcoal">{testimonial.name}</span>
                <span className="text-sm text-muted-foreground">{testimonial.service}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/testimonials"
            className={`button-primary inline-flex items-center transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            Read More Testimonials
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
