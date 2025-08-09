import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, TrendingUp, Package } from "lucide-react";

const Representatives = () => {
  const representatives = [
    {
      name: "Cofer Aço e Ferro",
      category: "Metalurgia",
      description: "Tradição e alta tecnologia em aço: a Cofer é referência no Brasil há mais de 35 anos no fornecimento de aço cortado e dobrado para a construção civil, com presença marcante em Guararema/SP. Soluções precisas para sua obra: oferecemos corte e dobra sob medida, reduzindo desperdícios, otimizando prazos e garantindo resultados seguros e eficientes. Excelência em toda a entrega: com equipe especializada e logística de ponta, atendemos todo o Estado de São Paulo com agilidade, inovação e qualidade.",
      highlights: ["Alta Resistência", "Certificação ISO", "Entrega Rápida"],
      rating: 4.8,
      growth: "+20%"
    },
    {
      name: "Tech4Con",
      category: "Tecnologia",
      description: "Inovação que transforma concreto em desempenho: a Tech4Con oferece soluções tecnológicas como macro e microfibras sintéticas e aditivos especiais para reforço estrutural, elevando resistência e durabilidade da sua obra. Menos problema, mais resultado: com suporte técnico dedicado e compromisso real com performance, da obra ao acabamento, você ganha em tempo, recursos e tranquilidade. Tecnologia e sustentabilidade caminhando juntas: além da alta performance, a Tech4Con está alinhada aos Objetivos de Desenvolvimento Sustentável, garantindo soluções mais conscientes para a construção civil.",
      highlights: ["Automação", "Controle Digital", "Eficiência"],
      rating: 4.9,
      growth: "+32%"
    },
    {
      name: "IsoRecort",
      category: "Isopor",
      description: "Há mais de 18 anos, o Grupo Isorecort é referência nacional na transformação de EPS (poliestireno expandido), oferecendo soluções inovadoras, leves e sustentáveis para diversos segmentos. Com tecnologia de ponta, certificação ISO 9001 e compromisso ambiental, desenvolvemos produtos de alta performance para construção civil, indústria, refrigeração, embalagens, agricultura e muito mais. Nossa missão é entregar qualidade, praticidade e eficiência, sempre com atendimento personalizado e logística ágil para todo o Brasil. Seja qual for o seu projeto, nós temos a solução ideal em EPS para transformar suas ideias em realidade.",
      highlights: ["Eficiência Térmica", "Acústica Avançada", "Durabilidade"],
      rating: 4.8,
      growth: "+25%"
    },
    {
      name: "Concrebase",
      category: "Concreto",
      description: "Fornecedor de concreto usinado e soluções em bases para construção civil e obras de infraestrutura.",
      highlights: ["Concreto Premium", "Agilidade na Entrega", "Controle de Qualidade"],
      rating: 4.9,
      growth: "+18%"
    }
  ];

  return (
    <section id="representadas" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nossas Representadas
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Trabalhamos com marcas líderes de mercado em diversos segmentos, 
            oferecendo produtos e serviços de excelência para nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {representatives.map((rep, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="secondary" className="mb-3">
                      {rep.category}
                    </Badge>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {rep.name}
                    </CardTitle>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{rep.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-primary">
                      <TrendingUp className="h-4 w-4" />
                      <span>{rep.growth}</span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {rep.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {rep.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group">
                    <Package className="h-4 w-4 mr-2" />
                    Ver Produtos
                    <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="lg">
            Conheça Todas as Representadas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Representatives;