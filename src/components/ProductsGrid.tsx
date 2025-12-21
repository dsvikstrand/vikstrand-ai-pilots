import { products, type Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/i18n/LanguageContext";

interface ProductsGridProps {
  onProductClick: (product: Product) => void;
}

export function ProductsGrid({ onProductClick }: ProductsGridProps) {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">{t.products.badge}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.products.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.products.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard 
              key={product.slug}
              product={product}
              onProductClick={onProductClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
