
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'María Fernanda',
      age: 24,
      location: 'Bogotá',
      rating: 5,
      text: 'El kit completo cambió mi rutina de belleza. Mi piel se ve más luminosa y mi cabello más fuerte. ¡Los ingredientes naturales se notan!',
      product: 'Kit Completo'
    },
    {
      name: 'Alejandra',
      age: 28,
      location: 'Medellín',
      rating: 5,
      text: 'La mascarilla de frutos rojos es increíble. Después de usarla, mi piel queda súper suave e hidratada. La recomiendo 100%.',
      product: 'Mascarilla Facial'
    },
    {
      name: 'Carolina',
      age: 22,
      location: 'Cali',
      rating: 5,
      text: 'Me encanta que sean productos colombianos y naturales. El bálsamo labial de banano es mi favorito, huele delicioso.',
      product: 'Bálsamo Labial'
    },
    {
      name: 'Isabella',
      age: 26,
      location: 'Cartagena',
      rating: 5,
      text: 'La mascarilla capilar de borojó le devolvió la vida a mi cabello. Ahora está más brillante y manejable que nunca.',
      product: 'Mascarilla Capilar'
    },
    {
      name: 'Valentina',
      age: 25,
      location: 'Barranquilla',
      rating: 5,
      text: 'Adoro la filosofía de la marca. Productos naturales, cruelty-free y que apoyan a Colombia. Belleza con propósito.',
      product: 'Kit Completo'
    },
    {
      name: 'Sofía',
      age: 29,
      location: 'Bucaramanga',
      rating: 5,
      text: 'Tengo piel sensible y estos productos no me han causado ninguna reacción. La calidad es excelente y se siente la diferencia.',
      product: 'Mascarilla Facial'
    }
  ];

  return (
    <section id="comunidad" className="py-20 bg-gradient-to-b from-cream to-light-pink/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text font-script">Acqua Community</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conoce las experiencias reales de mujeres como tú que han transformado su rutina de belleza con nuestros productos naturales.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-light-pink/30 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.age} años • {testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs bg-pastel-pink/20 text-pastel-pink px-2 py-1 rounded-full">
                        {testimonial.product}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Stats */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-pastel-pink mb-2">500+</div>
              <div className="text-sm text-gray-600">Clientas Felices</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-soft-pink mb-2">4.9</div>
              <div className="text-sm text-gray-600">Calificación Promedio</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-light-pink mb-2">98%</div>
              <div className="text-sm text-gray-600">Recomendarían</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pastel-pink mb-2">15</div>
              <div className="text-sm text-gray-600">Ciudades en Colombia</div>
            </div>
          </div>
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">¡Únete a nuestra comunidad en Instagram!</p>
          <div className="text-pastel-pink font-medium">@acquacuteface</div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
