import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { generateChatResponse } from '../services/geminiService';

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: "Hello. I am the LEEZE Holistic assistant. How can I support your journey to balance today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);
    
    const apiMessages = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));
    
    const response = await generateChatResponse(apiMessages, userMessage);
    
    setMessages(prev => [...prev, { role: 'model', text: response || '' }]);
    setIsLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-maroon text-white rounded-full shadow-xl transition-all duration-500 hover:bg-[#5A2424] hover:scale-105 flex items-center gap-2 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <Sparkles size={20} />
      </button>

      <div className={`fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-[#FDFBF7] border border-beige shadow-2xl flex flex-col transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'}`} style={{ height: '500px', maxHeight: '80vh' }}>
        <div className="flex items-center justify-between p-4 border-b border-beige bg-maroon text-white">
          <div className="flex items-center gap-2">
            <Sparkles size={18} />
            <span className="font-serif tracking-widest uppercase text-xs">Leeze Guide</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          {messages.map((msg, i) => (
            <div key={i} className={`max-w-[85%] p-3 text-sm ${msg.role === 'user' ? 'bg-[#4A423C] text-white self-end rounded-tl-lg rounded-tr-lg rounded-bl-lg' : 'bg-[#F4F0E6] text-[#4A423C] self-start rounded-tl-lg rounded-tr-lg rounded-br-lg'}`}>
              <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\\n/g, '<br/>') }} />
            </div>
          ))}
          {isLoading && (
            <div className="bg-[#F4F0E6] text-[#4A423C] self-start rounded-tl-lg rounded-tr-lg rounded-br-lg p-3 text-sm flex gap-1">
              <span className="animate-bounce">.</span><span className="animate-bounce" style={{ animationDelay: '0.1s' }}>.</span><span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-3 border-t border-beige bg-white">
          <div className="flex gap-2 relative">
            <input 
              type="text" 
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Ask about our methods..."
              className="flex-1 px-4 py-2 bg-[#F4F0E6] border-none outline-none text-sm text-[#4A423C] rounded-full focus:ring-1 focus:ring-maroon transition-shadow"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-2 bg-maroon text-white rounded-full hover:bg-[#5A2424] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
