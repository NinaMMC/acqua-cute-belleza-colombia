
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

        {/* Visual Section with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Belleza sostenible"
              className="w-full h-96 object-cover rounded-3xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pastel-pink/30 to-transparent rounded-3xl"></div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              Compromiso con la Belleza Consciente
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Cada producto de Acqua Cute Face es una declaración de amor hacia ti y hacia nuestro planeta. 
              Formulados con ingredientes naturales de Colombia, libres de químicos dañinos, y con un empaque 
              100% reciclable.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-pastel-pink/10 to-soft-pink/10 rounded-2xl">
                <span className="text-2xl font-bold text-pastel-pink">100%</span>
                <p className="text-sm text-gray-600">Natural</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-soft-pink/10 to-light-pink/10 rounded-2xl">
                <span className="text-2xl font-bold text-soft-pink">0</span>
                <p className="text-sm text-gray-600">Químicos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients Showcase */}
        <div className="bg-gradient-to-r from-pastel-pink/5 via-white to-soft-pink/5 rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">
            Ingredientes Naturales Colombianos
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Frutos naturales"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h4 className="font-semibold text-gray-800 mb-2">Frutos Amazónicos</h4>
              <p className="text-sm text-gray-600">Rico en antioxidantes y vitaminas</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Naturaleza colombiana"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h4 className="font-semibold text-gray-800 mb-2">Extractos Botánicos</h4>
              <p className="text-sm text-gray-600">De la biodiversidad colombiana</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Ingredientes orgánicos"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h4 className="font-semibold text-gray-800 mb-2">Aceites Esenciales</h4>
              <p className="text-sm text-gray-600">Pureza y calidad garantizada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
