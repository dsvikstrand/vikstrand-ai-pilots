import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ServiceModal } from "@/components/ServiceModal";
import { HowItWorks } from "@/components/HowItWorks";
import { ValueProps } from "@/components/ValueProps";
import { Security } from "@/components/Security";
import { OpenSourceFoundation } from "@/components/OpenSourceFoundation";
import { ROICalculator } from "@/components/ROICalculator";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { LeadFormModal } from "@/components/LeadFormModal";
import { type Service } from "@/data/services";

const Index = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
  };

  const handleBookCall = () => {
    // Placeholder for booking link - replace with actual Calendly or similar
    window.open("https://calendly.com", "_blank");
  };

  const handleRequestPilot = () => {
    setIsLeadFormOpen(true);
  };

  return (
    <>
      {/* SEO Meta - handled via index.html or Helmet in production */}
      <title>Vikstrand Deep Solutions | AI Solutions for Swedish SMEs</title>
      
      <Header onBookCall={handleBookCall} />
      
      <main className="pt-16 pb-24 md:pb-0">
        <Hero onBookCall={handleBookCall} onRequestPilot={handleRequestPilot} />
        <ServicesGrid onServiceClick={handleServiceClick} />
        <HowItWorks />
        <ValueProps />
        <Security />
        <OpenSourceFoundation />
        <ROICalculator />
        <Pricing onContact={handleRequestPilot} />
        <FAQ />
      </main>

      <Footer onBookCall={handleBookCall} onRequestPilot={handleRequestPilot} />
      <MobileCTA onBookCall={handleBookCall} onRequestPilot={handleRequestPilot} />

      {/* Modals */}
      <ServiceModal
        service={selectedService}
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
        onRequestPilot={handleRequestPilot}
      />
      <LeadFormModal
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
      />
    </>
  );
};

export default Index;