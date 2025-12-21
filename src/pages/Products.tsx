import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { ProductsGrid } from "@/components/ProductsGrid";
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

  return (
    <>
      <title>Products | Vikstrand Deep Solutions</title>
      
      <Header onBookCall={handleBookCall} />
      
      <main className="pt-16 pb-24 md:pb-0">
        <ProductsGrid onProductClick={handleProductClick} />
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
