import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        {/* Brand and About Section */}
        <div className="space-y-4 flex flex-col items-center">
          <h2 className="text-2xl font-bold">
            <span className="text-black">Page</span><span className="text-green-600">Metrics</span>
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-400 leading-relaxed text-center">
            Actionable website analytics made simple. Track, analyze, and grow with privacy-first insights from PageMetrics.
          </p>
          <div className="flex flex-row justify-center">
            <a href="#">
              <FacebookIcon className="mr-3 text-gray-500 hover:text-green-600" />
            </a>
            <a href="#">
              <TwitterIcon className="mr-3 text-gray-500 hover:text-green-600" />
            </a>
            <a href="#">
              <LinkedinIcon className="mr-3 text-gray-500 hover:text-green-600" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} PageMetrics. All rights reserved.
      </div>
    </footer>
  );
}
