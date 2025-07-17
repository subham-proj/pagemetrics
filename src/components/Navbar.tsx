// "use client";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Toaster } from "./ui/toaster";

// import Waitlist from "@/components/Waitlist";

export default function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <Link href="#" className="mr-6 sm:flex" prefetch={false}>
            <span className="text-2xl font-bold">
              <span className="text-black">Page</span><span className="text-green-600">Metrics</span>
            </span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              href="#home"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#features"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Features
            </Link>
            {/* <Link
              href="#pricing"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Pricing
            </Link> */}
            <Link
              href="#howitworks"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              How it works
            </Link>
            <Link
              href="#faq"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              FAQs
            </Link>
            <span className="py-2">
              {/* <Waitlist /> */}
              <Toaster />
            </span>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="#home" className="mr-6 hidden lg:flex" prefetch={false}>
        <span className="text-2xl font-semibold">
          <span className="text-black">Page</span><span className="text-green-600">Metrics</span>
        </span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link
          href="#home"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-md font-medium transition-colors hover:bg-green-100 hover:text-white-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="#features"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-md font-medium transition-colors hover:bg-green-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Features
        </Link>
        <Link
          href="#pricing"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-md font-medium transition-colors hover:bg-green-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Pricing
        </Link>
        <Link
          href="#howitworks"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-md font-medium transition-colors hover:bg-green-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          How it works
        </Link>
        <Link
          href="#faq"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-md font-medium transition-colors hover:bg-green-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          FAQs
        </Link>
      </nav>
      <nav className="ml-auto hidden lg:flex gap-6">
        {/* <Waitlist /> */}
        <Toaster />
      </nav>
    </header>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
