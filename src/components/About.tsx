import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Users, Heart, Stethoscope, Star, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const achievements = [
    {
      icon: Award,
      title: "Especialista Certificado",
      description: "Otorrinolaringología y Cirugía Nasal",
    },
    {
      icon: Users,
      title: "Miles de Pacientes",
      description: "Casos exitosos de rinoplastia",
    },
    {
      icon: Heart,
      title: "Cuidado Integral",
      description: "Estética y función respiratoria",
    },
    {
      icon: Stethoscope,
      title: "Tecnología Avanzada",
      description: "Equipamiento de última generación",
    },
  ];

  const associations = [
    "Hospital de Clínicas de la UBA",
    "Federación Argentina de Sociedades de Otorrinolaringología", 
    "Interamerican Association of Pediatric Otorhinolaryngology",
    "Asociación Argentina de Rinología y Cirugía Plástica Facial",
    "Academia Brasilera de Cirugía Plástica Facial"
  ];

  const blogPosts = [
    {
      title: "¿Cuáles son las causas de la Perforación septal?",
      excerpt: "El tabique nasal se encuentra dividiendo ambas fosas nasales y esta constituido en su parte anterior por cartílago...",
      image:  "https://www.drmonsalve.com/wp-content/uploads/2019/06/PERFORACION-400x245.png"
    },
    {
      title: "¿Qué es la desviación de septum nasal?",
      excerpt: "La desviación del septum nasal es la principal causa de insuficiencia ventilatoria nasal en la población adulta...",
      image: "https://www.drmonsalve.com/wp-content/uploads/2019/06/tabique-desviado-400x225.jpg"
    },
    {
      title: "¿Qué es la Poliposis nasal?",
      excerpt: "La poliposis nasal es una enfermedad inflamatoria benigna de la nariz y senos paranasales...",
      image: "https://www.drmonsalve.com/wp-content/uploads/2019/06/Poliposis-nasal-400x267.jpg"
    }
  ];

  return (
    <section id="doctor" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-6">
            Dr. Fernando Monsalve
          </h2>
          <p className="text-lg text-muted-foreground">
            Especialista dedicado exclusivamente a la cirugía nasal con años de experiencia 
            en rinoplastia primaria, secundaria y rinomodelación.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground">
                Nuestro Centro
              </h3>
              <p className="text-muted-foreground">
                Nuestro Centro fue creado con la finalidad de atender exclusivamente casos de 
                rinoplastia primaria o rinoplastia secundaria tanto rinoplastias funcionales y/o estéticas. 
                La premisa del Centro y del Dr. Fernando Monsalve, es que luego de la operación de nariz 
                puedas conseguir una nariz naturalmente bella, acorde a tu rostro, cuidando fundamentalmente, 
                tu salud respiratoria.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground">
                Filosofía de Atención
              </h3>
              <p className="text-muted-foreground">
                La búsqueda de una nariz bella, armónica, natural, sin que se note que es operada 
                y sin descuidar la salud respiratoria, es nuestro mayor objetivo. La rinoplastia debe 
                adecuarse a tu propio rostro para que se note natural y armónico.
              </p>
            </div>

            <div className="relative">
              <img
                src= "https://fotos.perfil.com/2020/01/07/dr-fernando-martin-monsalve-851124.jpg"
                alt="Dr. Fernando Monsalve en su consulta"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="text-sm font-medium text-foreground">Dr. Fernando Monsalve</div>
                <div className="text-xs text-muted-foreground">Centro de Cirugía Nasal</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                      <achievement.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {achievement.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border border-border">
              <CardContent className="p-6">
                <h4 className="font-medium text-foreground mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Entidades y Asociaciones que nos avalan
                </h4>
                <div className="space-y-2">
                  {associations.map((association, index) => (
                    <div key={index} className="text-sm text-muted-foreground flex items-center">
                      <Star className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                      {association}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-medium text-foreground mb-4">
              Galería de Casos
            </h3>
            <p className="text-muted-foreground">
              Visitá nuestra galería de casos de rinoplastia primaria y rinoplastia secundaria
            </p>
          </div>
          
            <div className="grid md:grid-cols-3 gap-6 mb-8">
  {[
    "https://www.drmonsalve.com/wp-content/uploads/2012/11/nariz_aguilena-e1522706551724.jpg",
    "https://www.drmonsalve.com/wp-content/uploads/2012/11/nariz_aguilena-e1522706551724.jpg",
    "https://www.drmonsalve.com/wp-content/uploads/2012/11/nariz_aguilena-e1522706551724.jpg",
  ].map((src, index) => (
    <Card
      key={index}
      className="overflow-hidden border border-border hover:shadow-lg transition-shadow"
    >
      <div className="relative w-full h-48 bg-black flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src={src}
          alt={`Caso de rinoplastia ${index + 1}`}
          className="max-w-full max-h-full object-contain"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white font-medium">Ver caso completo</span>
        </div>
      </div>
    </Card>
  ))}
</div>
          <div className="text-center">
            <button className="text-primary hover:underline">
              Conocé nuestra galería de casos tratados en el Centro
            </button>
          </div>
        </div>

        {/* Blog Section */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-medium text-foreground mb-4">
              Nuestro Blog sobre Rinoplastia
            </h3>
            <p className="text-muted-foreground">
              Artículos especializados sobre cirugía nasal y cuidados
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border border-border hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  {typeof post.image === 'string' ? (
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-medium text-foreground">{post.title}</h4>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="text-primary text-sm hover:underline">
                    Leer más →
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <button className="text-primary hover:underline">
              Encontrá todos nuestros artículos aquí
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}