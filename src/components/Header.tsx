import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

interface HeaderProps {
  onBookCall: () => void;
}

export function Header({ onBookCall }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const isProductsPage = location.pathname === "/products";

  // Handle hash scroll after navigation
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const handleNavClick = (href: string, isRoute: boolean) => {
    if (isRoute && href.startsWith("/#")) {
      // Navigate to home page and then scroll to section
      navigate("/" + href.substring(1));
    }
  };

  const navLinks = [
    { label: t.nav.products, href: "/products", isRoute: true },
    { label: t.nav.services, href: isProductsPage ? "/#services" : "#services", isRoute: isProductsPage },
    { label: t.nav.howItWorks, href: isProductsPage ? "/#how-it-works" : "#how-it-works", isRoute: isProductsPage },
    { label: t.nav.security, href: isProductsPage ? "/#security" : "#security", isRoute: isProductsPage },
    { label: t.nav.pricing, href: isProductsPage ? "/#pricing" : "#pricing", isRoute: isProductsPage },
    { label: t.nav.faq, href: isProductsPage ? "/#faq" : "#faq", isRoute: isProductsPage },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">V</span>
            </div>
            <span className="font-bold text-foreground hidden sm:inline">
              Vikstrand Deep Solutions
            </span>
            <span className="font-bold text-foreground sm:hidden">VDS</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => handleNavClick(link.href, link.isRoute)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* Desktop CTA + Language Toggle */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageToggle />
            <Button onClick={onBookCall} className="rounded-xl">
              {t.nav.bookCall}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              {navLinks.map(link => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => { handleNavClick(link.href, link.isRoute); setIsMenuOpen(false); }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              ))}
              <Button onClick={() => { onBookCall(); setIsMenuOpen(false); }} className="w-full rounded-xl mt-2">
                {t.nav.bookCall}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}