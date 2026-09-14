import Header from "../../components/layout/Header";
import Hero from "../../components/landing/Hero";
import Features from "../../components/landing/Features";
import HowItWorks from "../../components/landing/HowItWorks";
import Rules from "../../components/landing/Rules";
import CTA from "../../components/landing/CTA";
import Footer from "../../components/layout/Footer";

function Landing() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Rules />
      <CTA />
      <Footer />
    </>
  );
}

export default Landing;