import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";
import supplytecLogo from "@/assets/supplytec-logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={supplytecLogo}
              alt="Logotipo da SupplyTec"
              className="h-8 w-auto"
              loading="lazy"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">SupplyTec</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#representadas" className="text-foreground hover:text-primary transition-colors">
              Representadas
            </a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>(11) 9999-9999</span>
              </div>
            </div>
            <Button variant="cta" size="sm">
              Solicitar Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
                Início
              </a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#representadas" className="text-foreground hover:text-primary transition-colors">
                Representadas
              </a>
              <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
                Serviços
              </a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors">
                Contato
              </a>
              <div className="pt-4 border-t">
                <Button variant="cta" className="w-full">
                  Solicitar Contato
                </Button>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;