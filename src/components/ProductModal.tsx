import { type Product } from "@/data/products";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { t, pt } = useLanguage();
  
  if (!product) return null;

  const productT = pt[product.slug as keyof typeof pt];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <product.icon className="h-6 w-6" />
            </div>
            <Badge variant={product.category === "creative" ? "default" : "secondary"}>
              {product.category === "creative" ? "AI-Powered" : "Traditional"}
            </Badge>
          </div>
          <DialogTitle className="text-2xl font-bold">{productT?.title || product.title}</DialogTitle>
          <DialogDescription className="text-base">
            {productT?.tagline || product.tagline}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Pricing */}
          <div className="p-4 border border-primary/20 bg-primary/5 rounded-xl text-center">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-3xl font-bold text-foreground">{product.pricing.price}</span>
              {product.pricing.period && (
                <span className="text-muted-foreground">{product.pricing.period}</span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {product.pricing.type === "subscription" ? t.products.subscriptionNote : t.products.oneTimeNote}
            </p>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">{t.products.features}</h4>
            <ul className="space-y-2">
              {(productT?.features || product.features).map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <Button 
              className="w-full h-12 text-base font-semibold rounded-xl"
              onClick={onClose}
            >
              {t.products.buyNow}
            </Button>
            {product.tryFreeAvailable && (
              <Button 
                variant="outline"
                className="w-full h-12 text-base font-semibold rounded-xl"
                onClick={onClose}
              >
                {t.products.tryFree}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
