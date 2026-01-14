
import React from 'react';
import { View, Cake } from '../types';
import { CAKES } from '../constants';

interface HomeViewProps {
  setView: (view: View) => void;
  setSelectedCake: (cake: Cake) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ setView, setSelectedCake }) => {
  const featured = CAKES.slice(0, 3);

  return (
    <div className="animate-fade-in">
      <div className="relative h-64 bg-pink-50 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=800" 
          alt="Bakery" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent flex flex-col justify-end p-6">
          <h2 className="text-white text-3xl font-serif mb-2">Baked with Love, Crafted for Moments.</h2>
          <p className="text-pink-50 text-sm font-light mb-4">Discover our collection of artisanal cakes for your special celebrations.</p>
          <button 
            onClick={() => setView('menu')}
            className="bg-white text-pink-700 px-6 py-2 rounded-full font-semibold text-sm w-max shadow-lg active:scale-95 transition-transform"
          >
            Explore Menu
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-serif font-bold text-gray-800">Shop by Category</h3>
          <button onClick={() => setView('menu')} className="text-pink-600 text-sm font-medium">View All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {['Wedding', 'Birthday', 'Cupcakes', 'Signature'].map(cat => (
            <div 
              key={cat} 
              onClick={() => setView('menu')}
              className="flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer"
            >
              <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-400 border border-pink-100 shadow-sm">
                <i className={`fa-solid ${cat === 'Wedding' ? 'fa-rings-wedding' : cat === 'Birthday' ? 'fa-birthday-cake' : cat === 'Cupcakes' ? 'fa-cookie' : 'fa-star'}`}></i>
              </div>
              <span className="text-[11px] font-medium text-gray-600">{cat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 bg-pink-50/50">
        <h3 className="text-lg font-serif font-bold text-gray-800 mb-4">Trending This Week</h3>
        <div className="grid grid-cols-2 gap-4">
          {featured.map(cake => (
            <div 
              key={cake.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-pink-100 cursor-pointer group"
              onClick={() => setSelectedCake(cake)}
            >
              <div className="h-32 overflow-hidden relative">
                <img src={cake.image} alt={cake.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-3">
                <h4 className="text-xs font-bold text-gray-800 mb-1 truncate">{cake.name}</h4>
                <p className="text-[10px] text-gray-500 line-clamp-1">{cake.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 text-center space-y-4">
        <h3 className="text-sm font-medium text-gray-400 tracking-widest uppercase">Connect With Us</h3>
        <div className="flex justify-center gap-6 text-2xl text-pink-300">
          <a href="#" className="hover:text-pink-500 transition-colors"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" className="hover:text-pink-500 transition-colors"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" className="hover:text-pink-500 transition-colors"><i className="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
