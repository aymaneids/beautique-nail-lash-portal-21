
import { useState, useEffect } from 'react';
import PageHeader from '@/components/common/PageHeader';
import { Star, Quote } from 'lucide-react';
import BookingButton from '@/components/ui/BookingButton';

// Extended testimonials
const testimonialsList = [
  {
    id: 1,
    name: 'Sarah Johnson',
    text: 'Absolutely love my nails! The staff is so professional and the salon is immaculate. I won\'t go anywhere else in Beaver Dam!',
    rating: 5,
    service: 'Gel Manicure',
    date: 'July 2023',
  },
  {
    id: 2,
    name: 'Michelle Davis',
    text: 'The lash extensions completely transformed my look. I love waking up with perfect lashes every day. Beautique is a gem!',
    rating: 5,
    service: 'Lash Extensions',
    date: 'August 2023',
  },
  {
    id: 3,
    name: 'Rebecca Wilson',
    text: 'Such a relaxing experience. The attention to detail and cleanliness is impressive. My pedicure lasted for weeks!',
    rating: 5,
    service: 'Deluxe Pedicure',
    date: 'June 2023',
  },
  {
    id: 4,
    name: 'Jennifer Thompson',
    text: 'I\'ve been to many nail salons in the area, but Beautique stands out for their exceptional service and quality. My acrylic nails look amazing!',
    rating: 5,
    service: 'Acrylic Full Set',
    date: 'May 2023',
  },
  {
    id: 5,
    name: 'Emma Rodriguez',
    text: 'The staff really listens to what you want. I showed them a picture of nail art I liked, and they recreated it perfectly. So happy with the results!',
    rating: 5,
    service: 'Nail Art Design',
    date: 'July 2023',
  },
  {
    id: 6,
    name: 'Amanda Lewis',
    text: 'My lash lift and tint looks so natural yet dramatic at the same time. The technician was very knowledgeable and made sure I was comfortable throughout the procedure.',
    rating: 5,
    service: 'Lash Lift & Tint',
    date: 'August 2023',
  },
  {
    id: 7,
    name: 'Stephanie Clark',
    text: 'The spa pedicure was divine! The massage chair, foot soak, and scrub were so relaxing. My feet have never looked better.',
    rating: 5,
    service: 'Spa Pedicure',
    date: 'June 2023',
  },
  {
    id: 8,
    name: 'Melissa Brown',
    text: 'I appreciate how clean and organized the salon is. The tools are properly sanitized, and the space is immaculate. This is very important to me, and Beautique exceeds expectations.',
    rating: 5,
    service: 'Manicure & Pedicure',
    date: 'July 2023',
  },
  {
    id: 9,
    name: 'Katherine Martin',
    text: 'The gel manicure I got has lasted over two weeks with no chips! The color selection is amazing, and the finish is so glossy and professional.',
    rating: 5,
    service: 'Gel Manicure',
    date: 'August 2023',
  },
  {
    id: 10,
    name: 'Jessica Taylor',
    text: 'The volume lashes completely transformed my appearance. I receive compliments daily, and they\'re so comfortable I forget I\'m wearing them!',
    rating: 5,
    service: 'Volume Lash Extensions',
    date: 'July 2023',
  },
  {
    id: 11,
    name: 'Nicole Anderson',
    text: 'The staff is very accommodating with scheduling. I had to reschedule last minute, and they were so understanding. Great customer service!',
    rating: 5,
    service: 'Classic Manicure',
    date: 'June 2023',
  },
  {
    id: 12,
    name: 'Rachel White',
    text: 'I love that they offer complimentary beverages while you get your services done. It\'s the little touches that make Beautique stand out from other salons.',
    rating: 5,
    service: 'Deluxe Pedicure',
    date: 'August 2023',
  },
];

const TestimonialsPage = () => {
  // Update document title
  useEffect(() => {
    document.title = 'Testimonials | Beautique Nails & Lash Lounge';
  }, []);

  return (
    <main className="animate-fadeIn py-16 md:py-24">
      <PageHeader
        title="Client Testimonials"
        subtitle="Don't just take our word for it. Here's what our clients have to say about their experiences at Beautique Nails & Lash Lounge."
      />
      
      <div className="container-custom">
        {/* Featured testimonial */}
        <div className="relative bg-white rounded-xl p-8 md:p-10 shadow-elegant mb-16 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center">
            <Quote className="h-6 w-6 text-white" />
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-brand-gold fill-brand-gold" />
              ))}
            </div>
            
            <p className="text-xl md:text-2xl text-center text-brand-charcoal mb-8 italic">
              "As a new client to Beautique, I was immediately impressed by the warm welcome and attention to detail. 
              The atmosphere is so relaxing, and my nail technician was skilled and friendly. 
              I've found my new go-to salon in Beaver Dam!"
            </p>
            
            <div className="text-center">
              <p className="font-medium text-brand-charcoal">Linda Martinez</p>
              <p className="text-muted-foreground">Full Set & Nail Art • September 2023</p>
            </div>
          </div>
        </div>
        
        {/* All testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonialsList.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-elegant relative animate-fade-up"
              style={{ animationDelay: `${0.3 + index * 0.05}s` }}
            >
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-pink flex items-center justify-center">
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
                <span className="text-sm text-muted-foreground">{testimonial.service} • {testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-brand-charcoal mb-6">
            Ready to Experience the Beautique Difference?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join our satisfied clients and book your appointment today. 
            We look forward to providing you with an exceptional experience!
          </p>
          <BookingButton size="lg" className="mx-auto" />
        </div>
      </div>
    </main>
  );
};

export default TestimonialsPage;
