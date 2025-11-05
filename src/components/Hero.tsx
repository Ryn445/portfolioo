import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg">Olá, eu sou</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              Adriano Henrique
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-gradient">
               Automação &  IA
            </h2>
          </div>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tenho experiência em automação e desenvolvimento web e estou focado em me tornar
            especialista em IA aplicada a automações e segurança.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">Ver Projetos</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Entrar em Contato</a>
            </Button>
          </div>

          <div className="flex gap-4 justify-center items-center pt-4">
            <a
              href="mailto:enrriqueadriano4455@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/Ryn445"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/henrique-alvess"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <div className="pt-8">
            <a
              href="#about"
              className="inline-block text-muted-foreground hover:text-primary transition-colors animate-bounce"
            >
              <ArrowDown size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
