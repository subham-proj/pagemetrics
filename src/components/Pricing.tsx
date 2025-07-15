import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Get started with essential analytics for small sites.",
    features: [
      "Up to 5,000 page views/mo",
      "1 website",
      "Basic dashboard",
      "Referrer & location tracking",
      "Privacy-first analytics",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    description: "Advanced analytics for growing businesses.",
    features: [
      "Up to 100,000 page views/mo",
      "10 websites",
      "Advanced dashboard & insights",
      "Custom events",
      "Email reports",
      "Priority support",
    ],
    cta: "Get Pro",
    highlighted: true,
  },
  {
    name: "Business",
    price: "$49",
    period: "/mo",
    description: "For high-traffic sites and agencies.",
    features: [
      "Up to 1M page views/mo",
      "Unlimited websites",
      "All Pro features",
      "Team access",
      "Custom integrations",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-black" id="pricing">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 dark:text-gray-300">
          Choose the plan that fits your needs. No hidden fees, cancel anytime.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, idx) => (
          <Card
            key={plan.name}
            className={`flex flex-col items-center p-8 rounded-2xl shadow-lg border-2 transition-transform duration-200 ${
              plan.highlighted
                ? "border-green-600 scale-105 bg-green-50 dark:bg-green-950"
                : "border-gray-200 dark:border-gray-800"
            }`}
          >
            <CardHeader className="w-full flex flex-col items-center mb-4">
              <CardTitle className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-green-600" : ""}`}>{plan.name}</CardTitle>
              <div className="flex items-end mb-2">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-gray-500 ml-1">{plan.period}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{plan.description}</p>
            </CardHeader>
            <CardContent className="flex-1 w-full">
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700 dark:text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" /> {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  plan.highlighted
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {plan.cta}
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
} 