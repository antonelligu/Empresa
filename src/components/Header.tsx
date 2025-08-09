import { Button } from "@/components/ui/button";
import { Menu, Phone, MessageCircle } from "lucide-react";
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
              className="h-10 md:h-12 w-auto"
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
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20SupplyTec"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir conversa no WhatsApp com a SupplyTec"
            >
              <Button variant="cta" size="sm">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </a>
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
                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20SupplyTec"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir conversa no WhatsApp com a SupplyTec"
                  className="mt-2 block"
                >
                  <Button variant="cta" className="w-full">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;