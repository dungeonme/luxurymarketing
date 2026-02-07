import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  { id: '01', name: 'Vaya Dining', wood: 'Indian Rosewood', type: 'Table', img: '/vaya-table.jpg' },
  { id: '02', name: 'Sthambha Chair', wood: 'Reclaimed Teak', type: 'Seating', img: '/sthambha-chair.jpg' },
  { id: '03', name: 'Lekha Console', wood: 'Sheesham', type: 'Storage', img: '/lekha-console.jpg' },
  // Add more items...
];

const ProductFolio = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F2F0ED] px-8 pt-32 pb-20">
      {/* Page Header */}
      <header className="max-w-7xl mx-auto mb-20 flex justify-between items-end">
        <div>
          <h2 className="text-[10px] tracking-[0.5em] text-[#B87333] uppercase mb-4">Collection</h2>
          <h1 className="text-5xl font-serif italic font-light tracking-tight">The Folio</h1>
        </div>
        <button 
          onClick={() => setFilterOpen(true)}
          className="text-[11px] tracking-widest border border-zinc-800 px-8 py-3 hover:bg-white hover:text-black transition-all"
        >
          FILTER BY MATERIAL
        </button>
      </header>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {products.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-none"
          >
            {/* Image Container with Custom Cursor behavior */}
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 mb-6">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out" 
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Product Meta */}
            <div className="flex flex-col space-y-1">
              <span className="text-[10px] text-zinc-500 font-mono tracking-tighter italic">ID: {item.id} — ARCHIVE</span>
              <h3 className="text-xl font-serif font-light tracking-wide">{item.name}</h3>
              <p className="text-[11px] text-[#B87333] tracking-[0.2em] uppercase">{item.wood} / Hand-Jointed</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Slide-out Filter Panel (The Card Catalogue) */}
      <AnimatePresence>
        {filterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setFilterOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-[#1A1A1A] z-50 p-12 border-l border-zinc-800"
            >
              <button onClick={() => setFilterOpen(false)} className="text-[10px] tracking-widest text-zinc-500 mb-20 uppercase">Close ✕</button>
              
              <div className="space-y-12">
                <div>
                  <h4 className="text-[11px] text-[#B87333] tracking-[0.3em] uppercase mb-6">Material Provenance</h4>
                  <ul className="space-y-4 text-2xl font-serif italic">
                    <li className="hover:text-[#B87333] cursor-pointer">Indian Rosewood</li>
                    <li className="hover:text-[#B87333] cursor-pointer">Teak (Reclaimed)</li>
                    <li className="hover:text-[#B87333] cursor-pointer">Sheesham (Heartwood)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[11px] text-[#B87333] tracking-[0.3em] uppercase mb-6">Function</h4>
                  <ul className="space-y-4 text-2xl font-serif italic">
                    <li className="hover:text-[#B87333] cursor-pointer">Dining</li>
                    <li className="hover:text-[#B87333] cursor-pointer">Seating</li>
                    <li className="hover:text-[#B87333] cursor-pointer">Structural Art</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductFolio;
