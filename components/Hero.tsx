"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import RunningCharacter from "./RunningCharacter";

export default function Hero() {
  // 1. Daftar nama file foto
  const photos = [
    "/foto-eki-1.png", 
    "/foto-eki-2.png", 
    "/foto-eki-3.png"
  ];
  
  // 2. State untuk slider
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3. Timer otomatis 3 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [photos.length]);

  // ==========================================
  // RUMUS LARI KARAKTER
  // ==========================================
  const { scrollY } = useScroll();
  const xRun = useTransform(scrollY, [0, 600], ["-20vw", "120vw"]);

  // ==========================================
  // SENSOR DETEKSI SCROLL (IDLE / RUN)
  // ==========================================
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useMotionValueEvent(scrollY, "change", () => {
    // 1. Saat ada pergerakan, set status lari jadi TRUE
    setIsScrolling(true);
    
    // 2. Bersihkan timer lama jika user masih nge-scroll
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    
    // 3. Buat timer baru: Jika selama 150 milidetik tidak ada scroll, set jadi FALSE (Idle)
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 150);
  });

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative w-full px-6 md:px-16 lg:px-24 mt-20 pt-10 pb-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12 overflow-x-hidden md:overflow-visible">
      
      {/* Kolom Kiri: Teks & Tombol */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="flex-1 text-center md:text-left z-10">
        <h1 className="text-6xl md:text-[6rem] lg:text-[7rem] font-extrabold text-[#FFB7B2] drop-shadow-sm mb-6 leading-[1.1]">
          Halo,<br/> Aku Eki!
        </h1>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
          <span className="bg-[#FFDAC1] px-5 py-3 rounded-full text-sm font-bold text-[#4A4A4A] shadow-sm border-2 border-white">
             🚀 Fullstack Web Dev
          </span>
          <span className="bg-[#FFD1D1] px-5 py-3 rounded-full text-sm font-bold text-[#4A4A4A] shadow-sm border-2 border-white">
             🐧 Arch Linux User
          </span>
        </div>
        
        <p className="max-w-2xl mx-auto md:mx-0 text-lg md:text-xl lg:text-2xl text-gray-500 leading-relaxed mb-10 bg-white/50 p-6 rounded-[2rem] border-4 border-white backdrop-blur-sm shadow-sm">
          Mahasiswa Teknik Informatika yang suka meracik kode, membangun infrastruktur server, dan membongkar *hardware*. Mari buat web yang cepat dan menyenangkan!
        </p>

        <button className="bg-[#FFB7B2] text-white font-bold text-xl px-12 py-5 rounded-full shadow-[0_8px_0_#E5A49F] hover:shadow-[0_4px_0_#E5A49F] hover:translate-y-1 transition-all border-4 border-white">
          Lihat Proyekku ↓
        </button>
      </motion.div>

      {/* Kolom Kanan: Bingkai Foto Slider Bergeser */}
      <div className="flex-1 flex justify-center md:justify-end relative mt-10 md:mt-0 w-full">
        {/* Hiasan Blur di belakang */}
        <div className="absolute w-80 h-80 bg-[#FFDAC1] rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
        
        <div className="relative w-72 h-72 lg:w-[450px] lg:h-[450px] bg-[#E2F0CB] rounded-[4rem] border-[12px] border-white shadow-2xl flex items-center justify-center z-10 overflow-hidden">
          
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image 
                src={photos[currentIndex]} 
                alt={`Foto Eki ${currentIndex + 1}`} 
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* ========================================== */}
      {/* JALUR RUMPUT (Diam memanjang sejauh layar) */}
      {/* ========================================== */}
      <div 
        /* Saya ubah menjadi -bottom-16 karena -bottom-17 bukan class standar Tailwind */
        className="absolute -bottom-16 left-0 w-full h-12 z-10"
        style={{ 
          background: "url('/PlatformAsset/rumput4.png') repeat-x top",
          backgroundSize: "auto 100%" 
        }}
      ></div>
      
      {/* ========================================== */}
      {/* KARAKTER LARI & IDLE (Menggunakan Sensor)  */}
      {/* ========================================== */}
      <motion.div 
        style={{ x: xRun }}
        className="absolute -bottom-6 left-0 z-20 pointer-events-none"
      >
        <RunningCharacter isScrolling={isScrolling} />
      </motion.div>

    </section>
  );
}