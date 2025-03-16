
import { useState, useEffect } from 'react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';

const services = [
  { name: 'Manicure - Classic', duration: '30 min', price: '$25' },
  { name: 'Manicure - Gel', duration: '45 min', price: '$35' },
  { name: 'Pedicure - Classic', duration: '45 min', price: '$40' },
  { name: 'Pedicure - Deluxe', duration: '60 min', price: '$55' },
  { name: 'Full Set - Acrylic', duration: '75 min', price: '$65' },
  { name: 'Full Set - Gel', duration: '60 min', price: '$55' },
  { name: 'Lash Extensions - Classic', duration: '90 min', price: '$95' },
  { name: 'Lash Extensions - Volume', duration: '120 min', price: '$135' },
  { name: 'Lash Lift', duration: '60 min', price: '$75' },
  { name: 'Lash Tint', duration: '30 min', price: '$25' },
];

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
];

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [serviceType, setServiceType] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update document title
  useEffect(() => {
    document.title = 'Book an Appointment | Beautique Nails & Lash Lounge';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!date || !serviceType || !timeSlot || !name || !email || !phone) {
      toast({
        title: "Missing Fields",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate booking submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Booking Received!",
        description: `Your appointment for ${serviceType} on ${format(date, 'MMMM do')} at ${timeSlot} has been requested. We'll contact you shortly to confirm.`,
      });
      
      // Reset form
      setDate(undefined);
      setServiceType('');
      setTimeSlot('');
      setName('');
      setEmail('');
      setPhone('');
      setNotes('');
    }, 1500);
  };

  return (
    <main className="animate-fadeIn py-16 md:py-24">
      <PageHeader
        title="Book Your Appointment"
        subtitle="Schedule your next beauty service with us. Please fill out the form below, and we'll confirm your appointment as soon as possible."
      />
      
      <div className="container-custom">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-elegant p-6 md:p-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service Selection */}
              <div className="space-y-4">
                <Label htmlFor="service">Service Type*</Label>
                <Select value={serviceType} onValueChange={setServiceType} required>
                  <SelectTrigger id="service" className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.name} value={service.name}>
                        <span className="flex justify-between">
                          <span>{service.name}</span>
                          <span className="text-muted-foreground ml-2">
                            {service.duration} - {service.price}
                          </span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Date Selection */}
              <div className="space-y-4">
                <Label>Date*</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Select a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => {
                        const day = date.getDay();
                        // Disable Sundays (0) and past dates
                        return day === 0 || date < new Date(new Date().setHours(0, 0, 0, 0));
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              {/* Time Selection */}
              <div className="space-y-4">
                <Label htmlFor="time">Time*</Label>
                <Select value={timeSlot} onValueChange={setTimeSlot} required disabled={!date}>
                  <SelectTrigger id="time" className="w-full">
                    <SelectValue placeholder="Select a time">
                      {timeSlot ? (
                        <span className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" />
                          {timeSlot}
                        </span>
                      ) : (
                        "Select a time"
                      )}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Name */}
              <div className="space-y-4">
                <Label htmlFor="name">Full Name*</Label>
                <Input 
                  id="name" 
                  placeholder="Your full name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
              </div>
              
              {/* Email */}
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
              
              {/* Phone */}
              <div className="space-y-4">
                <Label htmlFor="phone">Phone Number*</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="Your phone number" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  required 
                />
              </div>
            </div>
            
            {/* Notes */}
            <div className="space-y-4">
              <Label htmlFor="notes">Special Requests or Notes (Optional)</Label>
              <Textarea 
                id="notes" 
                placeholder="Any special requests or information we should know?" 
                value={notes} 
                onChange={(e) => setNotes(e.target.value)} 
                className="min-h-[100px]"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full md:w-auto bg-brand-gold hover:bg-brand-gold/90 text-white" 
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Book Appointment"}
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              * Required fields. After submitting, we'll contact you to confirm your appointment.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Booking;
