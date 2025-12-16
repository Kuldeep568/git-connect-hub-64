import { Search, MapPin, SlidersHorizontal, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  "Dwarka Expressway",
  "Golf Course Road",
  "Central Gurgaon",
  "Golf Course Extension",
  "SPR",
  "Sohna",
  "New Gurgaon",
  "Manesar",
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-coral-light via-background to-background" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 py-12 lg:py-20">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <p className="text-muted-foreground text-sm md:text-base mb-2 animate-fade-up">
              Looking to buy your Dream Home?
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="text-gradient">Why Pay</span>
              <br />
              <span className="text-foreground">More alone ?</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Unlock Bigger Savings Together!
            </p>
            
            <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="rounded-full gradient-coral text-primary-foreground px-8 py-6 text-lg shadow-coral hover:opacity-90 transition-opacity">
                Join Community
                <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-8 flex items-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted border-2 border-background"
                    style={{
                      backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`,
                      backgroundSize: "cover",
                    }}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                we've saved <span className="font-bold text-primary">Rs. 25Cr</span> for <span className="font-bold text-foreground">150+ Families</span>.
              </p>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
                alt="Modern luxury apartment building"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-4 -left-4 md:left-8 bg-card rounded-2xl p-4 shadow-card-hover animate-float">
              <p className="text-sm text-muted-foreground mb-1">Unique Group buying plans.</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-xs text-muted-foreground">Active Groups Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-card rounded-2xl shadow-card p-4 md:p-6 -mt-4 relative z-10 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="grid md:grid-cols-4 gap-4 items-end">
            {/* City */}
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">City</label>
              <div className="flex items-center gap-2 p-3 bg-muted rounded-xl">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">Gurugram</span>
              </div>
            </div>

            {/* Search Input */}
            <div className="md:col-span-2">
              <label className="text-xs text-muted-foreground mb-1 block">Find Your Dream Home</label>
              <div className="flex items-center gap-2 p-3 bg-muted rounded-xl">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for Developers, Location, Projects"
                  className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* Filter & Search Button */}
            <div className="flex gap-2">
              <button className="p-3 bg-muted rounded-xl hover:bg-muted/80 transition-colors">
                <SlidersHorizontal className="w-5 h-5 text-muted-foreground" />
              </button>
              <Button className="flex-1 gradient-coral text-primary-foreground rounded-xl gap-2">
                <Search className="w-4 h-4" />
                Search
              </Button>
              <button className="p-3 bg-muted rounded-xl hover:bg-muted/80 transition-colors">
                <Mic className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Location Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {locations.map((location) => (
              <button
                key={location}
                className="px-4 py-2 text-sm bg-muted hover:bg-primary/10 hover:text-primary rounded-full transition-colors"
              >
                {location}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
