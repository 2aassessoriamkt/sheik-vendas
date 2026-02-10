
import React from 'react';
import { Menu, Search } from 'lucide-react';
import sheikLogo from '../midia/Design sem nome (25).png';

interface HeaderProps {
  onOpenAdmin: () => void;
  onSearchChange: (val: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAdmin, onSearchChange }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/10 px-4 lg:px-8 py-3 flex items-center justify-between">
      
      {/* LOGO */}
      <div className="flex items-center gap-4">
        <img
          src={sheikLogo}
          alt="Logo Sheik Vendas"
          className="h-8 md:h-10 w-auto object-contain"
        />

        {/* Busca */}
        <div className="hidden md:flex items-center bg-black/5 border border-black/10 rounded-full px-4 py-1.5 w-64 lg:w-96">
          <Search className="text-gray-600 mr-2" size={18} />
          <input
            type="text"
            placeholder="O que você está procurando?"
            className="bg-transparent border-none outline-none text-sm text-black placeholder:text-gray-500 w-full"
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      {/* MENU (abre admin) */}
      <button
        onClick={onOpenAdmin}
        className="p-2 text-gray-700 hover:text-black hover:bg-black/5 rounded-full transition-colors"
        title="Painel Admin"
      >
        <Menu size={26} />
      </button>
    </header>
  );
};
