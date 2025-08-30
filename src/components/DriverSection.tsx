import { DollarSign, Clock, Shield, TrendingUp, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import driverImage from '@/assets/driver-hero.jpg';

const DriverSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Earn More",
      description: "Competitive rates with weekly payouts and bonus incentives for top performers.",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work when you want. Set your own schedule and maintain perfect work-life balance.",
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "Comprehensive insurance coverage for you and your vehicle during rides.",
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Access to training programs and opportunities to grow within our platform.",
    },
  ];

  const stats = [
    { icon: DollarSign, value: "₹25,000", label: "Avg Monthly Earnings" },
    { icon: Users, value: "10,000+", label: "Active Drivers" },
    { icon: Star, value: "4.9", label: "Driver Rating" },
  ];

  return (
    <section id="drive" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="mb-12 lg:mb-0">
            <div className="relative">
              <img 
                src={driverImage} 
                alt="Happy driver partner" 
                className="rounded-2xl shadow-strong w-full h-[500px] object-cover"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-strong animate-float">
                <div className="grid grid-cols-1 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Drive with Us and 
              <span className="text-gradient block">Earn on Your Terms</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of drivers who are earning a reliable income with flexible working hours. 
              Get started in just a few simple steps and start earning today.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Requirements */}
            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Simple Requirements:</h4>
              <ul className="space-y-2">
                {[
                  "Valid driving license (minimum 2 years)",
                  "Vehicle registration documents",
                  "Valid insurance and PUC certificate",
                  "Smartphone with internet connection"
                ].map((requirement, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero flex-1">
                Start Driving Today
              </Button>
              <Button variant="outline" className="flex-1">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverSection;