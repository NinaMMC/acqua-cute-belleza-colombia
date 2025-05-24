
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductsSection from '@/components/ProductsSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
