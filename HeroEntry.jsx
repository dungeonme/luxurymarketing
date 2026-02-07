import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroEntry = () => {
  const videoRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    // Reveal logo, then fade video in, then slide text up
    tl.fromTo(logoRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" })
      .to(videoRef.current, { opacity: 0.4, duration: 2 }, "-=0.5")
      .fromTo(textRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 1 }, "-=1");
  }, []);

  return (
    <section className="relative h-screen w-full bg-[#0D0D0D] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Cinematic Video */}
      <video 
        ref={videoRef}
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-0 grayscale transition-all duration-[3000ms]"
      >
        <source src="/arka-hero-craft.mp4" type="video/mp4" />
      </video>

      {/* Brand Monolith */}
      <div className="z-10 flex flex-col items-center">
        <div ref={logoRef} className="mb-8">
           {/* Replace with your SVG Logo */}
           <h1 className="text-[#F2F0ED] text-6xl tracking-[0.2em] font-light uppercase">ĀRKAË</h1>
        </div>
        
        <div ref={textRef} className="text-center">
          <p className="text-[#B87333] font-serif italic text-xl tracking-wide mb-2">Structure, not ornament.</p>
          <div className="w-[1px] h-12 bg-zinc-700 mx-auto mt-6 animate-pulse" />
        </div>
      </div>

      {/* Side Navigation Hint */}
      <div className="absolute bottom-12 left-12">
        <p className="text-[10px] text-zinc-500 uppercase tracking-[0.5em] rotate-90 origin-left">Scroll to Explore</p>
      </div>

      {/* Subtle Navigation Overlay */}
      <nav className="absolute top-10 w-full px-16 flex justify-between items-center z-20">
        <span className="text-white text-[10px] tracking-widest">EST. 2024</span>
        <div className="flex gap-8">
          <button className="text-white text-[10px] tracking-widest hover:text-[#B87333] transition-colors">THE FOLIO</button>
          <button className="text-white text-[10px] tracking-widest hover:text-[#B87333] transition-colors">THE SANCTUARY</button>
        </div>
      </nav>
    </section>
  );
};

export default HeroEntry;
