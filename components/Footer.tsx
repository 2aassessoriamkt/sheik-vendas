import React from 'react';
import { MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const whatsappDigits = '9185515016';
  const whatsappMessage = 'Olá! Vim pelo site Sheik Vendas e quero tirar uma dúvida.';

  return (
    <footer className="border-t border-white/5 bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-sm text-gray-300 font-bold">Sheik Vendas</div>
            <div className="text-xs text-gray-500 mt-1">
              Atendemos a região entre Mato Grosso e Pará.
            </div>
          </div>

          <a
            href={`https://wa.me/55${whatsappDigits}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-5 py-3 rounded-xl transition-colors"
          >
            <MessageCircle size={20} />
            Falar no WhatsApp
          </a>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 text-xs text-gray-500 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span>© {new Date().getFullYear()} Sheik Vendas. Todos os direitos reservados.</span>
          <span>WhatsApp: (91) 8551-5016</span>
        </div>
      </div>
    </footer>
  );
};
