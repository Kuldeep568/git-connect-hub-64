import { Heart, Share2, BarChart2, Phone, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  name: string;
  location: string;
  image: string;
  targetPrice: string;
  developerPrice: string;
  savings: string;
  discount: string;
  groupSize: number;
  openings: number;
  joinTill: string;
  badges?: string[];
}

const PropertyCard = ({
  name,
  location,
  image,
  targetPrice,
  developerPrice,
  savings,
  discount,
  groupSize,
  openings,
  joinTill,
  badges = [],
}: PropertyCardProps) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-soft card-hover border border-border">
      {/* Image Section */}
      <div className="relative h-52">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {badges.map((badge) => (
            <Badge
              key={badge}
              className={`text-xs ${
                badge === "Featured"
                  ? "bg-primary text-primary-foreground"
                  : badge === "Pre Launch"
                  ? "bg-warning text-white"
                  : "bg-success text-white"
              }`}
            >
              {badge}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex gap-2">
          <button className="p-2 bg-white/90 backdrop-blur rounded-full hover:bg-white transition-colors">
            <Heart className="w-4 h-4 text-foreground" />
          </button>
          <button className="p-2 bg-white/90 backdrop-blur rounded-full hover:bg-white transition-colors">
            <BarChart2 className="w-4 h-4 text-foreground" />
          </button>
          <button className="p-2 bg-white/90 backdrop-blur rounded-full hover:bg-white transition-colors">
            <Share2 className="w-4 h-4 text-foreground" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-foreground mb-1 hover:text-primary transition-colors cursor-pointer">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">{location}</p>

        {/* Group Info */}
        <div className="flex justify-between mb-4">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Group Size</p>
              <p className="text-sm font-semibold">{groupSize} Members</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Openings</p>
            <p className="text-sm font-semibold text-primary">{openings} Left</p>
          </div>
        </div>

        {/* Join Till */}
        <div className="flex items-center gap-2 mb-4 p-2 bg-muted rounded-lg">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <div>
            <span className="text-xs text-muted-foreground">Join Till: </span>
            <span className="text-sm font-semibold">{joinTill}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs text-muted-foreground">Target Price</p>
            <p className="text-lg font-bold text-foreground">{targetPrice}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Developer price</p>
            <p className="text-lg font-bold text-muted-foreground line-through">{developerPrice}</p>
          </div>
        </div>

        {/* Savings Banner */}
        <div className="bg-coral-light rounded-xl p-3 mb-4">
          <p className="text-center text-primary font-bold">Up to {savings} off</p>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 rounded-xl gap-2">
            <Phone className="w-4 h-4" />
            Call Us
          </Button>
          <Button className="flex-1 rounded-xl gradient-coral text-primary-foreground">
            Join Group
          </Button>
        </div>

        {/* Discount Info */}
        <p className="text-center text-xs text-muted-foreground mt-3">
          Get upto <span className="text-primary font-semibold">{discount}</span> discount on this property
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
