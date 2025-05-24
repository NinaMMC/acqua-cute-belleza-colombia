
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Laboratorio natural"
              className="w-full h-96 object-cover rounded-3xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pastel-pink/20 to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* Story Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border-0 bg-gradient-to-br from-pastel-pink/10 to-soft-pink/10">
            <CardContent className="p-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1574263867128-b879b11c25b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Origen natural"
                className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold text-gray-800 mb-3">🌱 Nuestro Origen</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Todo comenzó con la pasión por rescatar los secretos de belleza ancestrales 
                de Colombia. Investigamos ingredientes nativos únicos.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-soft-pink/10 to-light-pink/10">
            <CardContent className="p-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Compromiso local"
                className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold text-gray-800 mb-3">🇨🇴 Compromiso Local</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Trabajamos directamente con comunidades rurales colombianas, garantizando 
                un comercio justo y desarrollo sostenible.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-light-pink/10 to-pastel-pink/10">
            <CardContent className="p-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Impacto positivo"
                className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold text-gray-800 mb-3">🌍 Impacto Positivo</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cada compra contribuye a la conservación de la biodiversidad colombiana y 
                al empoderamiento de mujeres emprendedoras.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8 gradient-text">Nuestro Equipo</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Equipo Acqua Cute Face"
                className="w-full h-64 object-cover rounded-3xl shadow-lg"
              />
            </div>
            <div className="text-left">
              <p className="text-lg text-gray-600 mb-6">
                Un equipo diverso de mujeres apasionadas por la belleza natural, la sostenibilidad 
                y el empoderamiento femenino. Juntas trabajamos para hacer realidad nuestra visión.
              </p>
              <div className="bg-gradient-to-r from-pastel-pink/5 via-white to-soft-pink/5 rounded-2xl p-6">
                <p className="text-gray-600 italic">
                  "Creemos que la verdadera belleza viene de sentirse bien con una misma, 
                  usando productos que reflejen nuestros valores y cuiden nuestro planeta."
                </p>
                <div className="mt-4 text-pastel-pink font-medium">
                  - Equipo Acqua Cute Face
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
