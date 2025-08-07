import { CheckCircle, Target, Shield, Handshake } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sobre Nossa Empresa
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Com mais de 15 anos de experiência no mercado, somos uma empresa de 
            representação comercial especializada em conectar fabricantes com 
            distribuidores e varejistas em todo o território nacional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Nossa Missão
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Facilitar e potencializar os negócios de nossos parceiros através 
                de representação comercial estratégica, construindo relacionamentos 
                duradouros e gerando resultados excepcionais.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Expertise Comprovada</h4>
                  <p className="text-muted-foreground text-sm">
                    Equipe especializada com profundo conhecimento do mercado brasileiro
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Rede Nacional</h4>
                  <p className="text-muted-foreground text-sm">
                    Cobertura em todas as regiões do país com parceiros estratégicos
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Resultados Mensuráveis</h4>
                  <p className="text-muted-foreground text-sm">
                    Acompanhamento detalhado e relatórios de performance regulares
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-soft border text-center">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">Foco em Resultados</h4>
              <p className="text-sm text-muted-foreground">
                Orientados por metas e comprometidos com o sucesso dos nossos parceiros
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft border text-center">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">Transparência</h4>
              <p className="text-sm text-muted-foreground">
                Comunicação clara e relatórios detalhados em todas as etapas
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft border text-center">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Handshake className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">Parceria</h4>
              <p className="text-sm text-muted-foreground">
                Relacionamentos baseados em confiança mútua e crescimento conjunto
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft border text-center">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">Qualidade</h4>
              <p className="text-sm text-muted-foreground">
                Excelência em todos os processos e atendimento personalizado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;