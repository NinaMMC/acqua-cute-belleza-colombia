
import { useState } from 'react';
import { Menu, X, ShoppingBag, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nuestros Productos', href: '#productos' },
    { name: 'Beneficios Naturales', href: '#beneficios' },
    { name: 'Acqua Community', href: '#comunidad' },
    { name: 'Sobre Acqua', href: '#sobre' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-light-pink z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-script font-bold gradient-text">
              Acqua Cute Face
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-pastel-pink px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-pastel-pink">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-pastel-pink">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-pastel-pink">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-light-pink">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-pastel-pink block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <Button variant="ghost" size="sm" className="text-gray-700">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-700">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-700">
                  <ShoppingBag className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
