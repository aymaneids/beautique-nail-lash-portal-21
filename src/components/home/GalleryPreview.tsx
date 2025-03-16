
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// This would normally use actual images - using placeholders for now
const galleryItems = [
  {
    id: 1,
    category: 'Nail Art',
    bgColor: 'from-pink-200 to-pink-400',
  },
  {
    id: 2,
    category: 'Manicure',
    bgColor: 'from-purple-200 to-purple-400',
  },
  {
    id: 3,
    category: 'Pedicure',
    bgColor: 'from-blue-200 to-blue-400',
  },
  {
    id: 4,
    category: 'Lash Extensions',
    bgColor: 'from-yellow-200 to-yellow-400',
  },
  {
    id: 5,
    category: 'Gel Nails',
    bgColor: 'from-green-200 to-green-400',
  },
  {
    id: 6,
    category: 'Lash Lift',
    bgColor: 'from-orange-200 to-orange-400',
  },
];

const GalleryPreview = () => {
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
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className={`inline-block px-4 py-2 rounded-full bg-brand-pink bg-opacity-10 text-brand-charcoal text-sm font-medium mb-4 transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Our Gallery
          </span>
          
          <h2 
            className={`heading-lg mb-6 transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Browse Our <span className="text-brand-gold">Beautiful Work</span>
          </h2>
          
          <p 
            className={`text-lg text-muted-foreground transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Take a look at some of our stunning nail art and lash extensions. We pride ourselves 
            on creating beautiful, personalized looks for each of our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id}
              className={`group aspect-square rounded-xl overflow-hidden relative shadow-elegant transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* This would normally be an actual image - using gradients as placeholders */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} group-hover:scale-105 transition-transform duration-500 ease-out`}></div>
              
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 ease-in-out"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-white text-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/gallery"
            className={`button-primary inline-flex items-center transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            View Full Gallery
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
