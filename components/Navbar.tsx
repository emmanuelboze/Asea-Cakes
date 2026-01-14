
import React from 'react';
import { View } from '../types';

interface NavbarProps {
  currentView: View;
  setView: (view: View) => void;
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, cartCount }) => {
  return (
    <div className="px-6 py-4 flex justify-between items-center">
      <div 
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setView('home')}
      >
        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">
          <i className="fa-solid fa-ice-cream"></i>
        </div>
        <h1 className="text-xl font-serif text-pink-700 font-bold tracking-tight">Asea Cakes</h1>
      </div>
      <div className="flex gap-4 items-center">
        <button 
          onClick={() => setView('about')}
          className={`text-sm ${currentView === 'about' ? 'text-pink-600 font-semibold' : 'text-gray-500'}`}
        >
          Our Story
        </button>
      </div>
    </div>
  );
};

export default Navbar;
