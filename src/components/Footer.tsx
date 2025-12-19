import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  onBookCall: () => void;
  onRequestPilot: () => void;
}

export function Footer({ onBookCall, onRequestPilot }: FooterProps) {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center">
                <span className="text-foreground font-bold text-sm">V</span>
              </div>
              <span className="font-bold text-lg">Vikstrand Deep Solutions</span>
            </div>
            <p className="text-background/60 mb-6 max-w-sm">
              Practical AI solutions for Swedish SMEs. We deliver production-ready pilots that prove value fast.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:hello@vikstrand.ai" className="text-background/60 hover:text-background transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-background/60 hover:text-background transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-background/60 hover:text-background transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-background/60 hover:text-background transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-background/60 hover:text-background transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="font-semibold mb-4">Get started</h4>
            <div className="space-y-3">
              <Button 
                variant="secondary" 
                className="w-full rounded-xl bg-background text-foreground hover:bg-background/90"
                onClick={onBookCall}
              >
                Book a call
              </Button>
              <Button 
                variant="outline" 
                className="w-full rounded-xl border-background/30 text-background hover:bg-background/10"
                onClick={onRequestPilot}
              >
                Request pilot
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>© {new Date().getFullYear()} Vikstrand Deep Solutions. All rights reserved.</p>
            <p>
              Built on proven open-source patterns (incl.{" "}
              <a 
                href="https://github.com/Arindam200/awesome-ai-apps" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-background"
              >
                awesome-ai-apps
              </a>
              ) — customized and productionized for your business.
            </p>
          </div>
          <p className="text-center text-background/40 text-xs mt-4">
            🇸🇪 Swedish version coming later.
          </p>
        </div>
      </div>
    </footer>
  );
}