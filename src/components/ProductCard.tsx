import { type Product } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

export function ProductCard({ product, onProductClick }: ProductCardProps) {
  const { pt } = useLanguage();
  const productT = pt[product.slug as keyof typeof pt];

  return (
    <Card 
      className="group cursor-pointer bg-card border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden"
      onClick={() => onProductClick(product)}
    >
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            <product.icon className="h-6 w-6" />
          </div>
          <Badge variant={product.category === "creative" ? "default" : "secondary"} className="text-xs">
            {product.category === "creative" ? "AI-Powered" : "Traditional"}
          </Badge>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {productT?.title || product.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {productT?.tagline || product.tagline}
        </p>

        <div className="mt-auto">
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-2xl font-bold text-foreground">{product.pricing.price}</span>
            {product.pricing.period && (
              <span className="text-muted-foreground text-sm">{product.pricing.period}</span>
            )}
          </div>

          <div className="flex gap-2">
            <Button 
              className="flex-1 rounded-xl"
              onClick={(e) => {
                e.stopPropagation();
                onProductClick(product);
              }}
            >
              {productT?.ctaLabel || "Learn More"}
            </Button>
            {product.tryFreeAvailable && (
              <Button 
                variant="outline" 
                className="rounded-xl"
                onClick={(e) => {
                  e.stopPropagation();
                  onProductClick(product);
                }}
              >
                Try Free
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
