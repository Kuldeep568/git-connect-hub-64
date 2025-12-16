import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
              <Home className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-primary font-bold text-lg md:text-xl">Together</span>
              <span className="text-foreground font-bold text-lg md:text-xl -mt-1">buying.in</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground font-medium hover:text-primary transition-colors border-b-2 border-primary pb-1">
              Home
            </Link>
            <a href="#properties" className="text-muted-foreground font-medium hover:text-primary transition-colors">
              Properties
            </a>
            <a href="#about" className="text-muted-foreground font-medium hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-muted-foreground font-medium hover:text-primary transition-colors">
              Contact Us
            </a>
            <div className="relative group">
              <button className="flex items-center gap-1 text-muted-foreground font-medium hover:text-primary transition-colors">
                Resources
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card rounded-lg shadow-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-border">
                <a href="#" className="block px-4 py-3 text-sm text-foreground hover:bg-muted rounded-t-lg transition-colors">
                  Articles
                </a>
                <a href="#" className="block px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors">
                  Case Studies
                </a>
                <a href="#" className="block px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors">
                  News
                </a>
                <a href="#faqs" className="block px-4 py-3 text-sm text-foreground hover:bg-muted rounded-b-lg transition-colors">
                  FAQs
                </a>
              </div>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="rounded-full px-6">
              Corporate
            </Button>
            <Link to="/login">
              <Button className="rounded-full px-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground hover:opacity-90">
                Sign In
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-foreground font-medium py-2">Home</Link>
              <a href="#properties" className="text-muted-foreground font-medium py-2">Properties</a>
              <a href="#about" className="text-muted-foreground font-medium py-2">About Us</a>
              <a href="#contact" className="text-muted-foreground font-medium py-2">Contact Us</a>
              <a href="#faqs" className="text-muted-foreground font-medium py-2">FAQs</a>
              <div className="flex gap-3 pt-4">
                <Button variant="outline" className="flex-1 rounded-full">
                  Corporate
                </Button>
                <Link to="/login" className="flex-1">
                  <Button className="w-full rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
