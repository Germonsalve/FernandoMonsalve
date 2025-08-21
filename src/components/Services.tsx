import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Stethoscope, 
  RefreshCw, 
  Syringe, 
  Video, 
  Image as ImageIcon,
  MessageCircle,
  ArrowRight 
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: "Rinoplastia Primaria",
      description: "La búsqueda de una nariz bella, armónica, natural, sin que se note que es operada y sin descuidar la salud respiratoria, es nuestro mayor objetivo.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
      features: [
        "Nariz naturalmente bella",
        "Acorde a tu rostro", 
        "Salud respiratoria preservada",
        "Resultado armónico"
      ],
    },
    {
      icon: RefreshCw,
      title: "Rinoplastia Secundaria",
      description: "El impacto emocional de una rinoplastia mal realizada puede ser devastador. Con una rinoplastia secundaria, esto puede ser eficazmente solucionado.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      features: [
        "Corrección de rinoplastias previas",
        "Rinoplastia reconstructiva",
        "Resultados naturales",
        "Recuperación de confianza"
      ],
    },
    {
      icon: Syringe,
      title: "Rinomodelación",
      description: "Técnica que consiste en retoques precisos en tu nariz, utilizando nuevas fórmulas de ácido hialurónico de óptima calidad.",
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop",
      features: [
        "Sin anestesia general",
        "Rinoplastia sin cirugía",
        "Simulaciones en computadora",
        "Procedimiento ambulatorio"
      ],
    },
  ];

  const specialConditions = [
    { title: "Nariz aguileña", icon: "🦅" },
    { title: "Perforación septal", icon: "⚕️" },
    { title: "Desviación de septum nasal", icon: "🔄" },
    { title: "Poliposis nasal", icon: "🔬" },
    { title: "Hipertrofia de cornetes", icon: "👃" },
    { title: "Deviación nasal y Giba dorsal", icon: "📐" },
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground">
            Especialistas exclusivamente en rinoplastia primaria, rinoplastia secundaria 
            y rinomodelación con los más altos estándares de calidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border border-border bg-white hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video relative">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  Te contamos más
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Virtual Consultation Section */}
        <div className="bg-blue-50 rounded-2xl p-8 lg:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Video className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-medium text-foreground">
                  ¿Sabés qué es una CONSULTA VIRTUAL?
                </h3>
              </div>
              <p className="text-muted-foreground">
                No tenés tiempo, vivís lejos de nuestro Centro, querés tener una consulta privada 
                de mano de un experto pero te da miedo o vergüenza. Te ofrecemos una excelente 
                solución para vos.
              </p>
              <Button className="flex items-center space-x-2">
                <Video className="w-4 h-4" />
                <span>CONSULTA VIRTUAL</span>
              </Button>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149328979.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Consulta Virtual"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Conditions We Treat */}
        <div className="mb-12">
          <h3 className="text-2xl font-medium text-foreground text-center mb-8">
            Condiciones que Tratamos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialConditions.map((condition, index) => (
              <Card key={index} className="border border-border bg-white p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{condition.icon}</span>
                  <h4 className="font-medium text-foreground text-sm">{condition.title}</h4>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 border border-border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-foreground">
                ¿Listo para tu Consulta?
              </h3>
              <p className="text-muted-foreground">
                Da el primer paso hacia la nariz que siempre soñaste. Nuestro equipo está 
                listo para brindarte atención especializada y personalizada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultanos por WhatsApp</span>
                </Button>
                <Button variant="outline" size="lg">
                  Formulario de consulta
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-2xl font-medium text-foreground mb-2">Especialistas</div>
                <div className="text-sm text-muted-foreground">en Rinoplastia</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-2xl font-medium text-foreground mb-2">Consulta</div>
                <div className="text-sm text-muted-foreground">Virtual Disponible</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}