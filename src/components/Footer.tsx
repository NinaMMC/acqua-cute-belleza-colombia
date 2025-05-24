
import { Heart, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pastel-pink/10 via-white to-soft-pink/10 border-t border-light-pink/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-script font-bold gradient-text mb-4">
              Acqua Cute Face
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Belleza natural y sostenible con ingredientes colombianos de la más alta calidad.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 mx-1 text-pastel-pink fill-current" />
              <span>en Colombia</span>
              <Leaf className="h-4 w-4 ml-1 text-green-500" />
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Productos</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#productos" className="hover:text-pastel-pink transition-colors">Kit Completo</a></li>
              <li><a href="#productos" className="hover:text-pastel-pink transition-colors">Bálsamo Labial</a></li>
              <li><a href="#productos" className="hover:text-pastel-pink transition-colors">Mascarilla Capilar</a></li>
              <li><a href="#productos" className="hover:text-pastel-pink transition-colors">Mascarilla Facial</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#sobre" className="hover:text-pastel-pink transition-colors">Sobre Acqua</a></li>
              <li><a href="#beneficios" className="hover:text-pastel-pink transition-colors">Beneficios Naturales</a></li>
              <li><a href="#comunidad" className="hover:text-pastel-pink transition-colors">Comunidad</a></li>
              <li><a href="#contacto" className="hover:text-pastel-pink transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Ayuda</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#faq" className="hover:text-pastel-pink transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-pastel-pink transition-colors">Envíos</a></li>
              <li><a href="#" className="hover:text-pastel-pink transition-colors">Devoluciones</a></li>
              <li><a href="#" className="hover:text-pastel-pink transition-colors">Términos</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-light-pink/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © 2024 Acqua Cute Face. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="mailto:acquacuteface@gmail.com" className="text-gray-600 hover:text-pastel-pink transition-colors">
                acquacuteface@gmail.com
              </a>
              <a href="https://wa.me/573152216344" className="text-gray-600 hover:text-pastel-pink transition-colors">
                WhatsApp: 315 221 6344
              </a>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 text-center">
          <div className="flex justify-center items-center space-x-8 text-xs text-gray-500">
            <span className="flex items-center">
              <span className="mr-1">🌱</span>
              100% Natural
            </span>
            <span className="flex items-center">
              <span className="mr-1">🐰</span>
              Cruelty Free
            </span>
            <span className="flex items-center">
              <span className="mr-1">♻️</span>
              Eco-friendly
            </span>
            <span className="flex items-center">
              <span className="mr-1">🇨🇴</span>
              Hecho en Colombia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
