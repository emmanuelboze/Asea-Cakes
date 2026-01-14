
import React, { useState } from 'react';
import { CartItem } from '../types';

interface CheckoutViewProps {
  cart: CartItem[];
  onPlaceOrder: (method: 'Delivery' | 'Pickup', address?: string) => void;
  onBack: () => void;
}

const CheckoutView: React.FC<CheckoutViewProps> = ({ cart, onPlaceOrder, onBack }) => {
  const [method, setMethod] = useState<'Delivery' | 'Pickup'>('Delivery');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  return (
    <div className="p-6 animate-fade-in space-y-8">
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="text-gray-500 p-2 -ml-2"><i className="fa-solid fa-arrow-left"></i></button>
        <h2 className="text-2xl font-serif font-bold text-gray-800">Inquiry Details</h2>
      </div>

      <section>
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Preferred Method</h3>
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => setMethod('Delivery')}
            className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${
              method === 'Delivery' ? 'border-pink-500 bg-pink-50 text-pink-700' : 'border-gray-100 text-gray-400'
            }`}
          >
            <i className="fa-solid fa-truck"></i>
            <span className="text-xs font-bold">Delivery</span>
          </button>
          <button 
            onClick={() => setMethod('Pickup')}
            className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${
              method === 'Pickup' ? 'border-pink-500 bg-pink-50 text-pink-700' : 'border-gray-100 text-gray-400'
            }`}
          >
            <i className="fa-solid fa-shop"></i>
            <span className="text-xs font-bold">Store Pickup</span>
          </button>
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contact Phone</h3>
          <input 
            type="tel" 
            placeholder="+1 (555) 000-0000"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm focus:ring-2 focus:ring-pink-200 outline-none"
          />
        </div>

        {method === 'Delivery' && (
          <div className="animate-slide-down">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Delivery Address</h3>
            <input 
              type="text" 
              placeholder="123 Sweet Street, Bakery City"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm focus:ring-2 focus:ring-pink-200 outline-none"
            />
          </div>
        )}
      </section>

      <section className="bg-pink-50 p-6 rounded-3xl">
        <h4 className="text-pink-700 font-bold text-xs uppercase tracking-wider mb-2">Basket Summary</h4>
        <p className="text-gray-600 text-[10px] leading-relaxed">
          Your inquiry contains {cart.length} unique item(s). Our team will contact you via phone within 24 hours to confirm availability and provide a quote.
        </p>
      </section>

      <button 
        onClick={() => onPlaceOrder(method, address)}
        disabled={(method === 'Delivery' && !address) || !contact}
        className="w-full bg-pink-600 disabled:bg-gray-300 text-white font-bold py-5 rounded-2xl shadow-xl shadow-pink-200 transition-all transform active:scale-[0.98]"
      >
        Send Order Inquiry
      </button>
    </div>
  );
};

export default CheckoutView;
