"use client";
import { motion, Variants } from "framer-motion";
import { FaLaptopCode, FaLinux, FaGraduationCap, FaNetworkWired } from "react-icons/fa";

export default function About() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.section 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.1 }} 
      variants={fadeInUp} 
      id="about" 
      className="w-full px-6 md:px-16 lg:px-24 mb-32"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#FFB7B2]">Lebih Dekat Denganku</h2>

      {/* Grid Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Kotak 1: My Stack (Lebar 2 Kolom) */}
        <div className="lg:col-span-2 bg-white/80 backdrop-blur-md rounded-[3rem] p-10 md:p-12 shadow-xl border-8 border-white flex flex-col md:flex-row gap-10 items-center hover:-translate-y-2 transition-transform duration-300">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <FaLaptopCode className="text-4xl text-[#FFB7B2]" />
              <h3 className="text-3xl font-bold text-[#FFB7B2]">My Stack</h3>
            </div>
            <p className="text-gray-500 mb-8 text-lg leading-relaxed">
              Dari membangun antarmuka web yang interaktif hingga merancang otomatisasi infrastruktur server di balik layar.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#FFF5F5] rounded-xl font-bold text-sm border-2 border-[#FFD1D1]">Next.js</span>
              <span className="px-4 py-2 bg-[#FFF5F5] rounded-xl font-bold text-sm border-2 border-[#FFD1D1]">TypeScript</span>
              <span className="px-4 py-2 bg-[#FFF5F5] rounded-xl font-bold text-sm border-2 border-[#FFD1D1]">Node.js</span>
              <span className="px-4 py-2 bg-[#FFF5F5] rounded-xl font-bold text-sm border-2 border-[#FFD1D1]">Docker</span>
              <span className="px-4 py-2 bg-[#FFF5F5] rounded-xl font-bold text-sm border-2 border-[#FFD1D1]">Kubernetes</span>
              <span className="px-4 py-2 bg-[#FFF5F5] rounded-xl font-bold text-sm border-2 border-[#FFD1D1]">Terraform</span>
            </div>
          </div>
        </div>

        {/* Kotak 2: Daily Driver (Lebar 1 Kolom) */}
        <div className="bg-[#E2F0CB] rounded-[3rem] p-10 shadow-xl border-8 border-white flex flex-col justify-center hover:-translate-y-2 transition-transform duration-300 text-[#4A4A4A]">
          <FaLinux className="text-5xl mb-6 text-[#8DB850]" />
          <h3 className="text-2xl font-bold mb-4">Daily Driver</h3>
          <p className="text-[#6C8D3D] font-medium leading-relaxed">
            Menulis kode dan mengelola server menggunakan lingkungan Arch Linux dengan kustomisasi KDE Plasma untuk produktivitas maksimal.
          </p>
        </div>

        {/* Kotak 3: Perjalanan & Edukasi (Lebar 1 Kolom) */}
        <div className="bg-[#FFD1D1] rounded-[3rem] p-10 shadow-xl border-8 border-white flex flex-col justify-center hover:-translate-y-2 transition-transform duration-300">
          <FaGraduationCap className="text-5xl mb-6 text-[#D67B7B]" />
          <h3 className="text-2xl font-bold mb-4 text-[#4A4A4A]">Perjalanan</h3>
          <p className="text-[#A55F5F] font-medium leading-relaxed">
            Mahasiswa Teknik Informatika di Politeknik Negeri Jember. Memiliki rekam jejak dalam pemeliharaan *hardware*, instalasi *software*, hingga perbaikan jaringan.
          </p>
        </div>

        {/* Kotak 4: Fokus Saat Ini (Lebar 2 Kolom) */}
        <div className="lg:col-span-2 bg-[#FFDAC1] rounded-[3rem] p-10 md:p-12 shadow-xl border-8 border-white flex flex-col md:flex-row gap-8 items-center hover:-translate-y-2 transition-transform duration-300">
          <div className="w-24 h-24 bg-white/50 rounded-full flex items-center justify-center shrink-0">
            <FaNetworkWired className="text-4xl text-[#D98E5B]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3 text-[#4A4A4A]">Fokus Saat Ini</h3>
            <p className="text-[#B36F40] font-medium text-lg leading-relaxed">
              Selain mengembangkan aplikasi *fullstack*, saat ini saya sedang mendalami riset mendalam mengenai perbandingan performa dan keamanan antara arsitektur PHP dan Node.js untuk keperluan skripsi.
            </p>
          </div>
        </div>

      </div>
    </motion.section>
  );
}