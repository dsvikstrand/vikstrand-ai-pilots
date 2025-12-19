import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function OpenSourceFoundation() {
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
                    Built on open-source excellence
                  </h2>
                  <p className="text-muted-foreground">
                    Standing on the shoulders of giants
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our solutions are built as <strong className="text-foreground">practical wrappers and tailored implementations</strong> of proven patterns from the open-source ecosystem. We often start from reference implementations curated in <strong className="text-foreground">awesome-ai-apps</strong> and adapt them to your data, tools, security requirements, and evaluation needs.
                </p>
                <p>
                  This approach means you get battle-tested architectures with custom integrations, proper permissions, comprehensive evaluation, production monitoring, and polished UX—all delivered in weeks, not months.
                </p>
              </div>

              <a 
                href="https://github.com/Arindam200/awesome-ai-apps" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-primary hover:underline font-medium"
              >
                Explore awesome-ai-apps on GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}