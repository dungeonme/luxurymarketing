import React from 'react';
import { motion } from 'framer-motion';

const materials = [
  { name: 'Indian Rosewood', latin: 'Dalbergia Sissoo', tone: '#2D1B14', desc: 'Renowned for its structural rigidity and deep, marbled grain.' },
  { name: 'Reclaimed Teak', latin: 'Tectona Grandis', tone: '#B87333', desc: 'Salvaged from colonial-era structures, offering unparalleled stability.' },
  { name: 'Heartwood Sheesham', latin: 'Dalbergia', tone: '#4A3728', desc: 'The densest part of the timber, reserved for primary weight-bearing joints.' }
];

const WoodLexicon = () => {
  return (
    <div className="bg-[#F2F0ED] min-h-screen pt-32 pb-20 px-12">
      {/* Lexicon Header */}
      <div className="max-w-7xl mx-auto mb-24">
        <h2 className="text-[#0D0D0D] font-serif italic text-6xl tracking-tighter">The Wood Lexicon</h2>
        <p className="text-zinc-500 text-[11px] tracking-[0.4em] uppercase mt-6">A Study of Materiality & Provenance</p>
      </div>

      {/* Material Cards - Horizontal Layout */}
      <div className="flex gap-12 overflow-x-auto pb-20 no-scrollbar">
        {materials.map((wood, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="min-w-[400px] bg-white p-12 shadow-sm border border-zinc-200"
          >
            <div 
              className="w-full h-64 mb-8 grayscale hover:grayscale-0 transition-all duration-700"
              style={{ backgroundColor: wood.tone }}
            />
            <span className="font-mono text-[10px] text-zinc-400 uppercase italic">{wood.latin}</span>
            <h3 className="text-3xl font-serif mt-2 mb-4 text-[#0D0D0D]">{wood.name}</h3>
            <p className="text-zinc-600 text-sm leading-relaxed mb-8">{wood.desc}</p>
            <div className="h-[1px] w-full bg-zinc-100" />
            <div className="mt-6 flex justify-between items-center">
              <span className="text-[9px] tracking-widest text-zinc-400 uppercase">Density: 800+ kg/m³</span>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: wood.tone }} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* The Commission Gateway */}
      <section className="mt-40 max-w-4xl mx-auto text-center border-t border-zinc-200 pt-32">
        <h2 className="text-4xl font-serif italic text-[#0D0D0D]">Begin a Commission</h2>
        <p className="text-zinc-500 text-sm mt-6 mb-12 max-w-md mx-auto leading-relaxed">
          Each ĀRKAË piece is built to order. Due to the seasoning requirements of our timber, 
          we accept a limited number of private commissions annually.
        </p>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="border-b border-zinc-300 py-4">
            <label className="block text-[9px] uppercase tracking-widest text-zinc-400 mb-2">Individual/Practice</label>
            <input type="text" className="w-full bg-transparent outline-none text-lg font-serif italic" placeholder="Name" />
          </div>
          <div className="border-b border-zinc-300 py-4">
            <label className="block text-[9px] uppercase tracking-widest text-zinc-400 mb-2">Contact</label>
            <input type="email" className="w-full bg-transparent outline-none text-lg font-serif italic" placeholder="Email" />
          </div>
          <div className="md:col-span-2 border-b border-zinc-300 py-4">
            <label className="block text-[9px] uppercase tracking-widest text-zinc-400 mb-2">The Inquiry</label>
            <textarea className="w-full bg-transparent outline-none text-lg font-serif italic h-32" placeholder="Specify piece or bespoke requirement..." />
          </div>
          <button className="md:col-span-2 mt-8 bg-[#0D0D0D] text-white text-[11px] tracking-[0.4em] py-6 hover:bg-[#B87333] transition-colors uppercase">
            Submit for Review
          </button>
        </form>
      </section>

      {/* Final Footer */}
      <footer className="mt-60 flex justify-between items-center border-t border-zinc-200 pt-12">
        <p className="text-[10px] tracking-widest text-zinc-400 uppercase">© 2026 ĀRKAË — A Private Standard</p>
        <div className="flex gap-8 text-[10px] tracking-widest text-zinc-400 uppercase">
          <a href="#" className="hover:text-black">Instagram</a>
          <a href="#" className="hover:text-black">Archive</a>
        </div>
      </footer>
    </div>
  );
};

export default WoodLexicon;
