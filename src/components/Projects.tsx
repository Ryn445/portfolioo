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
    {
      title: "Controle Financeiro",
      description:
        "Sistema web para gerenciamento financeiro pessoal  histórico de transações e relatórios automáticos.",
      features: [
        "Dashboard",
        "Transações",
        "Carteiras",
        "Categorias",
        "Metas",
        "Relatórios",
        "Contas",
        "Dívidas",
      ],
      technologies: ["React", "Vite", "TypeScript", "TailwindCSS", "Lucide React"],
      type: "Pessoal - Em Demonstração",
      liveLink: "https://financeiro-sooty.vercel.app/",
      codeLink: "https://github.com/Ryn445/Financeiro",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Projetos em Destaque
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary mx-auto mb-10"></div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-4 md:p-6 bg-card border-border hover:border-primary/50 transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-1">{project.title}</h3>
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/30 text-sm"
                      >
                        {project.type}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-muted-foreground">{project.description}</p>

                  <div>
                    <h4 className="font-semibold mb-1 text-sm">Funcionalidades Principais:</h4>
                    <ul className="grid md:grid-cols-2 gap-1 text-sm">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1">▸</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-1 text-sm">Tecnologias Utilizadas:</h4>
                    <div className="flex flex-wrap gap-1 text-xs">
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

                  {/* Botões para ver projeto e código */}
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {project.liveLink && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <ExternalLink size={14} /> Ver Projeto
                        </a>
                      </Button>
                    )}
                    {project.codeLink && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <Code2 size={14} /> Ver Código
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-6 p-4 md:p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-border text-center">
            <Code2 className="mx-auto mb-3 text-primary" size={40} />
            <h3 className="text-lg md:text-xl font-semibold mb-1">Mais Projetos em Desenvolvimento</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-3">
              Estou constantemente trabalhando em novos projetos e explorando tecnologias
              emergentes em IA e automação.
            </p>
            <Button variant="outline" size="sm" asChild>
              <a href="#contact">Entre em Contato para Saber Mais</a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
