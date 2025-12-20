import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function ROICalculator() {
  const { t } = useLanguage();
  const [hoursSaved, setHoursSaved] = useState([10]);
  const [hourlyCost, setHourlyCost] = useState([500]);

  const weeklyValue = hoursSaved[0] * hourlyCost[0];
  const monthlyValue = weeklyValue * 4.33;
  const yearlyValue = weeklyValue * 52;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('sv-SE', {
      style: 'currency',
      currency: 'SEK',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
              <Calculator className="h-7 w-7" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.roi.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.roi.subtitle}
            </p>
          </div>

          <Card className="rounded-2xl border-border/50 shadow-soft">
            <CardHeader>
              <CardTitle className="text-xl">{t.roi.cardTitle}</CardTitle>
              <CardDescription>
                {t.roi.cardSubtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-base">{t.roi.hoursSavedLabel}</Label>
                  <span className="text-2xl font-bold text-primary">{hoursSaved[0]}h</span>
                </div>
                <Slider
                  value={hoursSaved}
                  onValueChange={setHoursSaved}
                  min={1}
                  max={40}
                  step={1}
                  className="py-2"
                />
                <p className="text-sm text-muted-foreground">
                  {t.roi.hoursSavedHint}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-base">{t.roi.hourlyCostLabel}</Label>
                  <span className="text-2xl font-bold text-primary">{hourlyCost[0]} kr</span>
                </div>
                <Slider
                  value={hourlyCost}
                  onValueChange={setHourlyCost}
                  min={200}
                  max={2000}
                  step={50}
                  className="py-2"
                />
                <p className="text-sm text-muted-foreground">
                  {t.roi.hourlyCostHint}
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">{t.roi.estimatedSavings}</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">{t.roi.weekly}</p>
                    <p className="text-xl font-bold text-foreground">{formatCurrency(weeklyValue)}</p>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-xl border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">{t.roi.monthly}</p>
                    <p className="text-2xl font-bold text-primary">{formatCurrency(monthlyValue)}</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">{t.roi.yearly}</p>
                    <p className="text-xl font-bold text-foreground">{formatCurrency(yearlyValue)}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}