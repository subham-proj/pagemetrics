import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DatabaseIcon,
  ShieldIcon,
  BarChartIcon,
  LinkIcon,
  CpuIcon,
  ClockIcon,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Real-time Page Views",
      description:
        "Monitor your website traffic as it happens. Instantly see which pages are most popular.",
      icon: <BarChartIcon className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Session Analytics",
      description:
        "Understand user journeys, session durations, and engagement across your site.",
      icon: <ClockIcon className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Referrer Tracking",
      description:
        "See where your visitors are coming from—track sources, campaigns, and referring sites.",
      icon: <LinkIcon className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Visitor Location Insights",
      description:
        "Visualize your audience by country, city, and region to tailor your content and marketing.",
      icon: <DatabaseIcon className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Custom Events",
      description:
        "Track button clicks, form submissions, and any custom events that matter to your business.",
      icon: <CpuIcon className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Privacy-first Analytics",
      description:
        "We respect your users' privacy. All data is anonymized and GDPR-compliant by default.",
      icon: <ShieldIcon className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Dashboard Visualizations",
      description:
        "Beautiful, interactive charts and graphs help you make sense of your data at a glance.",
      icon: <BarChartIcon className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Easy Script Integration",
      description:
        "Add a single line of code to your site and start tracking in minutes—no coding required.",
      icon: <LinkIcon className="w-10 h-10 text-green-600" />,
    },
  ];

  return (
    <section className="py-12" id="features">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-xl text-center py-5 text-green-600">Features</p>
        <h2 className="text-center text-4xl font-bold mb-4">
          Powerful Website Analytics, Simplified
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Track, analyze, and grow your website with actionable insights from PageMetrics.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center p-6 rounded-lg"
            >
              <div className="mb-4">{feature.icon}</div>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
