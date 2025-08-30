import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const companyLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Press', href: '#press' },
    { label: 'Blog', href: '#blog' },
  ];

  const serviceLinks = [
    { label: 'Book a Ride', href: '#book' },
    { label: 'Rent a Car', href: '#rentals' },
    { label: 'Outstation', href: '#outstation' },
    { label: 'Corporate', href: '#corporate' },
  ];

  const supportLinks = [
    { label: 'Help Center', href: '#help' },
    { label: 'Safety', href: '#safety' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Privacy Policy', href: '#privacy' },
  ];

  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 
    'Hyderabad', 'Pune', 'Kolkata', 'Ahmedabad'
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-5 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Go Modern Ride</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Your trusted ride partner for safe, reliable, and affordable transportation. 
              Book rides, rent cars, and plan outstation trips with ease.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300">+91 9876543210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300">support@gomodernride.com</span>
              </div>
            </div>

            {/* App Download */}
            <div className="space-y-3">
              <p className="text-white font-semibold">Download Our App</p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Download className="w-4 h-4 mr-2" />
                  Play Store
                </Button>
                <Button variant="outline" size="sm" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Download className="w-4 h-4 mr-2" />
                  App Store
                </Button>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cities Section */}
        <div className="py-8 border-t border-white/10">
          <h3 className="text-white font-semibold mb-4">Available in Cities</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {cities.map((city) => (
              <a 
                key={city} 
                href={`#${city.toLowerCase()}`}
                className="text-gray-300 hover:text-primary transition-colors text-sm"
              >
                {city}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <div className="text-gray-300 text-sm">
            © 2024 Go Modern Ride. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-gray-300 text-sm">Follow us:</span>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#facebook' },
                { icon: Twitter, href: '#twitter' },
                { icon: Instagram, href: '#instagram' },
                { icon: Linkedin, href: '#linkedin' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;