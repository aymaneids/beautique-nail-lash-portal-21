
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, Clock, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand section */}
          <div className="md:col-span-4">
            <h3 className="font-serif text-2xl font-medium mb-4">
              Beautique
              <span className="text-brand-gold"> Nails & Lash</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Your destination for gorgeous nails and lashes in Beaver Dam, WI. 
              We provide personalized service in a classy atmosphere.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-gold transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-gold transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="md:col-span-2">
            <h4 className="font-serif text-lg font-medium mb-4">Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-2">
            <h4 className="font-serif text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Manicures
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Pedicures
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Nail Art
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Gel Nails
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Lash Extensions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Lash Lifts
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-brand-gold" />
                <span className="text-gray-300">
                  205 N. Spring St., Beaver Dam, WI
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-brand-gold" />
                <a href="tel:+19204489371" className="text-gray-300 hover:text-white transition-colors">
                  (920) 448-9371
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-brand-gold" />
                <a href="mailto:beautique@example.com" className="text-gray-300 hover:text-white transition-colors">
                  beautique@example.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-brand-gold mt-0.5" />
                <div className="text-gray-300">
                  <p>Mon-Fri: 9am - 7pm</p>
                  <p>Saturday: 9am - 5pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Beautique Nails & Lash Lounge. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <Link to="/booking" className="button-accent">
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
