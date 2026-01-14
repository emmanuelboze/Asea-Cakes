
export type Category = 'Signature' | 'Wedding' | 'Birthday' | 'Cupcakes' | 'Seasonal';

export interface Cake {
  id: string;
  name: string;
  description: string;
  category: Category;
  image: string;
  flavors: string[];
  sizes: string[];
  frostings: string[];
}

export interface Customization {
  size: string;
  flavor: string;
  frosting: string;
  quantity: number;
}

export interface CartItem extends Cake {
  customization: Customization;
  cartId: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  date: string;
  status: 'Pending' | 'Baking' | 'Out for Delivery' | 'Delivered' | 'Ready for Pickup';
  method: 'Delivery' | 'Pickup';
  address?: string;
}

export type View = 'home' | 'menu' | 'customizer' | 'cart' | 'checkout' | 'orders' | 'about' | 'ai-consultant';
