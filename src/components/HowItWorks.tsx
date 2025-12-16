import { Search, MessageSquare, Users, Tag, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Shortlist Dream Project",
    description: "Use our Search & Map, 30-sec videos & Live Virtual Site Visit to quickly shortlist your top 3 projects.",
    step: "01",
  },
  {
    icon: MessageSquare,
    title: "Express Interest",
    description: "After shortlisting your top 3 projects, plan a site visit to choose your Dream Project—our RM will guide you.",
    step: "02",
  },
  {
    icon: Users,
    title: "Join Group",
    description: "Once you have shortlisted your Dream Home, Join the Active Group of that project & choose your favorite inventory.",
    step: "03",
  },
  {
    icon: Tag,
    title: "Unlock Discount",
    description: "Enjoy exclusive discounts and benefits, saving significantly on your dream home through group buying power.",
    step: "04",
  },
  {
    icon: CheckCircle,
    title: "Finalize Purchase",
    description: "Complete your individual purchase with confidence, knowing you secured the best possible value.",
    step: "05",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Does Group
            <br />
            <span className="text-gradient">Togetherbuying Work?</span>
          </h2>
          <p className="text-muted-foreground">
            Follow the Simple 5 Steps to Your Dream Home
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl font-bold text-primary/10">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-2xl gradient-coral flex items-center justify-center shadow-coral">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>

                {/* Step Label */}
                <div className="mt-4 inline-block px-3 py-1 bg-coral-light text-primary text-xs font-semibold rounded-full">
                  STEP {step.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
