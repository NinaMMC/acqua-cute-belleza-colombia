
import { Leaf, Heart, Shield, Recycle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Leaf className="h-12 w-12 text-pastel-pink" />,
      title: 'Ingredientes Locales',
      description: 'Utilizamos la biodiversidad colombiana en cada producto, apoyando a comunidades locales y garantizando frescura.'
    },
    {
      icon: <Heart className="h-12 w-12 text-soft-pink" />,
      title: 'Cruelty Free',
      description: 'Nunca testamos en animales. Nuestros productos son desarrollados con métodos éticos y responsables.'
    },
    {
      icon: <Shield className="h-12 w-12 text-light-pink" />,
      title: 'Libre de Tóxicos',
      description: 'Sin parabenos, silicones ni químicos agresivos. Solo ingredientes naturales que cuidan tu piel.'
    },
    {
      icon: <Recycle className="h-12 w-12 text-pastel-pink" />,
      title: 'Sostenible',
      description: 'Empaques eco-friendly y procesos de producción que respetan el medio ambiente.'
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text font-script">Belleza Natural</span>
            <br />
            <span className="text-gray-800">y Sostenible</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En Acqua Cute Face creemos en una belleza consciente que respeta tu piel, los animales y nuestro planeta. 
            Descubre por qué nuestros productos son la elección perfecta para mujeres que buscan cuidado natural.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="text-center border-0 bg-gradient-to-b from-cream to-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-to-br from-pastel-pink/20 to-soft-pink/20 rounded-full">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="bg-gradient-to-r from-pastel-pink/10 via-white to-soft-pink/10 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-6 gradient-text">
            Compromiso con la Belleza Consciente
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
            Cada producto de Acqua Cute Face es una declaración de amor hacia ti y hacia nuestro planeta. 
            Formulados con ingredientes naturales de Colombia, libres de químicos dañinos, y con un empaque 
            100% reciclable. Porque la verdadera belleza es aquella que no compromete nuestros valores.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-pastel-pink">100%</span>
              <span className="text-sm text-gray-600">Natural</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-soft-pink">0</span>
              <span className="text-sm text-gray-600">Químicos</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-light-pink">♻️</span>
              <span className="text-sm text-gray-600">Eco-friendly</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-pastel-pink">🐰</span>
              <span className="text-sm text-gray-600">Cruelty Free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
