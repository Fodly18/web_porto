"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import RunningCharacter from "../components/RunningCharacter";


export default function Home() {
  const { scrollYProgress } = useScroll();

  // Animasi Cahaya (Parallax Lembut)
  const yPink = useTransform(scrollYProgress, [0, 1], ["-10%", "150%"]);
  const yGreen = useTransform(scrollYProgress, [0, 1], ["50%", "-100%"]);
  const rotateSlight = useTransform(scrollYProgress, [0, 1], [0, 90]);

  // ==========================================
  // ANIMASI BARU: Karakter 2D Lari (Kiri ke Kanan)
  // Saat scroll 0 (atas), posisi di -20vw (luar layar kiri)
  // Saat scroll 1 (bawah), posisi di 120vw (luar layar kanan)
  // ==========================================

  return (
    <main className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFF5F5] via-[#FFF0F0] to-[#FFEAE9] text-[#4A4A4A] font-sans z-0">
      
      {/* Container background dikunci (fixed) */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        
        {/* Cahaya Pink */}
        <motion.div 
          style={{ top: yPink, rotate: rotateSlight }}
          className="absolute -left-32 w-[600px] h-[600px] bg-[#FFD1D1] rounded-full mix-blend-multiply filter blur-[100px] opacity-40"
        />

        {/* Cahaya Hijau */}
        <motion.div 
          style={{ top: yGreen, right: "-10%", rotate: rotateSlight }}
          className="absolute w-[500px] h-[700px] bg-[#E2F0CB] rounded-[40%] mix-blend-multiply filter blur-[100px] opacity-40"
        />

{/* ========================================== */}
        {/* ELEMEN KARAKTER LARI (FRAME-BY-FRAME) */}
        {/* ========================================== */}

      </div>

      {/* Pattern Titik-titik Statis */}
      <div className="absolute inset-0 bg-[radial-gradient(#FFB7B2_2px,transparent_2px)] [background-size:40px_40px] opacity-10 pointer-events-none -z-10"></div>

      {/* Komponen-komponen Website-mu */}
      <Navbar />
      <Hero />
      
      <div className="w-full flex justify-center my-32">
        <div className="flex gap-6">
          <div className="w-4 h-4 bg-[#E2F0CB] rounded-full"></div>
          <div className="w-4 h-4 bg-[#FFDAC1] rounded-full"></div>
          <div className="w-4 h-4 bg-[#FFB7B2] rounded-full"></div>
        </div>
      </div>

      <About />
      <Projects />
      <Footer />

    </main>
  );
}