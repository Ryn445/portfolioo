import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, FileText, MessageCircle } from "lucide-react";

const Contact = () => {
  // Dados principais
  const whatsappNumber = "556181455863";
  const whatsappMessage = encodeURIComponent("Olá, vi seu portfólio e gostaria de conversar!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const gmailSubject = encodeURIComponent("Contato via portfólio");
  const gmailBody = encodeURIComponent("Olá Adriano! Gostaria de conversar sobre um projeto.");
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=enrriqueadriano4455@gmail.com&su=${gmailSubject}&body=${gmailBody}`;

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Título principal */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Entre em Contato
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

          {/* Cartão principal */}
          <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-border shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-3">Vamos Conversar?</h3>
              <p className="text-muted-foreground text-lg">
                Estou sempre aberto a novas oportunidades, colaborações e discussões sobre tecnologia.
                Entre em contato comigo!
              </p>
            </div>

            {/* Informações */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Email */}
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:scale-[1.02] duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Email</h4>
                    <a
                      href="mailto:enrriqueadriano4455@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      enrriqueadriano4455@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              {/* Localização */}
              <Card className="p-6 bg-card border-border hover:border-secondary/50 transition-all hover:scale-[1.02] duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <MapPin className="text-secondary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Localização</h4>
                    <p className="text-muted-foreground">Brasília, Distrito Federal</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Disponível para remoto e presencial
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Botões de contato */}
            <div className="text-center space-y-4">
              <div className="flex flex-col md:flex-row justify-center gap-4">
                {/* Botão padrão (app de email) */}
                <Button variant="hero" size="lg" asChild className="w-full md:w-auto">
                  <a href="mailto:enrriqueadriano4455@gmail.com">
                    <Mail className="mr-2" size={20} />
                    Email (App)
                  </a>
                </Button>

                {/* Botão Gmail Web */}
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full md:w-auto border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                >
                  <a href={gmailUrl} target="_blank" rel="noopener noreferrer">
                    <Mail className="mr-2" size={20} />
                    Gmail Web
                  </a>
                </Button>

                {/* Botão WhatsApp */}
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full md:w-auto border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2" size={20} />
                    WhatsApp
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Adoro um desafio — vamos encontrar uma solução para seus problemas.
              </p>
            </div>
          </Card>

          {/* Card final */}
          <Card className="mt-6 p-6 bg-card border-border text-center shadow-md hover:shadow-lg transition-all duration-300">
            <FileText className="mx-auto mb-3 text-primary" size={32} />
            <h4 className="font-semibold text-lg mb-2">Outros Projetos</h4>
            <p className="text-muted-foreground mb-4">
              Quer conhecer mais sobre minha experiência e qualificações?
            </p>
            <Button variant="outline" asChild>
              <a
                href="mailto:enrriqueadriano4455@gmail.com?subject=Solicitação de Currículo"
                className="hover:text-primary transition-colors"
              >
                Entrar em Contato
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
