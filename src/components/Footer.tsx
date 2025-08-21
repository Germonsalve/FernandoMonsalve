import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const quickLinks = [
    { label: "Acerca del Dr. Fernando Monsalve", href: "#doctor" },
    { label: "Nuestro centro", href: "#servicios" },
    { label: "Consulta virtual", href: "#contacto" },
    { label: "Qué es la Rinoplastia", href: "#servicios" },
  ];

  const services = [
    { label: "Rinoplastia Primaria", href: "#servicios" },
    { label: "Rinoplastia Secundaria", href: "#servicios" },
    { label: "Rinomodelación", href: "#servicios" },
    { label: "Consulta Virtual", href: "#contacto" },
  ];

  const resources = [
    { label: "Galería de rinoplastias", href: "#galeria" },
    { label: "Testimonios", href: "#contacto" },
    { label: "Blog sobre rinoplastia", href: "#doctor" },
    { label: "Cuánto cuesta una rinoplastia en Argentina?", href: "#contacto" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary font-medium">FM</span>
              </div>
              <div>
                <h3 className="font-medium">Dr. Fernando Monsalve</h3>
                <p className="text-sm opacity-80">Centro de Cirugía Nasal</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Especialistas exclusivamente en rinoplastia primaria, rinoplastia secundaria 
              y rinomodelación en Argentina.
            </p>
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-medium">Enlaces Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-medium">Servicios</h3>
            <nav className="flex flex-col space-y-2">
              {services.map((service, index) => (
                <a 
                  key={index}
                  href={service.href} 
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  {service.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-medium">Información de Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 opacity-80 mt-0.5" />
                <div className="text-sm opacity-80">
                  <div>Sarmiento 333 (7000)</div>
                  <div>Tandil, Buenos Aires</div>
                  <div>Argentina</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 opacity-80" />
                <div className="text-sm opacity-80">
                  <div>Tel: 0249 4420202</div>
                  <div>Móvil: 0249 15 4020204</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 opacity-80" />
                <span className="text-sm opacity-80">consultas@drmonsalve.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">
              © 2024 Dr. Fernando Monsalve - Centro de Cirugía Nasal. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Política de Privacidad
              </a>
              <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Términos de Servicio
              </a>
              <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Ética Médica
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}