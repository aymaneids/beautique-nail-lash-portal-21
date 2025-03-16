
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import BookingButton from '../ui/BookingButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-white/90 backdrop-blur-md shadow-sm' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
          >
            <span className="font-serif text-xl md:text-2xl font-medium text-brand-charcoal">
              Beautique
              <span className="text-brand-gold"> Nails & Lash</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-brand-charcoal'
                    : 'text-gray-500 hover:text-brand-charcoal'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-4">
              <BookingButton size="sm" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-pink"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out transform ${
          isOpen 
            ? 'opacity-100 max-h-screen' 
            : 'opacity-0 max-h-0 pointer-events-none'
        }`}
      >
        <div className="glass shadow-md rounded-b-lg mx-4 mt-2 overflow-hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'text-brand-charcoal bg-brand-pink/20'
                    : 'text-gray-600 hover:text-brand-charcoal hover:bg-brand-pink/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-3">
              <BookingButton size="default" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
