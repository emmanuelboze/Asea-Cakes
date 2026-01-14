
import React, { useState } from 'react';
import { getCakeRecommendation } from '../services/geminiService';

interface AIConsultantViewProps {
  onBack: () => void;
}

const AIConsultantView: React.FC<AIConsultantViewProps> = ({ onBack }) => {
  const [occasion, setOccasion] = useState('');
  const [preferences, setPreferences] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<any>(null);

  const handleAsk = async () => {
    if (!occasion || !preferences) return;
    setLoading(true);
    const result = await getCakeRecommendation(occasion, preferences);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <div className="p-6 animate-fade-in min-h-full">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="text-gray-500 p-2 -ml-2"><i className="fa-solid fa-arrow-left"></i></button>
        <h2 className="text-2xl font-serif font-bold text-gray-800">AI Cake Consultant</h2>
      </div>

      {!recommendation ? (
        <div className="space-y-6">
          <div className="bg-pink-50 p-6 rounded-3xl">
            <p className="text-pink-700 text-sm leading-relaxed mb-4">
              "Hi, I'm Asea's digital assistant! Tell me what you're celebrating and what you love, and I'll dream up the perfect cake for you."
            </p>
            <div className="flex justify-center text-pink-300 text-4xl py-4 animate-pulse">
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">What's the occasion?</label>
              <input 
                type="text" 
                placeholder="e.g. 10th Wedding Anniversary, 5th Birthday"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full bg-white border border-gray-100 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-pink-200 outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Any flavor or style preferences?</label>
              <textarea 
                placeholder="e.g. Likes chocolate but not too sweet, loves minimalist designs with flowers..."
                value={preferences}
                onChange={(e) => setPreferences(e.target.value)}
                className="w-full bg-white border border-gray-100 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-pink-200 outline-none h-32 resize-none"
              />
            </div>
            <button 
              onClick={handleAsk}
              disabled={loading || !occasion || !preferences}
              className="w-full bg-pink-600 disabled:bg-gray-300 text-white font-bold py-4 rounded-2xl shadow-xl shadow-pink-200 flex justify-center items-center gap-3 transition-all"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Baking ideas...
                </>
              ) : (
                <>Consult Asea AI <i className="fa-solid fa-sparkles"></i></>
              )}
            </button>
          </div>
        </div>
      ) : (
        <div className="animate-slide-up space-y-6 pb-12">
          <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-8 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl">
              <i className="fa-solid fa-cake-candles"></i>
            </div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-80">Our Suggestion</h3>
            <h4 className="text-3xl font-serif mb-4 leading-tight">{recommendation.suggestion}</h4>
            <div className="space-y-4 text-pink-50 text-sm">
              <div className="flex gap-3">
                <i className="fa-solid fa-spoon mt-1"></i>
                <p><strong className="text-white">Flavors:</strong> {recommendation.flavors}</p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20 italic">
                "{recommendation.why}"
              </div>
            </div>
          </div>

          <button 
            onClick={() => setRecommendation(null)}
            className="w-full bg-gray-100 text-gray-600 font-bold py-4 rounded-2xl"
          >
            Start Over
          </button>
          
          <button 
            onClick={onBack}
            className="w-full bg-pink-50 text-pink-600 font-bold py-4 rounded-2xl border border-pink-100"
          >
            Browse Similar in Menu
          </button>
        </div>
      )}
    </div>
  );
};

export default AIConsultantView;
