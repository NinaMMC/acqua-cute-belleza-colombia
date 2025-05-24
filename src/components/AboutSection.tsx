
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text font-script">Sobre Acqua</span>
              <br />
              <span className="text-gray-800">Cute Face</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Somos una marca colombiana nacida del amor por la belleza natural y sostenible. 
              Creemos que cada mujer merece productos de calidad que respeten su piel y el planeta.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-pastel-pink rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Nuestra Misión</h3>
                  <p className="text-gray-600">
                    Democratizar la belleza natural, ofreciendo productos de alta calidad 
                    elaborados con ingredientes colombianos, accesibles para todas las mujeres.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-soft-pink rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Nuestra Visión</h3>
                  <p className="text-gray-600">
                    Ser la marca líder en belleza natural en Colombia, reconocida por la 
                    calidad de nuestros productos y nuestro compromiso con la sostenibilidad.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-light-pink rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Nuestros Valores</h3>
                  <p className="text-gray-600">
                    Transparencia, sostenibilidad, calidad y respeto por la biodiversidad 
                    colombiana son los pilares que guían cada una de nuestras decisiones.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Story Cards */}
          <div className="space-y-6">
            <Card className="border-0 bg-gradient-to-br from-pastel-pink/10 to-soft-pink/10">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-3">🌱 Nuestro Origen</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Todo comenzó con la pasión por rescatar los secretos de belleza ancestrales 
                  de Colombia. Investigamos ingredientes nativos como el borojó, el banano y 
                  los frutos rojos amazónicos para crear fórmulas únicas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-soft-pink/10 to-light-pink/10">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-3">🇨🇴 Compromiso Local</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Trabajamos directamente con comunidades rurales colombianas, garantizando 
                  un comercio justo y apoyando el desarrollo sostenible de nuestras regiones.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-light-pink/10 to-pastel-pink/10">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-3">🌍 Impacto Positivo</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cada compra contribuye a la conservación de la biodiversidad colombiana y 
                  al empoderamiento de mujeres emprendedoras en zonas rurales del país.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-8 gradient-text">Nuestro Equipo</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Un equipo diverso de mujeres apasionadas por la belleza natural, la sostenibilidad 
            y el empoderamiento femenino. Juntas trabajamos para hacer realidad nuestra visión.
          </p>
          
          <div className="bg-gradient-to-r from-pastel-pink/5 via-white to-soft-pink/5 rounded-3xl p-8">
            <p className="text-gray-600 italic text-lg">
              "Creemos que la verdadera belleza viene de sentirse bien con una misma, 
              usando productos que reflejen nuestros valores y cuiden nuestro planeta."
            </p>
            <div className="mt-4 text-pastel-pink font-medium">
              - Equipo Acqua Cute Face
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
