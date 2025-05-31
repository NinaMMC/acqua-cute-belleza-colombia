import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';

const ProductsSection = () => {
  const products = [
    {
      id: '1',
      name: 'Bálsamo Labial de Banano',
      description: 'Hidrata y suaviza tus labios con el poder nutritivo del banano colombiano. Fórmula natural que proporciona hidratación duradera.',
      price: '$25.000',
      image: '/lovable-uploads/e63187bb-b83a-427c-a852-f4feab2ac3a7.png',
      benefits: [
        'Hidratación profunda',
        'Suavidad natural',
        'Protección UV',
        'Textura cremosa'
      ],
      ingredients: ['Banano', 'Manteca de karité', 'Cera de abeja', 'Vitamina E']
    },
    {
      id: '2',
      name: 'Mascarilla Capilar de Borojó',
      description: 'Revitaliza tu cabello con la mascarilla de borojó, una fruta amazónica rica en antioxidantes y nutrientes esenciales.',
      price: '$50.000',
      image: '/lovable-uploads/a5144e77-2992-439c-8ffa-6ea554b437f1.png',
      benefits: [
        'Fortalece el cabello',
        'Aporta brillo natural',
        'Reduce la caspa',
        'Estimula el crecimiento'
      ],
      ingredients: ['Borojó', 'Aceite de coco', 'Aloe vera', 'Proteínas vegetales']
    },
    {
      id: '3',
      name: 'Mascarilla Facial de Frutos Rojos',
      description: 'Rejuvenece tu piel con antioxidantes naturales de frutos rojos colombianos. Ideal para todo tipo de piel.',
      price: '$70.000',
      image: '/lovable-uploads/958c0969-7cb1-4ed0-8d20-8c8abcf30aec.png',
      benefits: [
        'Antioxidante natural',
        'Luminosidad instantánea',
        'Hidratación profunda',
        'Anti-edad natural'
      ],
      ingredients: ['Frutos rojos', 'Ácido hialurónico', 'Colágeno vegetal', 'Extracto de rosa']
    }
  ];

  const kitProduct = {
    id: 'kit',
    name: 'Kit Completo Acqua Cute Face',
    description: 'Rutina completa de belleza natural con nuestros tres productos estrella. Perfecto para una experiencia de cuidado integral.',
    price: '$114.000',
    image: '/lovable-uploads/d2a37eea-5d45-4d45-92e4-6c91c3b61b3c.png',
    benefits: [
      'Rutina completa de belleza',
      'Ahorro del 20%',
      'Productos complementarios',
      'Cuidado integral rostro y cabello'
    ],
    ingredients: ['Todos los ingredientes naturales de los 3 productos']
  };

  return (
    <section id="productos" className="py-20 bg-gradient-to-b from-white to-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text font-script">Nuestros Productos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra línea de productos naturales, elaborados con ingredientes colombianos de la más alta calidad. 
            Cada producto está diseñado para realzar tu belleza natural de forma consciente y sostenible.
          </p>
        </div>

        {/* Kit Destacado */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-pastel-pink/10 to-soft-pink/10 rounded-3xl p-8 border border-light-pink/30">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-pastel-pink mb-2">🌟 Oferta Especial</h3>
              <p className="text-gray-600">Ahorra comprando el kit completo</p>
            </div>
            <div className="max-w-md mx-auto">
              <ProductCard product={kitProduct} />
            </div>
          </div>
        </div>

        {/* Individual Products */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-pastel-pink to-soft-pink hover:from-soft-pink hover:to-pastel-pink text-white px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Ver Catálogo Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
