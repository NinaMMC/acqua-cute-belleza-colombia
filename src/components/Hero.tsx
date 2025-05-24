
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
            <div className="bg-gradient-to-br from-pastel-pink/20 to-soft-pink/20 rounded-full p-8 max-w-md mx-auto">
              <div className="bg-white rounded-full p-8 shadow-2xl">
                <div className="w-64 h-64 bg-gradient-to-br from-light-pink to-pastel-pink rounded-full flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-script mb-2">Acqua</div>
                    <div className="text-2xl font-light">Cute Face</div>
                    <div className="text-sm mt-2 opacity-90">Kit Natural</div>
                  </div>
                </div>
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
