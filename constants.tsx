
import { Cake, Category } from './types';

export const CATEGORIES: Category[] = ['Signature', 'Wedding', 'Birthday', 'Cupcakes', 'Seasonal'];

export const CAKES: Cake[] = [
  {
    id: '1',
    name: 'Vanilla Dream',
    description: 'Triple-layer Madagascar vanilla bean sponge with silky buttercream.',
    category: 'Signature',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800',
    flavors: ['Vanilla', 'Strawberry', 'Lemon'],
    sizes: ["6' Mini", "8' Standard", "10' Party"],
    frostings: ['Vanilla Buttercream', 'Cream Cheese', 'Whipped Cream']
  },
  {
    id: '2',
    name: 'Midnight Velvet',
    description: 'Deep cocoa sponge with a hint of espresso and tang of cream cheese frosting.',
    category: 'Signature',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=800',
    flavors: ['Red Velvet', 'Dark Chocolate'],
    sizes: ["6' Mini", "8' Standard", "10' Party"],
    frostings: ['Cream Cheese', 'Chocolate Ganache']
  },
  {
    id: '3',
    name: 'Elysian Wedding',
    description: 'An elegant multi-tier masterpiece with handmade sugar flowers.',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1522673607200-164883eecd4c?q=80&w=800',
    flavors: ['Almond', 'Champagne', 'White Rose'],
    sizes: ['2 Tier', '3 Tier', '4 Tier'],
    frostings: ['Fondant', 'Smooth Buttercream']
  },
  {
    id: '4',
    name: 'Confetti Explosion',
    description: 'Fun, colorful sprinkles baked inside a light and fluffy yellow cake.',
    category: 'Birthday',
    image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=800',
    flavors: ['Yellow Cake', 'Chocolate Chip'],
    sizes: ["8' Standard", "10' Party"],
    frostings: ['Funfetti Frosting', 'Strawberry Swirl']
  },
  {
    id: '5',
    name: 'Rosé Garden Box',
    description: 'A dozen artisanal cupcakes decorated like a blooming spring garden.',
    category: 'Cupcakes',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800',
    flavors: ['Raspberry', 'Lavender', 'Lemon'],
    sizes: ['Box of 6', 'Box of 12'],
    frostings: ['Floral Buttercream']
  }
];
