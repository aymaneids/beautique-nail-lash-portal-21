
import { useState, useEffect } from 'react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone, Clock, Facebook } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

// Business hours data
const businessHours = [
  { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Thursday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Friday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update document title
  useEffect(() => {
    document.title = 'Contact Us | Beautique Nails & Lash Lounge';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1500);
  };

  return (
    <main className="animate-fadeIn py-16 md:py-24">
      <PageHeader
        title="Contact Us"
        subtitle="Have questions or want to book an appointment? Use the form below to get in touch or give us a call."
      />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Form */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white rounded-xl shadow-elegant p-6 md:p-8 h-full">
              <h2 className="text-2xl font-serif font-medium text-brand-charcoal mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Label htmlFor="name">Name*</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                  />
                </div>
                
                <div className="space-y-4">
                  <Label htmlFor="email">Email*</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email address" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  />
                </div>
                
                <div className="space-y-4">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="What is this regarding?" 
                    value={subject} 
                    onChange={(e) => setSubject(e.target.value)} 
                  />
                </div>
                
                <div className="space-y-4">
                  <Label htmlFor="message">Message*</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    className="min-h-[120px]"
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full md:w-auto bg-brand-gold hover:bg-brand-gold/90 text-white" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-white rounded-xl shadow-elegant p-6 md:p-8 h-full">
              <h2 className="text-2xl font-serif font-medium text-brand-charcoal mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-pink bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-brand-charcoal" />
                  </div>
                  
                  <div className="ml-4">
                    <h3 className="font-medium text-lg mb-2 text-brand-charcoal">Our Location</h3>
                    <p className="text-muted-foreground">
                      205 N. Spring St.<br />
                      Beaver Dam, WI 53916<br />
                      United States
                    </p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block mt-2 text-brand-gold hover:text-brand-gold/80 transition-colors"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-pink bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 text-brand-charcoal" />
                  </div>
                  
                  <div className="ml-4">
                    <h3 className="font-medium text-lg mb-2 text-brand-charcoal">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+19204489371" className="hover:text-brand-gold transition-colors">
                        (920) 448-9371
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-pink bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 text-brand-charcoal" />
                  </div>
                  
                  <div className="ml-4">
                    <h3 className="font-medium text-lg mb-2 text-brand-charcoal">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:beautique@example.com" className="hover:text-brand-gold transition-colors">
                        beautique@example.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-pink bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Facebook className="h-5 w-5 text-brand-charcoal" />
                  </div>
                  
                  <div className="ml-4">
                    <h3 className="font-medium text-lg mb-2 text-brand-charcoal">Follow Us</h3>
                    <p className="text-muted-foreground">
                      <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-brand-gold transition-colors"
                      >
                        Facebook
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-pink bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-5 w-5 text-brand-charcoal" />
                  </div>
                  
                  <div className="ml-4">
                    <h3 className="font-medium text-lg mb-2 text-brand-charcoal">Business Hours</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {businessHours.map((item) => (
                        <div key={item.day} className="contents">
                          <span className="text-brand-charcoal font-medium">{item.day}</span>
                          <span className="text-muted-foreground">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-elegant h-80 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          {/* This would be a real Google Map in production */}
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">Google Map would be embedded here</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
