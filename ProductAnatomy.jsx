import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProductAnatomy = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform values for the "Exploded View" effect
  const partOneY = useTransform(scrollYProgress, [0, 0.4], [0, -150]);
  const partTwoY = useTransform(scrollYProgress, [0, 0.4], [0, 150]);
  const opacityText = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <div className="bg-[#0D0D0D] text-[#F2F0ED] min-h-[300vh]">
      {/* 1. Technical Header */}
      <section className="h-screen flex flex-col justify-center px-12 relative overflow-hidden">
        <div className="z-10 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-[#B87333] text-[10px] tracking-[0.5em] uppercase"
          >
            Series 01 / Seating
          </motion.span>
          <h1 className="text-7xl font-serif italic mt-4 tracking-tighter">The Sthambha Chair</h1>
          <p className="mt-8 text-zinc-500 max-w-md leading-relaxed text-sm">
            An exploration of verticality and tension. Constructed from 100% Indian Rosewood, 
            utilizing interlocking joinery that eliminates the need for modern adhesives or fasteners.
          </p>
        </div>

        {/* 2. Interactive Exploded View Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[500px] h-[600px]">
            {/* Top Component */}
            <motion.img 
              style={{ y: partOneY }}
              src="/chair-top-anatomy.png" 
              className="absolute inset-0 w-full object-contain z-20 grayscale"
              alt="Upper Structure"
            />
            {/* Bottom Component */}
            <motion.img 
              style={{ y: partTwoY }}
              src="/chair-bottom-anatomy.png" 
              className="absolute inset-0 w-full object-contain z-10 grayscale opacity-60"
              alt="Foundation Structure"
            />
            
            {/* Structural Annotation Overlay */}
            <motion.div 
              style={{ opacity: opacityText }}
              className="absolute top-1/2 left-full ml-12 border-l border-zinc-800 pl-8 w-64"
            >
              <h4 className="text-[#B87333] text-[10px] tracking-widest uppercase mb-2">Internal Joinery</h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                Through-Mortise and Tenon. Hand-milled to 0.1mm tolerance to account for seasonal wood expansion.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. The Artisan's Mark (The "Signature" Section) */}
      <section className="h-screen flex items-center justify-center bg-[#111111] px-12">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="aspect-square bg-zinc-900 overflow-hidden shadow-2xl">
             <img src="/artisan-hands.jpg" className="w-full h-full object-cover opacity-50 contrast-125" alt="Craftsmanship" />
          </div>
          <div className="space-y-8">
            <h2 className="text-[10px] tracking-[0.5em] text-zinc-500 uppercase">The Artisan's Mark</h2>
            <p className="text-3xl font-serif italic leading-snug">
              "To work with Rosewood is to negotiate with time. You do not force the grain; you listen to its structural intent."
            </p>
            <div className="pt-8 border-t border-zinc-800">
              <p className="text-white text-lg tracking-wide">Master Artisan Rajesh Kumar</p>
              <p className="text-[#B87333] text-[10px] uppercase tracking-widest mt-1">Lead Joiner, Hoshiarpur Workshop</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Provenance & Care Fixed Footer */}
      <footer className="sticky bottom-0 w-full bg-[#0D0D0D]/90 backdrop-blur-md border-t border-zinc-900 py-8 px-12 flex justify-between items-center">
        <div className="flex gap-12 text-[9px] tracking-[0.2em] text-zinc-500 uppercase">
          <div><span className="text-zinc-300">Origin:</span> Saharanpur Forest</div>
          <div><span className="text-zinc-300">Density:</span> 850 kg/m³</div>
          <div><span className="text-zinc-300">Finish:</span> Hand-Rubbed Linseed Oil</div>
        </div>
        <button className="text-white text-[11px] tracking-[0.3em] uppercase border border-white px-8 py-3 hover:bg-white hover:text-black transition-all">
          Request Commission
        </button>
      </footer>
    </div>
  );
};

export default ProductAnatomy;
