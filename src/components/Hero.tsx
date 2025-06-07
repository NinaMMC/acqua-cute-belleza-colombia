
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-white to-light-pink/20 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="gradient-text font-script">Belleza Natural</span>
              <br />
              <span className="text-gray-800">para tu rostro</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Descubre el poder de los ingredientes naturales colombianos con nuestro kit de cuidado facial. 
              Productos libres de tóxicos, veganos y sostenibles para mujeres conscientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-pastel-pink hover:bg-soft-pink text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Comprar Kit Completo - $114.000 COP
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-pastel-pink text-pastel-pink hover:bg-pastel-pink hover:text-white px-8 py-3 rounded-full transition-all duration-300"
              >
                Ver Productos
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500">
              <div className="flex flex-col items-center">
                <span className="font-semibold text-pastel-pink">100%</span>
                <span>Natural</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold text-pastel-pink">0%</span>
                <span>Tóxicos</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold text-pastel-pink">Cruelty</span>
                <span>Free</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="relative max-w-md mx-auto">
              <img 
                src="/lovable-uploads/6676f977-2b3d-4ba6-9654-5937a1cb059a.png"
                alt="Belleza natural con ingredientes colombianos"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pastel-pink/20 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-2xl font-script mb-1">Acqua</div>
                <div className="text-lg font-light">Cute Face</div>
                <div className="text-sm opacity-90">Belleza Natural</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-pastel-pink" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
