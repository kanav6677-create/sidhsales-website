import Navbar           from "@/components/Navbar";
import Hero             from "@/components/Hero";
import TrustBar         from "@/components/TrustBar";
import About            from "@/components/About";
import Products         from "@/components/Products";
import Brands           from "@/components/Brands";
import Industries       from "@/components/Industries";
import WhyChooseUs      from "@/components/WhyChooseUs";
import Clients          from "@/components/Clients";
import Contact          from "@/components/Contact";
import MapSection       from "@/components/MapSection";
import Footer           from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Products />
      <Brands />
      <Industries />
      <WhyChooseUs />
      <Clients />
      <Contact />
      <MapSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
