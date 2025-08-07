import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  BarChart3, 
  MapPin, 
  Headphones, 
  FileText, 
  Target,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Gestão de Vendas",
      description: "Desenvolvimento e execução de estratégias de vendas personalizadas para cada representada.",
      features: ["Prospecção de clientes", "Negociação especializada", "Follow-up de vendas", "CRM dedicado"]
    },
    {
      icon: BarChart3,
      title: "Análise de Mercado",
      description: "Estudos detalhados do mercado para identificar oportunidades e otimizar resultados.",
      features: ["Pesquisa de mercado", "Análise da concorrência", "Relatórios de performance", "Insights estratégicos"]
    },
    {
      icon: MapPin,
      title: "Expansão Regional",
      description: "Apoio na expansão para novas regiões com nossa rede nacional de contatos.",
      features: ["Mapeamento de mercado", "Parcerias locais", "Distribuição estratégica", "Suporte regional"]
    },
    {
      icon: Headphones,
      title: "Suporte Especializado",
      description: "Atendimento dedicado para clientes e suporte técnico especializado.",
      features: ["Atendimento 24/7", "Suporte técnico", "Treinamento de equipes", "Consultoria especializada"]
    },
    {
      icon: FileText,
      title: "Gestão Comercial",
      description: "Administração completa dos processos comerciais e documentação.",
      features: ["Contratos e propostas", "Gestão de pedidos", "Controle de estoque", "Relatórios financeiros"]
    },
    {
      icon: Target,
      title: "Marketing Estratégico",
      description: "Desenvolvimento de campanhas de marketing focadas em resultados.",
      features: ["Campanhas digitais", "Material promocional", "Eventos e feiras", "Branding estratégico"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Oferecemos um conjunto completo de serviços para maximizar o potencial 
            de vendas das nossas representadas e garantir resultados excepcionais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-8 md:p-12 text-center border border-primary/10">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Pronto para Crescer com Nossa Parceria?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos impulsionar 
            seus resultados através de nossa expertise em representação comercial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" className="group">
              Solicitar Consultoria Gratuita
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Baixar Portfólio Completo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;