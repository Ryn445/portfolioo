import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Clock } from "lucide-react";

const Certifications = () => {
  const completed = [
    {
      title: "Headhet - Comunicação e Habilidades",
      status: "Concluído",
      icon: Award,
    },
    {
      title: "Power BI",
      status: "Concluído",
      icon: Award,
    },
    {
      title: "Engenharia de Prompt",
      status: "Concluído",
      icon: Award,
    },
  ];

  const inProgress = [
    {
      title: "Amazon Junior Software Developer",
      platform: "Coursera",
      url: "https://www.coursera.org/professional-certificates/amazon-junior-software-developer",
      status: "Em Andamento",
    },
    {
      title: "Google Cybersecurity Professional Certificate",
      platform: "Coursera",
      url: "https://www.coursera.org/professional-certificates/google-cybersecurity",
      status: "Em Andamento",
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      platform: "Coursera",
      url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
      status: "Em Andamento",
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Certificações
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Completed Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="text-secondary" size={28} />
                <h3 className="text-2xl font-semibold">Certificações Concluídas</h3>
              </div>
              <div className="space-y-4">
                {completed.map((cert, index) => (
                  <Card
                    key={index}
                    className="p-4 bg-card border-border hover:border-secondary/50 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-secondary/10 rounded-lg">
                        <cert.icon className="text-secondary" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{cert.title}</h4>
                        <Badge
                          variant="secondary"
                          className="bg-secondary/10 text-secondary border-secondary/30"
                        >
                          {cert.status}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* In Progress Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="text-primary" size={28} />
                <h3 className="text-2xl font-semibold">Em Andamento</h3>
              </div>
              <div className="space-y-4">
                {inProgress.map((cert, index) => (
                  <Card
                    key={index}
                    className="p-4 bg-card border-border hover:border-primary/50 transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Clock className="text-primary" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{cert.title}</h4>
                        <div className="flex flex-wrap gap-2 items-center">
                          <Badge
                            variant="outline"
                            className="bg-primary/10 text-primary border-primary/30"
                          >
                            {cert.status}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {cert.platform}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <Card className="mt-8 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-border text-center">
            <h3 className="text-2xl font-semibold mb-3">Compromisso com o Aprendizado</h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Acredito no aprendizado contínuo como chave para o crescimento profissional.
              Estou constantemente buscando novas certificações e conhecimentos em áreas
              estratégicas como desenvolvimento de software, cibersegurança e inteligência
              artificial.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
