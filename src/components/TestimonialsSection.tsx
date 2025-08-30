import { Star, Quote, Shield, Clock, Headphones } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      avatar: "PS",
      rating: 5,
      text: "Amazing service! The drivers are professional and the app is so easy to use. I've been using it for 6 months now and never had a bad experience.",
    },
    {
      name: "Rahul Kumar",
      role: "Business Owner",
      avatar: "RK",
      rating: 5,
      text: "Perfect for business trips. The cars are always clean and drivers are punctual. The pricing is transparent with no hidden charges.",
    },
    {
      name: "Anjali Patel",
      role: "College Student",
      avatar: "AP",
      rating: 5,
      text: "Love the student discounts! It's my go-to app for getting around the city. The safety features give my parents peace of mind too.",
    },
  ];

  const trustBadges = [
    {
      icon: Shield,
      title: "100% Safe",
      description: "Verified drivers with background checks",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round the clock customer assistance",
    },
    {
      icon: Headphones,
      title: "Quick Response",
      description: "Average response time under 2 minutes",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {trustBadges.map((badge, index) => (
            <div
              key={badge.title}
              className="text-center p-6 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <badge.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{badge.title}</h3>
              <p className="text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what thousands of satisfied customers 
            have to say about their experience with Go Modern Ride.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gradient">50K+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gradient">1M+</div>
              <p className="text-muted-foreground">Rides Completed</p>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gradient">4.9</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gradient">50+</div>
              <p className="text-muted-foreground">Cities Covered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;