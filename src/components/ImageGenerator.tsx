
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const API_ENDPOINT = "https://api.runware.ai/v1";

interface GenerateImageParams {
  positivePrompt: string;
  model?: string;
  width?: number;
  height?: number;
  numberResults?: number;
  outputFormat?: string;
  CFGScale?: number;
  scheduler?: string;
}

interface GeneratedImage {
  imageURL: string;
  positivePrompt: string;
  seed: number;
  NSFWContent: boolean;
}

interface ImageGeneratorProps {
  onImageGenerated: (imageUrl: string) => void;
  prompt: string;
  apiKey?: string;
}

const ImageGenerator = ({ onImageGenerated, prompt, apiKey }: ImageGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [userApiKey, setUserApiKey] = useState(apiKey || '');

  const generateImage = async (params: GenerateImageParams): Promise<GeneratedImage> => {
    if (!userApiKey) {
      throw new Error('API key is required');
    }

    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        {
          taskType: "authentication",
          apiKey: userApiKey
        },
        {
          taskType: "imageInference",
          taskUUID: crypto.randomUUID(),
          positivePrompt: params.positivePrompt,
          width: params.width || 512,
          height: params.height || 512,
          model: params.model || "runware:100@1",
          numberResults: params.numberResults || 1,
          outputFormat: params.outputFormat || "WEBP",
          CFGScale: params.CFGScale || 1,
          scheduler: params.scheduler || "FlowMatchEulerDiscreteScheduler"
        }
      ])
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.data && result.data.length > 0) {
      const imageData = result.data.find((item: any) => item.taskType === "imageInference");
      if (imageData && imageData.imageURL) {
        return imageData;
      }
    }
    
    throw new Error('No image generated');
  };

  const handleGenerate = async () => {
    if (!userApiKey) {
      toast.error('Por favor ingresa tu API key de Runware');
      return;
    }

    setIsGenerating(true);
    try {
      const result = await generateImage({
        positivePrompt: prompt,
        width: 800,
        height: 800
      });
      
      onImageGenerated(result.imageURL);
      toast.success('¡Imagen generada exitosamente!');
    } catch (error) {
      console.error('Error generating image:', error);
      toast.error('Error al generar la imagen. Verifica tu API key.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-4 p-4 border rounded-lg bg-cream/50">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Runware API Key (obtén la tuya en https://runware.ai/)
        </label>
        <input
          type="password"
          value={userApiKey}
          onChange={(e) => setUserApiKey(e.target.value)}
          placeholder="Ingresa tu API key de Runware"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pastel-pink"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Prompt:</label>
        <p className="text-sm text-gray-600 bg-white p-2 rounded border">{prompt}</p>
      </div>

      <Button
        onClick={handleGenerate}
        disabled={isGenerating || !userApiKey}
        className="w-full bg-pastel-pink hover:bg-soft-pink text-white"
      >
        {isGenerating ? 'Generando imagen...' : 'Generar Imagen'}
      </Button>
    </div>
  );
};

export default ImageGenerator;
