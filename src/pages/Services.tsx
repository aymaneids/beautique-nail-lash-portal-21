
import { useEffect } from "react";
import PageHeader from "@/components/common/PageHeader";
import BookingButton from "@/components/ui/BookingButton";
import { Sparkles } from "lucide-react";

const ServicesPage = () => {
  // Update document title
  useEffect(() => {
    document.title = "Services | Beautique Nails & Lash Lounge";
  }, []);

  const nailServices = [
    {
      id: 1,
      name: "Manicure",
      description: "Our classic manicure includes nail shaping, cuticle care, hand massage, and polish application.",
      price: "$30+",
      popular: false,
    },
    {
      id: 2,
      name: "Gel Manicure",
      description: "Long-lasting gel polish that stays chip-free for up to two weeks with a high-shine finish.",
      price: "$45+",
      popular: true,
    },
    {
      id: 3,
      name: "Pedicure",
      description: "Relaxing foot soak, nail shaping, cuticle care, callus removal, foot massage, and polish application.",
      price: "$40+",
      popular: false,
    },
    {
      id: 4,
      name: "Deluxe Pedicure",
      description: "Our signature pedicure includes exfoliation, hydrating mask, extended massage, and polish.",
      price: "$55+",
      popular: true,
    },
    {
      id: 5,
      name: "Acrylic Full Set",
      description: "Durable nail extensions that provide length and strength with a natural look.",
      price: "$60+",
      popular: false,
    },
    {
      id: 6,
      name: "Nail Art",
      description: "Custom designs, from simple accents to elaborate artwork, to express your personal style.",
      price: "$10+",
      popular: true,
    },
    {
      id: 7,
      name: "Dip Powder",
      description: "Lightweight, durable alternative to gel and acrylic with vibrant color options.",
      price: "$50+",
      popular: false,
    },
    {
      id: 8,
      name: "Nail Repair",
      description: "Fix broken or damaged nails with our expert repair services.",
      price: "$15+",
      popular: false,
    },
  ];

  const lashServices = [
    {
      id: 1,
      name: "Classic Lash Extensions",
      description: "Individual lash extensions applied to each natural lash for a subtle, natural enhancement.",
      price: "$120+",
      popular: true,
    },
    {
      id: 2,
      name: "Volume Lash Extensions",
      description: "Multiple lightweight extensions applied to each natural lash for a fuller, more dramatic look.",
      price: "$150+",
      popular: true,
    },
    {
      id: 3,
      name: "Hybrid Lash Extensions",
      description: "A combination of classic and volume techniques for a textured, dimensional effect.",
      price: "$135+",
      popular: false,
    },
    {
      id: 4,
      name: "Lash Fill",
      description: "Maintenance service to fill in gaps as natural lashes shed, keeping your extensions looking fresh.",
      price: "$60+",
      popular: false,
    },
    {
      id: 5,
      name: "Lash Lift",
      description: "Semi-permanent curl treatment for your natural lashes that lasts 6-8 weeks.",
      price: "$75+",
      popular: true,
    },
    {
      id: 6,
      name: "Lash Tint",
      description: "Darken your natural lashes for a mascara-like effect that lasts 3-4 weeks.",
      price: "$30+",
      popular: false,
    },
  ];

  return (
    <main className="pt-20">
      {/* Header Section */}
      <section className="section-padding-top bg-white">
        <div className="container-custom">
          <PageHeader
            title="Our Services"
            subtitle="Discover our comprehensive range of premium nail and lash services designed to enhance your natural beauty and boost your confidence."
          />
        </div>
      </section>
      
      {/* Nail Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-brand-pink bg-opacity-10 text-brand-charcoal text-sm font-medium mb-4 animate-fade-up">
              Nail Services
            </span>
            
            <h2 className="heading-md mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Premium Nail <span className="text-brand-gold">Care & Artistry</span>
            </h2>
            
            <p className="text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
              From classic manicures to intricate nail art, our skilled technicians provide a range of services to keep your nails looking their best. We use only high-quality products for beautiful, long-lasting results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nailServices.map((service, index) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl border border-gray-100 p-6 shadow-soft card-hover relative animate-fade-up"
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                {service.popular && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-brand-gold text-white text-xs rounded-full font-medium flex items-center">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Popular
                  </span>
                )}
                
                <h3 className="font-serif text-xl font-medium mb-2 text-brand-charcoal">
                  {service.name}
                </h3>
                
                <p className="text-brand-gold font-medium mb-3">
                  {service.price}
                </p>
                
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <BookingButton size="sm" />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Lash Services */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-brand-gold bg-opacity-10 text-brand-charcoal text-sm font-medium mb-4 animate-fade-up">
              Lash Services
            </span>
            
            <h2 className="heading-md mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Beautiful, Eye-Enhancing <span className="text-brand-gold">Lash Treatments</span>
            </h2>
            
            <p className="text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Our lash services are designed to enhance your natural beauty by creating fuller, longer lashes that frame your eyes perfectly. Whether you prefer a subtle enhancement or a dramatic look, we have options for every style.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lashServices.map((service, index) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl border border-gray-100 p-6 shadow-soft card-hover relative animate-fade-up"
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                {service.popular && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-brand-gold text-white text-xs rounded-full font-medium flex items-center">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Popular
                  </span>
                )}
                
                <h3 className="font-serif text-xl font-medium mb-2 text-brand-charcoal">
                  {service.name}
                </h3>
                
                <p className="text-brand-gold font-medium mb-3">
                  {service.price}
                </p>
                
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <BookingButton size="sm" />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-brand-pink bg-opacity-5 rounded-xl p-8 shadow-soft animate-fade-up">
              <h3 className="font-serif text-2xl font-medium mb-4 text-brand-charcoal">
                Important Information
              </h3>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  <strong>Pricing Note:</strong> Prices listed are starting points and may vary based on length, complexity, and additional services.
                </p>
                
                <p className="text-muted-foreground">
                  <strong>Appointments:</strong> We recommend booking in advance to secure your preferred time slot, especially for lash services which require longer appointment times.
                </p>
                
                <p className="text-muted-foreground">
                  <strong>Consultations:</strong> Complimentary consultations are available for first-time lash clients to discuss your preferences and determine the best service for your needs.
                </p>
                
                <p className="text-muted-foreground">
                  <strong>Cancellation Policy:</strong> Please provide at least 24 hours notice for cancellations to avoid a cancellation fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-brand-charcoal text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6 animate-fade-up">
              Ready for Your <span className="text-brand-gold">Beautique Experience</span>?
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Book your appointment today and let our skilled professionals pamper you with our premium services.
            </p>
            
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <BookingButton size="lg" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
