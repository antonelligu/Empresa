import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Instagram, 
  Facebook,
  Send
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">RC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">RepCom</h3>
                <p className="text-xs text-background/70">Representação Comercial</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              Conectamos empresas e oportunidades através de representação 
              comercial estratégica e relacionamentos duradouros.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-primary hover:bg-background/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-primary hover:bg-background/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-primary hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-background/80 hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-background/80 hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#representadas" className="text-background/80 hover:text-primary transition-colors">
                  Representadas
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-background/80 hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-background/80 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-background">+55 (11) 9999-9999</p>
                  <p className="text-xs text-background/70">WhatsApp disponível</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-background">contato@repcom.com.br</p>
                  <p className="text-xs text-background/70">Resposta em até 2h</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-background">São Paulo - SP</p>
                  <p className="text-xs text-background/70">Atendimento nacional</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <p className="text-background/80 text-sm">
              Receba atualizações sobre novas representadas e oportunidades de negócio.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Seu e-mail" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                <Send className="h-4 w-4 mr-2" />
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/70 text-sm">
              © 2024 RepCom Representação Comercial. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;