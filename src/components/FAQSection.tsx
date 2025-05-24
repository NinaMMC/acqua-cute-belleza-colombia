
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Los productos están realmente libres de químicos?",
      answer: "Sí, todos nuestros productos están formulados con ingredientes 100% naturales. No utilizamos parabenos, silicones, sulfatos ni ningún químico agresivo. Cada ingrediente es cuidadosamente seleccionado por sus propiedades beneficiosas para la piel y el cabello."
    },
    {
      question: "¿Cuánto tiempo tarda en llegar mi pedido?",
      answer: "Los envíos dentro de Colombia toman entre 2-5 días hábiles para ciudades principales y 3-7 días para otras localidades. Ofrecemos envío gratuito en compras superiores a $80.000 COP."
    },
    {
      question: "¿Los productos son aptos para piel sensible?",
      answer: "Absolutamente. Al estar formulados con ingredientes naturales y sin químicos agresivos, nuestros productos son ideales para pieles sensibles. Sin embargo, siempre recomendamos hacer una prueba de parche antes del primer uso."
    },
    {
      question: "¿Cómo debo usar cada producto?",
      answer: "Cada producto incluye instrucciones detalladas. La mascarilla facial se usa 2-3 veces por semana, la mascarilla capilar una vez por semana, y el bálsamo labial se puede usar diariamente las veces que desees."
    },
    {
      question: "¿Ofrecen garantía en sus productos?",
      answer: "Sí, ofrecemos garantía de satisfacción. Si no estás completamente satisfecha con tu compra, puedes devolverla dentro de los primeros 30 días para un reembolso completo."
    },
    {
      question: "¿Los ingredientes son realmente colombianos?",
      answer: "Sí, nos enorgullece usar ingredientes nativos de Colombia como el borojó amazónico, bananos de la región cafetera y frutos rojos de nuestros páramos. Trabajamos directamente con productores locales para garantizar la calidad y frescura."
    },
    {
      question: "¿Puedo comprar productos individuales o solo el kit?",
      answer: "Puedes comprar tanto productos individuales como el kit completo. El kit ofrece un descuento del 20% comparado con la compra individual de los tres productos."
    },
    {
      question: "¿Realizan envíos internacionales?",
      answer: "Actualmente solo realizamos envíos dentro de Colombia. Estamos trabajando para expandir nuestros envíos a otros países de Latinoamérica próximamente."
    },
    {
      question: "¿Los productos tienen fecha de vencimiento?",
      answer: "Sí, al ser productos naturales sin conservantes químicos, tienen una vida útil de 12 meses desde la fecha de fabricación cuando se mantienen cerrados, y 6 meses una vez abiertos."
    },
    {
      question: "¿Puedo encontrar sus productos en tiendas físicas?",
      answer: "Actualmente vendemos principalmente online para mantener precios accesibles. Estamos evaluando la posibilidad de tener puntos de venta físicos en el futuro."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-light-pink/10 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text font-script">Preguntas</span>
            <br />
            <span className="text-gray-800">Frecuentes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros productos y servicios. 
            Si no encuentras la respuesta que buscas, ¡contáctanos!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-light-pink/30 rounded-2xl px-6 bg-white/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left hover:text-pastel-pink transition-colors duration-200 py-6">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">¿Tienes otra pregunta?</p>
          <a 
            href="#contacto" 
            className="text-pastel-pink hover:text-soft-pink font-medium transition-colors duration-200"
          >
            Contáctanos directamente →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
