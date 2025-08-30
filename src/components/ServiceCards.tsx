import { Car, Clock, MapPin, Shield, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiceCards = () => {
  const services = [
    {
      icon: Zap,
      title: "Book a Ride",
      description: "Quick rides across the city with verified drivers. Available 24/7 with transparent pricing.",
      features: ["Instant booking", "Live tracking", "Cashless payment", "24/7 support"],
      cta: "Book Now",
      gradient: "from-primary to-primary-light",
    },
    {
      icon: Car,
      title: "Rent a Car",
      description: "Self-drive cars for hours, days, or weeks. Perfect for business trips and weekend getaways.",
      features: ["Flexible duration", "Insurance included", "Fuel efficient cars", "Easy booking"],
      cta: "Rent Now",
      gradient: "from-accent to-primary",
    },
    {
      icon: MapPin,
      title: "Outstation Trips",
      description: "Comfortable intercity travel with experienced drivers. Door-to-door service across states.",
      features: ["Long distance travel", "Professional drivers", "Competitive rates", "Multiple stops"],
      cta: "Plan Trip",
      gradient: "from-secondary to-accent",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Choose Your <span className="text-gradient">Perfect Ride</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you need a quick ride, want to drive yourself, or planning a long journey - we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon with Gradient Background */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button className="w-full btn-hero group-hover:shadow-strong transition-all duration-300">
                {service.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold text-foreground">100%</span>
              </div>
              <p className="text-sm text-muted-foreground">Verified Drivers</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold text-foreground">50K+</span>
              </div>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold text-foreground">24/7</span>
              </div>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Car className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold text-foreground">1000+</span>
              </div>
              <p className="text-sm text-muted-foreground">Rides Daily</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;