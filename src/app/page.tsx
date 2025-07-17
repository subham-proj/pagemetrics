import Cover from "@/components/Cover";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Cover />
      <Features />
      <HowItWorks />
      {/* <Pricing /> */}
      <FAQ />
      <Footer />
    </>
  );
}
