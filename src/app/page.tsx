import Collaboration from "@/components/Collaboration";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import GridLayout from "@/components/GridLayout";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Collaboration />
      <GridLayout />
      <WhyUs />
      <Testimonial />
      <ContactUs />
      <Footer />
    </>
  );
}
