import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";

export function OpenSourceFoundation() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Github className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {t.openSource.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {t.openSource.subtitle}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p dangerouslySetInnerHTML={{ __html: t.openSource.paragraph1 }} />
                <p>{t.openSource.paragraph2}</p>
              </div>

              <a 
                href="https://github.com/Arindam200/awesome-ai-apps" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-primary hover:underline font-medium"
              >
                {t.openSource.linkText}
                <ExternalLink className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}