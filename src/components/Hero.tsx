import { Button } from "./ui/button";
import { MessageCircle, Phone, Video, FileText } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-medium text-foreground leading-tight">
                Rinoplastia en Argentina
              </h1>
              <h2 className="text-2xl text-primary">
                Cirugía de nariz en el Centro de Cirugía Nasal Dr. Fernando Monsalve
              </h2>
              <p className="text-lg text-muted-foreground">
                Nuestro Centro fue creado con la finalidad de atender exclusivamente casos de 
                rinoplastia primaria o rinoplastia secundaria tanto rinoplastias funcionales y/o estéticas. 
                La premisa del Centro y del Dr. Fernando Monsalve, es que luego de la operación de nariz 
                puedas conseguir una nariz naturalmente bella, acorde a tu rostro, cuidando fundamentalmente, 
                tu salud respiratoria.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Consultanos por WhatsApp</span>
              </Button>
              <Button variant="outline" size="lg" className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Formulario de consulta</span>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Video className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Consulta Virtual</h3>
                  <p className="text-sm text-muted-foreground">Consultas online especializadas</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Tandil, Argentina</h3>
                  <p className="text-sm text-muted-foreground">Sarmiento 333 (7000)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              <ImageWithFallback
                src="https://static.esteticas.com.ar/site/company/a3/162376/images/306695/306695_ci.jpg"
                alt="Rinoplastia - Dr. Fernando Monsalve"
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-medium text-foreground">Especialista</div>
                  <div className="text-sm text-muted-foreground">en Rinoplastia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}