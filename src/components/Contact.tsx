import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
  Video,
  Calendar,
  Star
} from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      details: ["Sarmiento 333 (7000)", "Tandil, Buenos Aires", "Argentina"],
    },
    {
      icon: Phone,
      title: "Teléfonos",
      details: ["Teléfono: 0249 4420202", "Móvil: 0249 15 4020204"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["consultas@drmonsalve.com"],
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["Consultanos por WhatsApp Web", "Respuesta inmediata"],
    },
  ];

  const testimonials = [
    {
      name: "María González",
      text: "Excelente profesional. Mi rinoplastia quedó perfecta y natural. El Dr. Monsalve es muy detallista.",
      rating: 5,
      location: "Buenos Aires"
    },
    {
      name: "Carlos Rodríguez", 
      text: "Después de una mala experiencia previa, el Dr. Monsalve me hizo una rinoplastia secundaria excepcional.",
      rating: 5,
      location: "Tandil"
    },
    {
      name: "Ana Martínez",
      text: "La rinomodelación me cambió la vida. Procedimiento rápido y resultados increíbles.",
      rating: 5,
      location: "La Plata"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-6">
            Contacto
          </h2>
          <p className="text-lg text-muted-foreground">
            Ponete en contacto para agendar una consulta o hacer cualquier pregunta. 
            Estamos aquí para ayudarte con todas tus necesidades de cirugía nasal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium text-foreground">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border border-border bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Video className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-foreground">Consulta Virtual Disponible</h3>
                    <p className="text-sm text-muted-foreground">
                      ¿No tenés tiempo o vivís lejos? Ofrecemos consultas virtuales especializadas 
                      para evaluar tu caso desde la comodidad de tu hogar.
                    </p>
                    <Button size="sm" className="mt-2">
                      Agendar Consulta Virtual
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Formulario de Consulta</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Nombre</label>
                  <Input placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Apellido</label>
                  <Input placeholder="Tu apellido" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="tu.email@ejemplo.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Teléfono</label>
                <Input type="tel" placeholder="Ej: 0249 15 4020204" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Tipo de consulta</label>
                <select className="w-full p-3 border border-border rounded-lg bg-input-background">
                  <option>Rinoplastia Primaria</option>
                  <option>Rinoplastia Secundaria</option>
                  <option>Rinomodelación</option>
                  <option>Consulta Virtual</option>
                  <option>Otro</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Mensaje</label>
                <Textarea 
                  placeholder="Contanos sobre tu caso o consulta..."
                  className="min-h-[120px]"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1">
                  Enviar Consulta
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground text-center">
                Te responderemos dentro de las 24 horas hábiles.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-medium text-foreground mb-4">
              Testimonios de Pacientes
            </h3>
            <p className="text-muted-foreground">
              Lo que dicen nuestros pacientes sobre su experiencia
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="text-primary hover:underline">
              Ver más testimonios de rinoplastias
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}