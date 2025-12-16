import { Button } from "@/components/ui/button";
import { Shield, Users, TrendingUp, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "150+", label: "Families Helped" },
  { icon: TrendingUp, value: "₹25Cr", label: "Total Savings" },
  { icon: Award, value: "20%", label: "Avg. Discount" },
  { icon: Shield, value: "100%", label: "Secure Process" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Happy family with new home keys"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-8 -right-4 md:right-8 bg-card rounded-2xl p-6 shadow-card-hover">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="font-bold text-xl text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-primary font-semibold mb-2">About Together Buying</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Unlock unbeatable deals through group buyings
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Buying a home is expensive, but what if home buyers could team up with their future neighbours & negotiate better deals just like big investors do?
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              That's what we've built at TogetherBuying.in — a platform that helps homebuyers unlock exclusive discounts through collective buying. Save big, stay secure, and enjoy full support from start to finish.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full gradient-coral text-primary-foreground px-8">
                Get in touch
              </Button>
              <Button variant="outline" className="rounded-full px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
