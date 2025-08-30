import { MapPin, Navigation, Shield, Clock, Smartphone, CheckCircle } from 'lucide-react';
import mapPhoneImage from '@/assets/map-phone.jpg';

const MapTrackingSection = () => {
  const features = [
    {
      icon: Navigation,
      title: "Real-time GPS Tracking",
      description: "Track your ride in real-time with precise GPS location updates every few seconds.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Share your trip details with family and friends. Emergency SOS button available.",
    },
    {
      icon: Clock,
      title: "ETA Updates",
      description: "Get accurate arrival time estimates with live traffic data and route optimization.",
    },
    {
      icon: Smartphone,
      title: "Smart Notifications",
      description: "Receive instant notifications about driver arrival, trip start, and completion.",
    },
  ];

  const trackingSteps = [
    {
      step: "1",
      title: "Book Your Ride",
      description: "Choose your pickup and drop location, select vehicle type",
    },
    {
      step: "2", 
      title: "Track Driver",
      description: "See your driver's live location and estimated arrival time",
    },
    {
      step: "3",
      title: "Real-time Journey",
      description: "Follow your route with live GPS tracking throughout the trip",
    },
    {
      step: "4",
      title: "Safe Arrival",
      description: "Get notified when you reach your destination safely",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="mb-12 lg:mb-0 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Track Your Ride with 
              <span className="text-gradient block">Live GPS Technology</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Stay informed every step of the way with our advanced tracking system. 
              Know exactly where your driver is and when they'll arrive.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="flex gap-4 p-4 rounded-lg hover:bg-background/50 transition-colors group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* How it Works */}
            <div className="bg-background/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">How Live Tracking Works</h3>
              <div className="space-y-4">
                {trackingSteps.map((step, index) => (
                  <div key={step.step} className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-white">{step.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Map Visual */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Main Phone Image */}
              <div className="relative mx-auto max-w-sm">
                <img 
                  src={mapPhoneImage} 
                  alt="Live GPS tracking on mobile app" 
                  className="w-full rounded-3xl shadow-strong"
                />
                
                {/* Floating elements to show tracking features */}
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-medium animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-900">Driver Found</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-medium animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-gray-900">ETA: 3 mins</span>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-8 bg-white rounded-2xl p-3 shadow-medium animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-gray-900">Live GPS</span>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl -z-10 transform rotate-3 scale-105"></div>
            </div>

            {/* Safety Badge */}
            <div className="mt-8 bg-background rounded-2xl p-6 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Safety Guaranteed</h4>
                  <p className="text-sm text-muted-foreground">
                    All rides are monitored 24/7 with emergency support available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapTrackingSection;