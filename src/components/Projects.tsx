import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sistema Gerencial para Oficina Mecânica",
      description:
        "Protótipo de Sistema de Informação Gerencial desenvolvido como TCC, projetado para otimizar operações de oficina mecânica no entorno sul de Brasília.",
      features: [
        "Cadastro de clientes e veículos",
        "Histórico completo de serviços",
        "Controle de estoque integrado",
        "Gestão financeira e relatórios",
        "Geração automática de orçamentos e faturas",
        "Controle de acesso por tipo de usuário",
      ],
      technologies: ["Node.js", "React", "React Native", "PostgreSQL", "Swagger"],
      type: "TCC - Em Desenvolvimento",
    },
    {
      title: "Automação de Rotinas - TST",
      description:
        "Conjunto de scripts Python para automação de processos no Tribunal Superior do Trabalho, focados em eficiência operacional e tratamento de dados.",
      features: [
        "Automação de tarefas repetitivas",
        "Extração automática de dados",
        "Transformação e limpeza de dados",
        "Integração com sistemas internos",
        "Geração de relatórios automatizados",
      ],
      technologies: ["Python", "Pandas", "Selenium", "PyAutoGUI", "SQL"],
      type: "Profissional - Em Produção",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Projetos em Destaque
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-primary/50 transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30">
                        {project.type}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg">{project.description}</p>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Funcionalidades Principais:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1">▸</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Tecnologias Utilizadas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="bg-secondary/10 border-secondary/30 text-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-border text-center">
            <Code2 className="mx-auto mb-4 text-primary" size={48} />
            <h3 className="text-xl font-semibold mb-2">Mais Projetos em Desenvolvimento</h3>
            <p className="text-muted-foreground mb-4">
              Estou constantemente trabalhando em novos projetos e explorando tecnologias
              emergentes em IA e automação.
            </p>
            <Button variant="outline" asChild>
              <a href="#contact">Entre em Contato para Saber Mais</a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
