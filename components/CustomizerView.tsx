
import React, { useState } from 'react';
import { Cake, Customization } from '../types';

interface CustomizerViewProps {
  cake: Cake;
  onAddToCart: (cake: Cake, customization: Customization) => void;
  onBack: () => void;
}

const CustomizerView: React.FC<CustomizerViewProps> = ({ cake, onAddToCart, onBack }) => {
  const [size, setSize] = useState(cake.sizes[0]);
  const [flavor, setFlavor] = useState(cake.flavors[0]);
  const [frosting, setFrosting] = useState(cake.frostings[0]);
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = () => {
    onAddToCart(cake, { size, flavor, frosting, quantity });
  };

  return (
    <div className="animate-slide-up bg-white min-h-full rounded-t-3xl shadow-xl overflow-hidden">
      <div className="relative h-64">
        <button 
          onClick={onBack}
          className="absolute top-4 left-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg text-gray-700"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <img src={cake.image} alt={cake.name} className="w-full h-full object-cover" />
      </div>

      <div className="p-6 space-y-8">
        <div>
          <h2 className="text-2xl font-serif font-bold text-gray-800">{cake.name}</h2>
          <p className="text-sm text-gray-500 mt-1">{cake.description}</p>
        </div>

        <section>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Select Size</h3>
          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
            {cake.sizes.map(s => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-medium border-2 transition-all ${
                  size === s ? 'border-pink-500 bg-pink-50 text-pink-700' : 'border-gray-100 text-gray-400'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Sponge Flavor</h3>
          <div className="grid grid-cols-2 gap-3">
            {cake.flavors.map(f => (
              <button
                key={f}
                onClick={() => setFlavor(f)}
                className={`px-4 py-3 rounded-xl text-xs font-medium border-2 text-left flex justify-between items-center transition-all ${
                  flavor === f ? 'border-pink-500 bg-pink-50 text-pink-700' : 'border-gray-100 text-gray-400'
                }`}
              >
                {f}
                {flavor === f && <i className="fa-solid fa-circle-check text-pink-500"></i>}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Frosting Style</h3>
          <select 
            value={frosting}
            onChange={(e) => setFrosting(e.target.value)}
            className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm focus:ring-2 focus:ring-pink-200 outline-none"
          >
            {cake.frostings.map(fr => <option key={fr} value={fr}>{fr}</option>)}
          </select>
        </section>

        <div className="flex items-center gap-6 pt-4">
          <div className="flex items-center gap-4 bg-gray-100 rounded-2xl p-2">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-pink-600"
            >
              <i className="fa-solid fa-minus"></i>
            </button>
            <span className="font-bold text-gray-700 min-w-[20px] text-center">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-pink-600"
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <button 
            onClick={handleSubmit}
            className="flex-1 bg-pink-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-pink-200 active:scale-95 transition-transform"
          >
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizerView;
