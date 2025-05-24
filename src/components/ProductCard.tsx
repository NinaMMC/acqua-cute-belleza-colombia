
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ShoppingCart } from 'lucide-react';
import ProductImageManager from './ProductImageManager';
import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  benefits: string[];
  ingredients: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [currentImage, setCurrentImage] = useState(product.image);

  const handleImageUpdate = (newImageUrl: string) => {
    setCurrentImage(newImageUrl);
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-6">
        {/* Product Image */}
        <div className="relative mb-6 overflow-hidden rounded-2xl">
          <div className="aspect-square">
            <img 
              src={currentImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-600 hover:text-pastel-pink rounded-full p-2"
          >
            <Heart className="h-4 w-4" />
          </Button>
          
          {/* Show image generator only for banana lip balm */}
          {product.id === '1' && (
            <ProductImageManager
              productName={product.name}
              currentImage={currentImage}
              onImageUpdate={handleImageUpdate}
            />
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
          
          {/* Benefits */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-pastel-pink">Beneficios:</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-pastel-pink mr-2">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Ingredients */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-soft-pink">Ingredientes naturales:</h4>
            <div className="flex flex-wrap gap-1">
              {product.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="text-xs bg-light-pink/30 text-gray-700 px-2 py-1 rounded-full"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          {/* Price and Actions */}
          <div className="pt-4 border-t border-light-pink/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-pastel-pink">{product.price}</span>
              <span className="text-xs text-gray-500">COP</span>
            </div>
            <Button className="w-full bg-pastel-pink hover:bg-soft-pink text-white rounded-full transition-all duration-300 transform hover:scale-105">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Agregar al Carrito
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
