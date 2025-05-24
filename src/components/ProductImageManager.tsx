
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import ImageGenerator from './ImageGenerator';
import { Banana } from 'lucide-react';

interface ProductImageManagerProps {
  productName: string;
  currentImage: string;
  onImageUpdate: (newImageUrl: string) => void;
}

const ProductImageManager = ({ productName, currentImage, onImageUpdate }: ProductImageManagerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const bananaBalmPrompt = "Professional product photography of a luxurious lip balm tube with a cute banana logo design, soft pastel pink and yellow colors, natural lighting, white background, cosmetic product photography style, high quality, detailed, elegant packaging";

  const handleImageGenerated = (imageUrl: string) => {
    setGeneratedImage(imageUrl);
  };

  const handleApplyImage = () => {
    if (generatedImage) {
      onImageUpdate(generatedImage);
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="absolute bottom-3 left-3 bg-white/80 hover:bg-white text-pastel-pink border-pastel-pink"
        >
          <Banana className="h-4 w-4 mr-1" />
          Generar
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Generar imagen para {productName}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <ImageGenerator
            prompt={bananaBalmPrompt}
            onImageGenerated={handleImageGenerated}
          />
          
          {generatedImage && (
            <div className="space-y-4">
              <div className="text-center">
                <img
                  src={generatedImage}
                  alt="Imagen generada"
                  className="max-w-full h-auto rounded-lg mx-auto"
                  style={{ maxHeight: '300px' }}
                />
              </div>
              <Button
                onClick={handleApplyImage}
                className="w-full bg-pastel-pink hover:bg-soft-pink text-white"
              >
                Usar esta imagen
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductImageManager;
