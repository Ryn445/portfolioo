import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-gradient mb-2">Adriano Henrique</p>
              <p className="text-muted-foreground">
                Desenvolvimento | IA | Segurança
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="mailto:enrriqueadriano4455@gmail.com"
                className="p-3 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>
              © {currentYear} Adriano Henrique de S. Alves. Todos os direitos reservados.
            </p>
            <p className="text-sm mt-2">
              Desenvolvido com React, TypeScript e Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
