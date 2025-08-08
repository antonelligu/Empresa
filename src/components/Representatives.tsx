import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, TrendingUp, Package } from "lucide-react";

const Representatives = () => {
  const representatives = [
    {
      name: "Cofer Aço e Ferro",
      category: "Metalurgia",
      description: "Líder em soluções em aço e ferro para construção civil e indústria, oferecendo produtos de alta qualidade e resistência.",
      highlights: ["Alta Resistência", "Certificação ISO", "Entrega Rápida"],
      rating: 4.8,
      growth: "+20%"
    },
    {
      name: "Industrial Máquinas",
      category: "Equipamentos",
      description: "Fabricante de equipamentos industriais de alta qualidade com mais de 20 anos de mercado.",
      highlights: ["Qualidade Premium", "Garantia Estendida", "Manutenção"],
      rating: 4.8,
      growth: "+18%"
    },
    {
      name: "Verde & Sustentável",
      category: "Sustentabilidade",
      description: "Produtos ecológicos e sustentáveis para empresas comprometidas com o meio ambiente.",
      highlights: ["Eco-friendly", "Certificação Verde", "Economia"],
      rating: 4.7,
      growth: "+30%"
    },
    {
      name: "Alimentícia Premium",
      category: "Alimentos",
      description: "Distribuidor de produtos alimentícios premium para redes de supermercados e restaurantes.",
      highlights: ["Qualidade Superior", "Logística Rápida", "Variedade"],
      rating: 4.9,
      growth: "+22%"
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