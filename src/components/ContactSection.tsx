
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573152216344?text=Hola! Me interesa conocer más sobre los productos de Acqua Cute Face', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:acquacuteface@gmail.com?subject=Consulta sobre productos Acqua Cute Face', '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-white to-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text font-script">Contáctanos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Ponte en contacto con nosotras para resolver dudas, 
            hacer pedidos personalizados o simplemente conversar sobre belleza natural.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">¡Hablemos!</h3>
              <p className="text-gray-600 mb-8">
                Nos encanta escuchar a nuestra comunidad. Escríbenos por WhatsApp para una atención 
                más rápida o envíanos un email para consultas detalladas.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card 
                className="border-0 bg-gradient-to-r from-pastel-pink/10 to-soft-pink/5 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={handleWhatsAppClick}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-500 rounded-full">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                      <p className="text-gray-600">315 221 6344</p>
                      <p className="text-sm text-green-600">Respuesta inmediata</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card 
                className="border-0 bg-gradient-to-r from-soft-pink/10 to-light-pink/5 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={handleEmailClick}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-pastel-pink rounded-full">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">acquacuteface@gmail.com</p>
                      <p className="text-sm text-pastel-pink">Respuesta en 24h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-r from-light-pink/10 to-pastel-pink/5">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-soft-pink rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Ubicación</h4>
                      <p className="text-gray-600">Colombia</p>
                      <p className="text-sm text-soft-pink">Envíos a todo el país</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-r from-pastel-pink/5 to-soft-pink/10">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-light-pink rounded-full">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Horarios</h4>
                      <p className="text-gray-600">Lun - Vie: 8:00 AM - 6:00 PM</p>
                      <p className="text-sm text-light-pink">Sáb: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="animate-fade-in">
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Mensaje Rápido</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-light-pink/30 rounded-lg focus:ring-2 focus:ring-pastel-pink focus:border-transparent transition-all duration-200"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-light-pink/30 rounded-lg focus:ring-2 focus:ring-pastel-pink focus:border-transparent transition-all duration-200"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-light-pink/30 rounded-lg focus:ring-2 focus:ring-pastel-pink focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-pastel-pink to-soft-pink hover:from-soft-pink hover:to-pastel-pink text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">Síguenos en Redes</h3>
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="p-3 bg-gradient-to-r from-pastel-pink to-soft-pink rounded-full text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110"
            >
              <span className="text-sm font-medium">Instagram</span>
            </a>
            <a 
              href="#" 
              className="p-3 bg-gradient-to-r from-soft-pink to-light-pink rounded-full text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110"
            >
              <span className="text-sm font-medium">Facebook</span>
            </a>
            <a 
              href="#" 
              className="p-3 bg-gradient-to-r from-light-pink to-pastel-pink rounded-full text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110"
            >
              <span className="text-sm font-medium">TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
