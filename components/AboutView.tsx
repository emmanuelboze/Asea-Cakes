
import React from 'react';

const AboutView: React.FC = () => {
  return (
    <div className="p-6 animate-fade-in space-y-8">
      <div className="relative h-48 rounded-3xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800" 
          alt="Our Bakery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-pink-900/30 flex items-center justify-center">
          <h2 className="text-white text-3xl font-serif">Our Story</h2>
        </div>
      </div>

      <div className="space-y-6 text-gray-600 leading-relaxed text-sm">
        <p>
          Founded in 2018, <span className="text-pink-600 font-serif font-bold italic">Asea Cakes</span> began in a small kitchen with a simple dream: to make the world a little sweeter, one slice at a time.
        </p>
        <p>
          What started as a weekend passion for experimental baking soon evolved into a neighborhood favorite. Asea, our head pastry chef, believes that a cake is more than just a dessert—it's the centerpiece of your most cherished memories.
        </p>
        
        <div className="bg-pink-50 p-6 rounded-2xl border-l-4 border-pink-400 italic">
          "Every ingredient we use is ethically sourced, every sponge is baked from scratch, and every decoration is hand-piped with precision. We don't just sell cakes; we deliver joy."
        </div>

        <h3 className="text-lg font-serif font-bold text-gray-800 pt-4">Our Commitment</h3>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <i className="fa-solid fa-leaf text-pink-400 mt-1"></i>
            <span>Premium, organic ingredients locally sourced whenever possible.</span>
          </li>
          <li className="flex gap-3">
            <i className="fa-solid fa-hand-sparkles text-pink-400 mt-1"></i>
            <span>No preservatives or artificial mixes—ever.</span>
          </li>
          <li className="flex gap-3">
            <i className="fa-solid fa-heart text-pink-400 mt-1"></i>
            <span>Customized precisely to your vision and dietary needs.</span>
          </li>
        </ul>
      </div>

      <div className="pt-8 border-t border-pink-100 space-y-4">
        <h4 className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">Visit Our Studio</h4>
        <p className="text-center text-xs text-gray-500">
          123 Flourish Ave, Suite 100<br/>
          Sweetwater, CA 90210<br/>
          Open Daily: 9am - 6pm
        </p>
      </div>
    </div>
  );
};

export default AboutView;
