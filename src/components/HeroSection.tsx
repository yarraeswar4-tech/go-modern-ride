import { useState } from 'react';
import { MapPin, Navigation, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import heroImage from '@/assets/hero-car.jpg';

const HeroSection = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern ride-hailing service" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Your Ride,
                <span className="text-gradient block">Your Way</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 max-w-2xl">
                Book rides instantly, rent cars for longer trips, or drive with us to earn. 
                Safe, reliable, and affordable transportation at your fingertips.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 mb-8 text-white">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">4.8 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">2 min avg pickup</span>
                </div>
                <div className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">24/7 Available</span>
                </div>
              </div>
            </div>

            {/* Right Content - Search Box */}
            <div className="lg:justify-self-end w-full max-w-md mx-auto lg:mx-0">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-strong animate-slide-up">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Where are you going?</h3>
                
                <div className="space-y-4">
                  {/* Pickup Location */}
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <Input
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder="Pickup location"
                      className="pl-10 h-12 text-base border-2 border-gray-200 focus:border-primary"
                    />
                  </div>

                  {/* Connecting Line */}
                  <div className="flex justify-center">
                    <div className="w-px h-4 bg-gray-300"></div>
                  </div>

                  {/* Drop-off Location */}
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <MapPin className="w-4 h-4 text-destructive" />
                    </div>
                    <Input
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                      placeholder="Where to?"
                      className="pl-10 h-12 text-base border-2 border-gray-200 focus:border-primary"
                    />
                  </div>

                  {/* Book Now Button */}
                  <Button className="w-full h-12 text-lg font-semibold btn-hero mt-6">
                    Book Now
                  </Button>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-gray-200">
                  <button className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-gray-100 transition-colors group">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Navigation className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-gray-700">Ride</span>
                  </button>
                  
                  <button className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-gray-100 transition-colors group">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Clock className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-xs font-medium text-gray-700">Rental</span>
                  </button>
                  
                  <button className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-gray-100 transition-colors group">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <MapPin className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-xs font-medium text-gray-700">Outstation</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;