import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What data does PageMetrics track?",
      answer:
        "PageMetrics tracks page views, sessions, referrers, visitor locations, and custom events. All data is anonymized and never includes personally identifiable information.",
    },
    {
      question: "How do I install the tracking script?",
      answer:
        "After signing up, you'll receive a unique script tag. Simply copy and paste it into your website's <head> section to start tracking instantly.",
    },
    {
      question: "Is visitor data private and secure?",
      answer:
        "Yes! We are privacy-first. All analytics data is anonymized, encrypted, and fully GDPR-compliant. We never sell or share your data.",
    },
    {
      question: "Can I track multiple websites with one account?",
      answer:
        "Absolutely. You can add and manage multiple websites from a single PageMetrics dashboard.",
    },
    {
      question: "What is the pricing model?",
      answer:
        "We offer a free tier with core analytics features. Paid plans unlock advanced insights, higher data limits, and priority support. See our pricing page for details.",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16" id="faq">
      <p className="text-xl text-center py-5 text-green-600">
        Frequently Asked Questions
      </p>
      <h2 className="text-center text-4xl font-bold mb-12">
        Everything you need to know about PageMetrics
      </h2>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="text-lg font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 dark:text-gray-300">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
