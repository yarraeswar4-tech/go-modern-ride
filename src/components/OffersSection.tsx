import { Percent, Gift, Zap, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OffersSection = () => {
  const offers = [
    {
      icon: Percent,
      title: "50% Off First Ride",
      description: "New users get 50% discount on their first booking. Valid for rides up to ₹200.",
      code: "WELCOME50",
      validity: "Valid till 31st Dec",
      gradient: "from-primary to-accent",
      textColor: "text-white",
    },
    {
      icon: Gift,
      title: "Refer & Earn ₹100",
      description: "Invite friends and earn ₹100 for each successful referral. No limit on earnings!",
      code: "REFER100",
      validity: "Ongoing offer",
      gradient: "from-purple-500 to-pink-500",
      textColor: "text-white",
    },
    {
      icon: Zap,
      title: "Weekend Special",
      description: "30% off on all weekend rides. Perfect for your weekend adventures and outings.",
      code: "WEEKEND30",
      validity: "Every weekend",
      gradient: "from-orange-500 to-red-500",
      textColor: "text-white",
    },
    {
      icon: Clock,
      title: "Late Night Rides",
      description: "20% discount on rides between 10 PM to 6 AM. Safe and secure night travel.",
      code: "NIGHT20",
      validity: "Daily 10 PM - 6 AM",
      gradient: "from-indigo-500 to-purple-600",
      textColor: "text-white",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Exclusive <span className="text-gradient">Offers & Discounts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Save more on every ride with our exciting offers and promotional codes. 
            Check back regularly for new deals!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {offers.map((offer, index) => (
            <div
              key={offer.title}
              className="group relative overflow-hidden rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${offer.gradient}`}></div>
              
              {/* Content */}
              <div className="relative p-6 h-full flex flex-col">
                {/* Icon */}
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <offer.icon className={`w-6 h-6 ${offer.textColor}`} />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold ${offer.textColor} mb-3`}>
                  {offer.title}
                </h3>

                {/* Description */}
                <p className={`${offer.textColor} opacity-90 text-sm leading-relaxed mb-4 flex-grow`}>
                  {offer.description}
                </p>

                {/* Promo Code */}
                <div className="bg-white/20 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-xs ${offer.textColor} opacity-75 mb-1`}>Promo Code</p>
                      <p className={`font-bold ${offer.textColor} tracking-wider`}>{offer.code}</p>
                    </div>
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="text-xs px-3 py-1 bg-white/20 hover:bg-white/30 border-white/30"
                    >
                      Copy
                    </Button>
                  </div>
                </div>

                {/* Validity */}
                <div className="flex items-center justify-between">
                  <p className={`text-xs ${offer.textColor} opacity-75`}>
                    {offer.validity}
                  </p>
                  <ArrowRight className={`w-4 h-4 ${offer.textColor} group-hover:translate-x-1 transition-transform duration-300`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-soft max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              How to Use Promo Codes
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-primary">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Book Your Ride</h4>
                  <p className="text-sm text-muted-foreground">Select pickup and drop-off locations</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-primary">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Apply Code</h4>
                  <p className="text-sm text-muted-foreground">Enter promo code at checkout</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-primary">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Save Money</h4>
                  <p className="text-sm text-muted-foreground">Enjoy your discounted ride</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;