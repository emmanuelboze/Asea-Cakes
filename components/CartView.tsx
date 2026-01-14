
import React from 'react';
import { CartItem } from '../types';

interface CartViewProps {
  cart: CartItem[];
  removeFromCart: (id: string) => void;
  onCheckout: () => void;
  onContinue: () => void;
}

const CartView: React.FC<CartViewProps> = ({ cart, removeFromCart, onCheckout, onContinue }) => {
  if (cart.length === 0) {
    return (
      <div className="p-8 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-24 h-24 bg-pink-50 rounded-full flex items-center justify-center text-pink-200 text-5xl mb-6">
          <i className="fa-solid fa-basket-shopping"></i>
        </div>
        <h2 className="text-xl font-serif font-bold text-gray-800 mb-2">Your basket is empty</h2>
        <p className="text-gray-400 text-sm mb-8">It looks like you haven't added any treats yet!</p>
        <button 
          onClick={onContinue}
          className="bg-pink-600 text-white px-8 py-3 rounded-full font-bold shadow-lg"
        >
          Browse Our Menu
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 animate-fade-in flex flex-col min-h-full">
      <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">Your Sweet Basket</h2>
      
      <div className="space-y-4 mb-24">
        {cart.map(item => (
          <div key={item.cartId} className="bg-white border border-pink-50 rounded-2xl p-4 flex gap-4 shadow-sm relative">
            <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 pr-8">
              <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
              <p className="text-[10px] text-gray-400 mt-1">
                {item.customization.size} • {item.customization.flavor} • Qty: {item.customization.quantity}
              </p>
            </div>
            <button 
              onClick={() => removeFromCart(item.cartId)}
              className="absolute top-4 right-4 text-gray-300 hover:text-red-400 p-2"
            >
              <i className="fa-solid fa-trash-can text-sm"></i>
            </button>
          </div>
        ))}
      </div>

      <div className="fixed bottom-24 left-0 right-0 max-w-md mx-auto px-6 z-30">
        <div className="bg-white p-6 rounded-t-3xl border-t border-pink-100 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
          <p className="text-[10px] text-gray-400 text-center mb-4">Pricing will be provided upon review of your inquiry.</p>
          <button 
            onClick={onCheckout}
            className="w-full bg-pink-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-pink-200 flex justify-center items-center gap-2 active:scale-95 transition-transform"
          >
            Finalize Inquiry <i className="fa-solid fa-paper-plane text-sm opacity-50"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartView;
