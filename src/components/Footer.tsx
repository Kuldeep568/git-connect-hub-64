import { Home, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4">
        <div className="relative -mb-16 z-10">
          <div className="bg-gradient-to-r from-primary to-coral-dark rounded-2xl p-8 md:p-12 text-primary-foreground">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Stay Informed, Save More!
                </h3>
                <p className="opacity-90">
                  Get updates on group-buying deals and exclusive savings opportunities.
                </p>
              </div>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-xl"
                />
                <Button variant="secondary" className="rounded-xl px-6 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo & Description */}
            <div>
              <a href="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-coral flex items-center justify-center">
                  <Home className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-primary font-bold text-xl">Together</span>
                  <span className="text-background font-bold text-xl -mt-1">buying.in</span>
                </div>
              </a>
              <p className="text-background/70 text-sm leading-relaxed">
                Shared dreams. Smart ownership. Helping you buy your dream home as a team.
              </p>
            </div>

            {/* Overview */}
            <div>
              <h4 className="font-bold text-background mb-4">Overview</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#properties" className="text-background/70 hover:text-primary transition-colors text-sm">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                    Corporate
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-background/70 hover:text-primary transition-colors text-sm">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-background/70 hover:text-primary transition-colors text-sm">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-background mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#properties" className="text-background/70 hover:text-primary transition-colors text-sm">
                    Join Group
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                    Articles
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="text-background/70 hover:text-primary transition-colors text-sm">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-background mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-background/70 text-sm">
                    1405, Supernova Astralis, Sector - 94, Noida, 201301
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="mailto:hello@togetherbuying.in" className="text-background/70 hover:text-primary transition-colors text-sm">
                    hello@togetherbuying.in
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="tel:+917042580018" className="text-background/70 hover:text-primary transition-colors text-sm">
                    +91 7042580018
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-background/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-background/50 text-sm text-center md:text-left">
                ©️ 2025 Together Buying. All rights reserved. A brand of My Housing Advisor Private Limited.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-background/50 hover:text-primary transition-colors text-sm">
                  Terms of use
                </a>
                <a href="#" className="text-background/50 hover:text-primary transition-colors text-sm">
                  Privacy policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
