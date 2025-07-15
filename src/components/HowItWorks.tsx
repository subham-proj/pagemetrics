import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";

export default function HowItWorks() {
  const data = [
    {
      title: "Step 1",
      content: (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>
              <Avatar>
                <AvatarFallback className="bg-green-600 text-white">
                  1
                </AvatarFallback>
              </Avatar>
              <p className="py-5">Sign Up for PageMetrics</p>
            </CardTitle>
            <CardDescription>
              Create your free account in seconds. No credit card required to get started.
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      ),
    },
    {
      title: "Step 2",
      content: (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>
              <Avatar>
                <AvatarFallback className="bg-green-600 text-white">
                  2
                </AvatarFallback>
              </Avatar>
              <p className="py-5">Embed the Tracking Script</p>
            </CardTitle>
            <CardDescription>
              Copy and paste a single line of code into your website. Start collecting data instantly.
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      ),
    },
    {
      title: "Step 3",
      content: (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>
              <Avatar>
                <AvatarFallback className="bg-green-600 text-white">
                  3
                </AvatarFallback>
              </Avatar>
              <p className="py-5">View Insights on Your Dashboard</p>
            </CardTitle>
            <CardDescription>
              Analyze page views, sessions, referrers, and more with beautiful, interactive charts.
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      ),
    },
  ];
  return (
    <div className="w-full" id="howitworks">
      <Timeline data={data} />
    </div>
  );
}
