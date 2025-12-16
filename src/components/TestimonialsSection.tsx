import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Vikrant Grover",
    image: "https://i.pravatar.cc/100?img=33",
    rating: 5,
    text: "Exceptional service! They guided us to the perfect luxury flat, offering personalized options and expert advice throughout the entire process.",
  },
  {
    name: "Arun Chaudhary",
    image: "https://i.pravatar.cc/100?img=12",
    rating: 5,
    text: "The team made finding our luxury flat effortless. Their expertise, professionalism, and dedication helped us save over ₹50 Lakhs!",
  },
  {
    name: "Naveen",
    image: "https://i.pravatar.cc/100?img=15",
    rating: 5,
    text: "We recently bought our first home through Together Buying, and the experience was absolutely fantastic. Highly recommended!",
  },
  {
    name: "Ankit Kumar",
    image: "https://i.pravatar.cc/100?img=53",
    rating: 5,
    text: "Our experience with Together Buying was exceptional from the very first call. Amazing support and great savings!",
  },
  {
    name: "Babita Sharma",
    image: "https://i.pravatar.cc/100?img=45",
    rating: 5,
    text: "When we started researching the home-buying process for our first home, we were surprised by how much we could save through group buying.",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-warning text-warning" />
              ))}
            </div>
            <span className="text-muted-foreground">5 stars, 150+ reviews</span>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 rounded-full bg-card shadow-card flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 rounded-full bg-card shadow-card flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card rounded-2xl p-8 shadow-soft text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-coral-light"
                    />
                    <h3 className="font-bold text-xl text-foreground mb-2">
                      {testimonial.name}
                    </h3>
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
