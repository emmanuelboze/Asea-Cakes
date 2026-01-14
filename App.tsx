
import React, { useState, useEffect } from 'react';
import { View, Cake, CartItem, Customization, Order, Category } from './types';
import { CAKES, CATEGORIES } from './constants';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import MenuView from './components/MenuView';
import CustomizerView from './components/CustomizerView';
import CartView from './components/CartView';
import CheckoutView from './components/CheckoutView';
import OrdersView from './components/OrdersView';
import AboutView from './components/AboutView';
import AIConsultantView from './components/AIConsultantView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedCake, setSelectedCake] = useState<Cake | null>(null);
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem('asea_orders');
    if (savedOrders) setOrders(JSON.parse(savedOrders));
  }, []);

  const addToCart = (cake: Cake, customization: Customization) => {
    const newItem: CartItem = {
      ...cake,
      customization,
      cartId: Math.random().toString(36).substr(2, 9)
    };
    setCart([...cart, newItem]);
    addNotification(`Added ${cake.name} to your sweet basket!`);
    setCurrentView('cart');
  };

  const removeFromCart = (cartId: string) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const placeOrder = (method: 'Delivery' | 'Pickup', address?: string) => {
    const newOrder: Order = {
      id: `ASEA-${Math.floor(1000 + Math.random() * 9000)}`,
      items: [...cart],
      date: new Date().toLocaleDateString(),
      status: 'Pending',
      method,
      address
    };
    const updatedOrders = [newOrder, ...orders];
    setOrders(updatedOrders);
    localStorage.setItem('asea_orders', JSON.stringify(updatedOrders));
    setCart([]);
    addNotification(`Order request ${newOrder.id} sent successfully!`);
    setCurrentView('orders');
  };

  const addNotification = (msg: string) => {
    setNotifications(prev => [msg, ...prev]);
    setTimeout(() => {
      setNotifications(prev => prev.slice(0, -1));
    }, 5000);
  };

  const renderView = () => {
    switch (currentView) {
      case 'home': return <HomeView setView={setCurrentView} setSelectedCake={(cake) => { setSelectedCake(cake); setCurrentView('customizer'); }} />;
      case 'menu': return <MenuView setSelectedCake={(cake) => { setSelectedCake(cake); setCurrentView('customizer'); }} />;
      case 'customizer': return selectedCake ? <CustomizerView cake={selectedCake} onAddToCart={addToCart} onBack={() => setCurrentView('menu')} /> : <MenuView setSelectedCake={(cake) => { setSelectedCake(cake); setCurrentView('customizer'); }} />;
      case 'cart': return <CartView cart={cart} removeFromCart={removeFromCart} onCheckout={() => setCurrentView('checkout')} onContinue={() => setCurrentView('menu')} />;
      case 'checkout': return <CheckoutView cart={cart} onPlaceOrder={placeOrder} onBack={() => setCurrentView('cart')} />;
      case 'orders': return <OrdersView orders={orders} />;
      case 'about': return <AboutView />;
      case 'ai-consultant': return <AIConsultantView onBack={() => setCurrentView('home')} />;
      default: return <HomeView setView={setCurrentView} setSelectedCake={(cake) => { setSelectedCake(cake); setCurrentView('customizer'); }} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-white shadow-2xl relative overflow-hidden">
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[320px] pointer-events-none">
        {notifications.map((note, i) => (
          <div key={i} className="bg-pink-600 text-white px-4 py-2 rounded-lg shadow-lg mb-2 text-sm animate-bounce text-center">
            {note}
          </div>
        ))}
      </div>

      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <Navbar currentView={currentView} setView={setCurrentView} cartCount={cart.length} />
      </header>

      <main className="flex-1 overflow-y-auto pb-24">
        {renderView()}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-pink-100 flex justify-around items-center py-4 z-40">
        <button onClick={() => setCurrentView('home')} className={`flex flex-col items-center ${currentView === 'home' ? 'text-pink-600' : 'text-gray-400'}`}>
          <i className="fa-solid fa-house text-xl"></i>
          <span className="text-[10px] mt-1">Home</span>
        </button>
        <button onClick={() => setCurrentView('menu')} className={`flex flex-col items-center ${currentView === 'menu' ? 'text-pink-600' : 'text-gray-400'}`}>
          <i className="fa-solid fa-cake-candles text-xl"></i>
          <span className="text-[10px] mt-1">Menu</span>
        </button>
        <button onClick={() => setCurrentView('ai-consultant')} className={`flex flex-col items-center ${currentView === 'ai-consultant' ? 'text-pink-600' : 'text-gray-400'}`}>
          <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center -mt-6 border-4 border-white shadow-lg text-pink-600">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
          </div>
          <span className="text-[10px] mt-1">AI Ask</span>
        </button>
        <button onClick={() => setCurrentView('cart')} className={`flex flex-col items-center relative ${currentView === 'cart' ? 'text-pink-600' : 'text-gray-400'}`}>
          <i className="fa-solid fa-basket-shopping text-xl"></i>
          {cart.length > 0 && <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">{cart.length}</span>}
          <span className="text-[10px] mt-1">Cart</span>
        </button>
        <button onClick={() => setCurrentView('orders')} className={`flex flex-col items-center ${currentView === 'orders' ? 'text-pink-600' : 'text-gray-400'}`}>
          <i className="fa-solid fa-clock-rotate-left text-xl"></i>
          <span className="text-[10px] mt-1">Orders</span>
        </button>
      </footer>
    </div>
  );
};

export default App;
