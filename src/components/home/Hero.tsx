
import { useEffect, useState } from 'react';
import BookingButton from '../ui/BookingButton';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        {/* This would normally be an actual image - using a placeholder for now */}
        <div className="absolute inset-0 bg-brand-charcoal/50 z-10"></div>
        <div className="w-full h-full bg-gradient-to-r from-brand-charcoal via-brand-charcoal/90 to-brand-charcoal/80"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div
              className={`transition-all duration-1000 ease-out transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
                Welcome to Beaver Dam's Premier Nail & Lash Salon
              </span>
            </div>

            <h1
              className={`heading-xl text-white mb-6 md:mb-8 transition-all duration-1000 delay-100 ease-out transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Elevate Your Beauty at{' '}
              <span className="text-brand-gold">Beautique Nails & Lash Lounge</span>
            </h1>

            <p
              className={`text-lg md:text-xl text-gray-200 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 transition-all duration-1000 delay-200 ease-out transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Experience personalized service, a classy atmosphere, and exceptional results
              that will leave you feeling beautiful and confident.
            </p>

            <div
              className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 transition-all duration-1000 delay-300 ease-out transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <BookingButton size="lg" />
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-md border border-white px-6 py-4 text-base font-medium text-white hover:bg-white hover:text-brand-charcoal transition-colors duration-300 ease-in-out"
              >
                View Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div
              className={`aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 delay-400 ease-out transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {/* This would normally be an actual image - using a placeholder for now */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-pink to-brand-gold opacity-90 z-0"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-white text-3xl">Nail Art</span>
              </div>
            </div>
            <div
              className={`absolute -bottom-6 -left-6 aspect-square w-48 rounded-xl overflow-hidden shadow-xl transition-all duration-1000 delay-500 ease-out transform ${
                isLoaded ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-10 opacity-0 rotate-12'
              }`}
            >
              {/* This would normally be an actual image - using a placeholder for now */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold to-brand-pink opacity-90 z-0"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-white text-xl">Lashes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
