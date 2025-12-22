import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { ProductsHero } from "@/components/ProductsHero";
import { ProductsGrid } from "@/components/ProductsGrid";
import { ProductsComparison } from "@/components/ProductsComparison";
import { ProductsHowItWorks } from "@/components/ProductsHowItWorks";
import { ProductsValueProps } from "@/components/ProductsValueProps";
import { ProductsTestimonials } from "@/components/ProductsTestimonials";
import { ProductsFAQ } from "@/components/ProductsFAQ";
import { ProductModal } from "@/components/ProductModal";
import { LeadFormModal } from "@/components/LeadFormModal";
import { type Product } from "@/data/products";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleBookCall = () => {
    window.open("https://calendly.com", "_blank");
  };

  const handleRequestPilot = () => {
    setIsLeadFormOpen(true);
  };

  const scrollToProducts = () => {
    document.getElementById("products-grid")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <title>Products | Vikstrand Deep Solutions</title>
      
      <Header onBookCall={handleBookCall} />
      
      <main className="pt-16 pb-24 md:pb-0">
        <ProductsHero onBrowseProducts={scrollToProducts} />
        <div id="products-grid">
          <ProductsGrid onProductClick={handleProductClick} />
        </div>
        <ProductsComparison onProductClick={handleProductClick} />
        <ProductsHowItWorks />
        <ProductsValueProps />
        <ProductsTestimonials />
        <ProductsFAQ />
      </main>

      <Footer onBookCall={handleBookCall} onRequestPilot={handleRequestPilot} />
      <MobileCTA onBookCall={handleBookCall} onRequestPilot={handleRequestPilot} />

      {/* Modals */}
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
      />
      <LeadFormModal
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
      />
    </>
  );
};

export default Products;
