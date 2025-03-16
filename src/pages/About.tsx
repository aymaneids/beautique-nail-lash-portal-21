
import { useEffect } from "react";
import PageHeader from "@/components/common/PageHeader";
import BookingButton from "@/components/ui/BookingButton";
import { CheckCircle2, Sparkles, ShieldCheck, UserHeart } from "lucide-react";

const AboutPage = () => {
  // Update document title
  useEffect(() => {
    document.title = "About Us | Beautique Nails & Lash Lounge";
  }, []);

  const values = [
    {
      id: 1,
      title: "Personalized Service",
      description: "We take the time to understand your preferences and provide individualized attention to ensure your complete satisfaction.",
      icon: UserHeart,
    },
    {
      id: 2,
      title: "Premium Quality",
      description: "We use only the highest quality products and techniques to deliver exceptional results that last.",
      icon: Sparkles,
    },
    {
      id: 3,
      title: "Cleanliness & Hygiene",
      description: "Your health and safety are our top priorities. We maintain rigorous sanitation protocols for all equipment and work areas.",
      icon: ShieldCheck,
    },
    {
      id: 4,
      title: "Attention to Detail",
      description: "We pride ourselves on our meticulous attention to detail in every service we provide.",
      icon: CheckCircle2,
    },
  ];

  const team = [
    {
      id: 1,
      name: "Lisa Chen",
      role: "Founder & Nail Artist",
      description: "With over 15 years of experience, Lisa founded Beautique with a vision of bringing premium nail and lash services to Beaver Dam.",
      bgColor: "from-pink-200 to-pink-300",
    },
    {
      id: 2,
      name: "Emma Johnson",
      role: "Senior Lash Technician",
      description: "Emma specializes in creating stunning, natural-looking lash extensions tailored to each client's unique features.",
      bgColor: "from-blue-200 to-blue-300",
    },
    {
      id: 3,
      name: "Sophia Rivera",
      role: "Nail Design Specialist",
      description: "Sophia's artistic talent and creativity make her a favorite for clients seeking unique and intricate nail art designs.",
      bgColor: "from-purple-200 to-purple-300",
    },
  ];

  return (
    <main className="pt-20">
      {/* Header Section */}
      <section className="section-padding-top bg-white">
        <div className="container-custom">
          <PageHeader
            title="About Beautique Nails & Lash Lounge"
            subtitle="Discover the story behind Beaver Dam's premier nail and lash salon, where beauty meets personalized service in a classy atmosphere."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
            <div className="animate-fade-up">
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                {/* This would normally be an actual image - using a placeholder for now */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200"></div>
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="heading-md">Our Story</h2>
              <p className="text-muted-foreground">
                Beautique Nails & Lash Lounge was founded with a simple mission: to provide exceptional nail and lash services in a welcoming, upscale environment. We believe that everyone deserves a little luxury in their lives, and our salon offers an escape from the everyday.
              </p>
              <p className="text-muted-foreground">
                Located in the heart of Beaver Dam, Wisconsin, our salon combines technical expertise with a commitment to personalized service. We take the time to understand your preferences and needs, ensuring that you leave our salon feeling beautiful and confident.
              </p>
              <p className="text-muted-foreground">
                What sets us apart is our dedication to cleanliness and hygiene. We follow rigorous sanitation protocols to ensure your safety and peace of mind during every visit.
              </p>
              <div className="pt-4">
                <BookingButton size="default" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-brand-gold bg-opacity-10 text-brand-charcoal text-sm font-medium mb-4 animate-fade-up">
              Our Values
            </span>
            
            <h2 className="heading-lg mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              What Sets Us <span className="text-brand-gold">Apart</span>
            </h2>
            
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
              At Beautique, our values guide everything we do. From the products we choose to the service we provide, these principles are at the heart of our business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.id}
                className="bg-white rounded-xl p-6 shadow-soft card-hover animate-fade-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-brand-pink bg-opacity-20 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-brand-charcoal" />
                </div>
                
                <h3 className="font-serif text-xl font-medium mb-3 text-brand-charcoal">
                  {value.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-brand-pink bg-opacity-10 text-brand-charcoal text-sm font-medium mb-4 animate-fade-up">
              Our Team
            </span>
            
            <h2 className="heading-lg mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Meet Our <span className="text-brand-gold">Skilled Professionals</span>
            </h2>
            
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Our team of experienced nail artists and lash technicians are passionate about their craft and dedicated to providing you with exceptional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.id}
                className="bg-white rounded-xl overflow-hidden shadow-elegant animate-fade-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className={`h-64 bg-gradient-to-br ${member.bgColor}`}>
                  {/* This would normally be an actual image - using a placeholder for now */}
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium mb-1 text-brand-charcoal">
                    {member.name}
                  </h3>
                  
                  <p className="text-brand-gold text-sm mb-4">
                    {member.role}
                  </p>
                  
                  <p className="text-muted-foreground">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-brand-charcoal text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6 animate-fade-up">
              Ready to Experience the <span className="text-brand-gold">Beautique Difference</span>?
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Book your appointment today and discover why our clients love us.
              We look forward to welcoming you to our salon!
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

export default AboutPage;
