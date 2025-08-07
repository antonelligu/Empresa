import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Award } from "lucide-react";
import heroImage from "@/assets/hero-business.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Representação comercial profissional" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium">
                <Award className="h-4 w-4 mr-2" />
                Representação Comercial de Excelência
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Conectamos 
                <span className="text-primary"> Empresas</span> e 
                <span className="text-primary"> Oportunidades</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Somos especialistas em representação comercial, conectando fabricantes 
                com o mercado através de estratégias eficazes e relacionamentos sólidos.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Marcas Representadas</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Conheça Nossas Representadas
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Solicite uma Proposta
              </Button>
            </div>
          </div>

          {/* Features Cards */}
          <div className="space-y-6">
            <div className="bg-card/80 backdrop-blur p-6 rounded-xl shadow-soft border">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    Relacionamento Duradouro
                  </h3>
                  <p className="text-muted-foreground">
                    Construímos parcerias sólidas baseadas em confiança e resultados consistentes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card/80 backdrop-blur p-6 rounded-xl shadow-soft border">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    Crescimento Garantido
                  </h3>
                  <p className="text-muted-foreground">
                    Estratégias comprovadas para aumentar suas vendas e expandir seu mercado.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card/80 backdrop-blur p-6 rounded-xl shadow-soft border">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    Excelência em Serviços
                  </h3>
                  <p className="text-muted-foreground">
                    Atendimento personalizado e soluções sob medida para cada cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;