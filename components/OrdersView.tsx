
import React from 'react';
import { Order } from '../types';

interface OrdersViewProps {
  orders: Order[];
}

const OrdersView: React.FC<OrdersViewProps> = ({ orders }) => {
  return (
    <div className="p-6 animate-fade-in">
      <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">Your Inquiries</h2>

      {orders.length === 0 ? (
        <div className="py-20 text-center space-y-4">
          <div className="text-6xl text-pink-100"><i className="fa-solid fa-receipt"></i></div>
          <p className="text-gray-400">You haven't sent any inquiries yet.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map(order => (
            <div key={order.id} className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0">
                <div className={`px-4 py-1 text-[9px] font-bold uppercase tracking-widest text-white ${
                  order.status === 'Delivered' ? 'bg-green-400' : 'bg-pink-400'
                }`}>
                  {order.status}
                </div>
              </div>

              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold text-gray-800">#{order.id}</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-tighter">{order.date}</p>
                </div>
              </div>

              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide mb-4">
                {order.items.map((item, idx) => (
                  <div key={idx} className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <i className={`fa-solid ${order.method === 'Delivery' ? 'fa-truck' : 'fa-shop'}`}></i>
                  {order.method}
                </span>
                <span className="text-[10px] text-gray-300">Awaiting Quotation</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersView;
