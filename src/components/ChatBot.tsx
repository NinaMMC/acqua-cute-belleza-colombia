
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={toggleChat}
            className="h-14 w-14 rounded-full bg-gradient-to-r from-pastel-pink to-soft-pink hover:from-soft-pink hover:to-pastel-pink shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </Button>
        )}
        
        {isOpen && (
          <div className="bg-white rounded-2xl shadow-2xl border border-light-pink/20 overflow-hidden w-80 h-96">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-pastel-pink to-soft-pink p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-pastel-pink font-bold text-sm">AC</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Ada - Asistente Virtual</h3>
                  <p className="text-white/80 text-xs">Acqua Cute Face</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleChat}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Chat Content */}
            <div className="h-80">
              <iframe
                src="https://copilotstudio.microsoft.com/environments/Default-6ca34ae1-466f-44bc-a7aa-0ac5a78c61b1/bots/cr3a3_ada0UOe2p/canvas?__version__=2&enableFileAttachment=true"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="Ada - Asistente Virtual de Acqua Cute Face"
                allow="microphone; camera"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatBot;
