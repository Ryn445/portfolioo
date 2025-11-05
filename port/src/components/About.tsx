import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, MapPin, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Sobre Mim
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Experiência Atual</h3>
                  <p className="text-muted-foreground">
                    Estagiário no Tribunal Superior do Trabalho (TST), desenvolvendo
                    soluções de automação com Python (Pandas, PyAutoGUI, Selenium) e
                    SQL para otimizar processos internos
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <GraduationCap className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Formação</h3>
                  <p className="text-muted-foreground">
                    Estudante de Engenharia de Software, desenvolvendo TCC focado em
                    Sistema de Informação Gerencial para oficina mecânica usando
                    Node.js, React, React Native e PostgreSQL
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Localização</h3>
                  <p className="text-muted-foreground">
                    Brasília, Distrito Federal - Disponível para trabalho remoto e
                    presencial na região
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Target className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Objetivo</h3>
                  <p className="text-muted-foreground">
                    Tornar-me especialista em Inteligência Artificial aplicada a
                    automações, integrando sistemas e otimizando processos para
                    empresas
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-border">
            <p className="text-lg text-center leading-relaxed">
              Com facilidade para aprender e paixão por tecnologia, estou constantemente
              me atualizando através de certificações profissionais em desenvolvimento de
              software, cibersegurança e front-end. Meu foco é criar soluções
              automatizadas que tornem processos mais eficientes e seguros.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
