import { Button } from "./ui/button";
import { Menu, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="src\foti\Screenshot 2025-08-21 160533.png"
                alt="Fernando avatar"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <h1 className="text-lg font-medium text-foreground">Dr. Fernando Monsalve</h1>
              <p className="text-sm text-muted-foreground">Centro de Cirugía Nasal</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#doctor" className="text-foreground hover:text-primary transition-colors">
              Dr. Monsalve
            </a>
            <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#galeria" className="text-foreground hover:text-primary transition-colors">
              Galería
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span className="text-sm">0249 4420202</span>
            </div>
            <Button className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
                Inicio
              </a>
              <a href="#doctor" className="text-foreground hover:text-primary transition-colors">
                Dr. Monsalve
              </a>
              <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
                Servicios
              </a>
              <a href="#galeria" className="text-foreground hover:text-primary transition-colors">
                Galería
              </a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
                Contacto
              </a>
              <div className="flex items-center space-x-2 text-muted-foreground pt-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">0249 4420202</span>
              </div>
              <Button className="w-fit flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}