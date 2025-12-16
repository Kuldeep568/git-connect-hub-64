import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is TogetherBuying?",
    answer: "TogetherBuying is India's first group buying platform for real estate. We help homebuyers team up with future neighbors to negotiate better deals on properties, just like big investors do. Through collective buying power, members can save significantly on their dream homes.",
  },
  {
    question: "How does TogetherBuying work?",
    answer: "It's simple! First, shortlist your dream projects using our tools. Then, express interest and join an active buying group for your chosen property. When enough buyers join, we negotiate exclusive discounts with developers. You then finalize your purchase at the discounted price.",
  },
  {
    question: "Why should I choose TogetherBuying over brokers or traditional channels?",
    answer: "Unlike traditional brokers who work for developers, we work for buyers. Our group buying model gives you 10-20% discounts that individual buyers can't access. Plus, we provide complete transparency, data-driven insights, and support throughout the buying process.",
  },
  {
    question: "Is TogetherBuying available in all cities?",
    answer: "Currently, we operate in Gurugram and New Delhi NCR regions. We're rapidly expanding and plan to cover more cities soon. Subscribe to our newsletter to stay updated on new locations.",
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach us via email at hello@togetherbuying.in or call us at +91 7042580018. Our team is available Monday to Saturday, 9 AM to 7 PM. You can also use WhatsApp for quick queries.",
  },
  {
    question: "Is there any membership fee to join?",
    answer: "Joining TogetherBuying and browsing properties is completely free. We only charge a small success fee after you successfully purchase a property through our platform, which is much lower than traditional brokerage fees.",
  },
];

const FAQSection = () => {
  return (
    <section id="faqs" className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-2">FAQS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              You have Questions. We have Answers.
            </h2>
            <p className="text-muted-foreground">
              Get answers to some commonly asked questions about Together Buying platform and our business.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
