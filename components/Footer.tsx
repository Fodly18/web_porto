"use client";
import { motion, Variants } from "framer-motion";
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.footer 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      variants={fadeInUp}
      className="w-full pt-10 mt-10"
      id="contact"
    >
      {/* Container utama dengan lengkungan besar di atas */}
      <div className="bg-white/80 backdrop-blur-md rounded-t-[4rem] border-t-8 border-white px-6 md:px-16 lg:px-24 pt-16 pb-8 text-center flex flex-col items-center shadow-[0_-10px_30px_rgba(0,0,0,0.02)]">
        
        {/* Bagian Call to Action (Ajakan Kolaborasi) */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FFB7B2]">Mari Berkolaborasi!</h2>
        <p className="text-gray-500 mb-10 text-lg md:text-xl max-w-2xl leading-relaxed">
          Punya ide aplikasi menarik, butuh bantuan mengatur server Linux-mu, atau sekadar mau ngobrol soal teknologi dan anime? Pintu pesanku selalu terbuka!
        </p>
        
        {/* Tombol Email yang Membal */}
        <a 
          href="mailto:email.kamu@gmail.com" 
          className="inline-block bg-[#E2F0CB] text-[#4A4A4A] font-bold text-xl px-12 py-5 rounded-full shadow-[0_8px_0_#C5D5B0] hover:shadow-[0_4px_0_#C5D5B0] hover:translate-y-1 transition-all border-4 border-white mb-16"
        >
          Kirim Pesan ✉️
        </a>

{/* 2. Tombol Sosial Media (Sekarang pakai logo asli) */}
        <div className="flex gap-6 mb-12">
          
          {/* Tombol GitHub */}
          <a href="https://github.com/Fodly18" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-[#FFF5F5] text-gray-800 rounded-full flex items-center justify-center text-3xl border-4 border-white shadow-sm hover:-translate-y-3 hover:bg-[#FFD1D1] transition-all group">
            <FaGithub className="group-hover:animate-bounce" />
          </a>
          
          {/* Tombol LinkedIn */}
          <a href="https://www.linkedin.com/in/mohammad-seedqi-al-ghifari-5719383b4/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-[#FFF5F5] text-[#0A66C2] rounded-full flex items-center justify-center text-3xl border-4 border-white shadow-sm hover:-translate-y-3 hover:bg-[#E2F0CB] transition-all group">
            <FaLinkedin className="group-hover:animate-bounce" />
          </a>
          
          {/* Tombol Discord/Gaming */}
          <a href="#" className="w-16 h-16 bg-[#FFF5F5] text-[#5865F2] rounded-full flex items-center justify-center text-3xl border-4 border-white shadow-sm hover:-translate-y-3 hover:bg-[#FFDAC1] transition-all group">
            <FaDiscord className="group-hover:animate-bounce" />
          </a>
          
          {/* Tombol Instagram */}
          <a href="https://www.instagram.com/f_odly/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-[#FFF5F5] text-[#E1306C] rounded-full flex items-center justify-center text-3xl border-4 border-white shadow-sm hover:-translate-y-3 hover:bg-[#E2F0CB] transition-all group">
            <FaInstagram className="group-hover:animate-bounce" />
          </a>
          
        </div>

        {/* Garis Pembatas dan Copyright */}
        <div className="w-full max-w-2xl border-t-4 border-[#FFF5F5] pt-8">
          <p className="text-sm md:text-base font-bold text-gray-400">
            © 2026 Fodly.<br/>
            <span className="text-xs font-normal">Powered by Next.js & Tailwind CSS.</span>
          </p>
        </div>

      </div>
    </motion.footer>
  );
}