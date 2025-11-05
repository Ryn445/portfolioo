import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens",
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
      color: "primary",
    },
    {
      title: "Frameworks & Bibliotecas",
      skills: ["React", "React Native", "Node.js", "Pandas", "Selenium", "PyAutoGUI"],
      color: "secondary",
    },
    {
      title: "Ferramentas & Tecnologias",
      skills: ["Git", "VS Code", "Power BI", "Trello", "Jira", "Visual Community"],
      color: "primary",
    },
    {
      title: "Metodologias",
      skills: ["Lean Startup", "Automação", "MVP Development", "Agile"],
      color: "secondary",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Habilidades Técnicas
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-gradient">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm py-1 px-3 bg-primary/10 text-foreground border border-primary/30 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-border">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Áreas de Interesse</h3>
              <p className="text-muted-foreground">
                Inteligência Artificial • Automação de Processos • Cibersegurança •
                Desenvolvimento Full Stack • Cloud Computing • Python
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
