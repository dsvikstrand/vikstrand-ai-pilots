import { products } from "@/data/products";
import { productTranslations } from "@/i18n/translations";
import { useLanguage } from "@/i18n/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ProductsComparisonProps {
  onProductClick: (product: typeof products[0]) => void;
}

export function ProductsComparison({ onProductClick }: ProductsComparisonProps) {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Compare all products",
      subtitle: "Find the perfect solution for your needs.",
      columns: {
        product: "Product",
        price: "Price",
        category: "Type",
        freeTrial: "Free Trial",
        bestFor: "Best For",
        action: "",
      },
      bestForMap: {
        "invoice-receipt-ocr": "Accounting teams",
        "meeting-transcriber": "Sales & executives",
        "cv-screener": "HR & recruiting",
        "email-classifier": "Customer support",
        "churn-predictor": "Customer success",
        "fortnox-chat": "Finance teams",
      },
      viewDetails: "View Details",
    },
    sv: {
      title: "Jämför alla produkter",
      subtitle: "Hitta den perfekta lösningen för dina behov.",
      columns: {
        product: "Produkt",
        price: "Pris",
        category: "Typ",
        freeTrial: "Gratis test",
        bestFor: "Bäst för",
        action: "",
      },
      bestForMap: {
        "invoice-receipt-ocr": "Bokföringsteam",
        "meeting-transcriber": "Sälj & chefer",
        "cv-screener": "HR & rekrytering",
        "email-classifier": "Kundsupport",
        "churn-predictor": "Kundframgång",
        "fortnox-chat": "Ekonomiteam",
      },
      viewDetails: "Visa detaljer",
    },
  };

  const t = content[language];
  const pt = productTranslations[language];

  return (
    <section id="products-comparison" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border/50">
                <TableHead className="font-semibold">{t.columns.product}</TableHead>
                <TableHead className="font-semibold">{t.columns.price}</TableHead>
                <TableHead className="font-semibold hidden sm:table-cell">{t.columns.category}</TableHead>
                <TableHead className="font-semibold text-center">{t.columns.freeTrial}</TableHead>
                <TableHead className="font-semibold hidden md:table-cell">{t.columns.bestFor}</TableHead>
                <TableHead className="font-semibold">{t.columns.action}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => {
                const productT = pt[product.slug as keyof typeof pt];
                return (
                  <TableRow 
                    key={product.slug} 
                    className="border-border/50 hover:bg-muted/50 cursor-pointer"
                    onClick={() => onProductClick(product)}
                  >
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <product.icon className="h-4 w-4" />
                        </div>
                        <span className="text-foreground">{productT?.title || product.title}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="font-semibold text-foreground">{product.pricing.price}</span>
                      {product.pricing.period && (
                        <span className="text-muted-foreground text-sm">{product.pricing.period}</span>
                      )}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge variant={product.category === "creative" ? "default" : "secondary"}>
                        {product.category === "creative" ? "AI-Powered" : "Traditional"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      {product.tryFreeAvailable ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">
                      {t.bestForMap[product.slug as keyof typeof t.bestForMap]}
                    </TableCell>
                    <TableCell>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          onProductClick(product);
                        }}
                      >
                        {t.viewDetails}
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
