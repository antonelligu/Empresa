import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Package,
  ClipboardList,
  Headphones,
  FileText,
  Truck,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "Atendimento via WhatsApp",
      description: "Canal direto e ágil para tirar dúvidas, receber pedidos e agilizar negociações.",
      features: ["Resposta rápida", "Mensagens pré-configuradas", "Envio de catálogos", "Atendimento humanizado"]
    },
    {
      icon: Package,
      title: "Catálogo de Produtos",
      description: "Apresentação organizada das linhas das representadas para facilitar a escolha do cliente.",
      features: ["Especificações técnicas", "Fotos e fichas", "Linhas por segmento", "Atualização constante"]
    },
    {
      icon: FileText,
      title: "Propostas e Orçamentos",
      description: "Geração de cotações claras e detalhadas para acelerar a tomada de decisão.",
      features: ["Templates padronizados", "Condições comerciais", "Envio por e-mail/WhatsApp", "Revisões rápidas"]
    },
    {
      icon: ClipboardList,
      title: "CRM e Follow‑up",
      description: "Acompanhamento de oportunidades e relacionamento contínuo para aumentar conversão.",
      features: ["Pipeline de vendas", "Tarefas e lembretes", "Histórico de contatos", "Métricas de conversão"]
    },
    {
      icon: Headphones,
      title: "Suporte Técnico das Representadas",
      description: "Acesso aos times técnicos para especificações, ensaios e apoio em obra.",
      features: ["Especificação correta", "Laudos e fichas técnicas", "Treinamentos", "Acompanhamento in loco"]
    },
    {
      icon: Truck,
      title: "Logística e Entrega",
      description: "Coordenação com as representadas para garantir prazos e entregas sem complicação.",
      features: ["Agendamento de entrega", "Rastreamento", "Documentação completa", "Pós-venda ativo"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ferramentas que Utilizamos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Estas são as ferramentas e processos que usamos no dia a dia para dar velocidade,
            transparência e resultado às vendas das nossas representadas.
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