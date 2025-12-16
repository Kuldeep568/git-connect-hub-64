import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const properties = [
  {
    name: "Experion One 42",
    location: "Sector - 42, Gurugram",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    targetPrice: "₹ 21.50 Cr",
    developerPrice: "₹ 25 Cr",
    savings: "3.50 Crore",
    discount: "14%",
    groupSize: 3,
    openings: 2,
    joinTill: "31st Dec, 25",
    badges: ["Featured", "Pre Launch"],
  },
  {
    name: "Godrej Miraya",
    location: "Sector - 43, Gurugram",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    targetPrice: "₹ 9.06 Cr",
    developerPrice: "₹ 10.30 Cr",
    savings: "1.24 Crore",
    discount: "12%",
    groupSize: 4,
    openings: 2,
    joinTill: "31st Dec, 25",
    badges: ["Fast Selling"],
  },
  {
    name: "Sobha Altus",
    location: "Sector - 106, Gurugram",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    targetPrice: "₹ 6.55 Cr",
    developerPrice: "₹ 7.30 Cr",
    savings: "75 L",
    discount: "10%",
    groupSize: 4,
    openings: 4,
    joinTill: "31st Dec, 25",
    badges: ["Pre Launch"],
  },
  {
    name: "Emaar Urban Ascent",
    location: "Sector - 112, Gurugram",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
    targetPrice: "₹ 4.42 Cr",
    developerPrice: "₹ 4.70 Cr",
    savings: "28 L",
    discount: "6%",
    groupSize: 6,
    openings: 6,
    joinTill: "31st Dec, 25",
    badges: [],
  },
];

const PropertiesSection = () => {
  return (
    <section id="properties" className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Top Properties
            </h2>
            <p className="text-muted-foreground">
              Discover premium properties with exclusive group buying discounts
            </p>
          </div>
          <Button variant="outline" className="rounded-full gap-2 self-start">
            View All
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          <Button className="rounded-full gradient-coral text-primary-foreground">
            Featured
          </Button>
          <Button variant="outline" className="rounded-full">
            Pre Launch
          </Button>
          <Button variant="outline" className="rounded-full">
            Fast Selling
          </Button>
        </div>

        {/* Properties Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <div
              key={property.name}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
