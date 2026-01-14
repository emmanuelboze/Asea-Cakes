
import React, { useState } from 'react';
import { Cake, Category } from '../types';
import { CAKES, CATEGORIES } from '../constants';

interface MenuViewProps {
  setSelectedCake: (cake: Cake) => void;
}

const MenuView: React.FC<MenuViewProps> = ({ setSelectedCake }) => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [search, setSearch] = useState('');

  const filteredCakes = CAKES.filter(cake => 
    (activeCategory === 'All' || cake.category === activeCategory) &&
    cake.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 animate-fade-in">
      <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">Explore Our Bakery</h2>
      
      <div className="relative mb-6">
        <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
        <input 
          type="text" 
          placeholder="Search for cakes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-pink-50 border-none rounded-2xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-pink-200 outline-none"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
        {['All', ...CATEGORIES].map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat as Category | 'All')}
            className={`flex-shrink-0 px-5 py-2 rounded-full text-xs font-medium transition-all ${
              activeCategory === cat 
                ? 'bg-pink-600 text-white shadow-md' 
                : 'bg-white text-gray-500 border border-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 mt-4">
        {filteredCakes.length > 0 ? (
          filteredCakes.map(cake => (
            <div 
              key={cake.id} 
              className="bg-white rounded-3xl p-3 shadow-sm border border-pink-50 flex gap-4 cursor-pointer active:scale-[0.98] transition-all"
              onClick={() => setSelectedCake(cake)}
            >
              <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                <img src={cake.image} alt={cake.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-between py-1 flex-1">
                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-gray-800 text-sm">{cake.name}</h4>
                  </div>
                  <p className="text-[10px] text-gray-500 mt-1 line-clamp-2">{cake.description}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[9px] bg-pink-50 text-pink-500 px-2 py-0.5 rounded-full uppercase font-bold tracking-wider">{cake.category}</span>
                  <div className="w-7 h-7 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600">
                    <i className="fa-solid fa-plus text-xs"></i>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20">
            <div className="text-pink-200 text-5xl mb-4"><i className="fa-solid fa-cookie-bite"></i></div>
            <p className="text-gray-400 text-sm">No cakes found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuView;
