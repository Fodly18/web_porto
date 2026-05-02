"use client";
import { motion, Variants } from "framer-motion";
import { 
  FaSeedling, 
  FaCashRegister, 
  FaLaptopCode, 
  FaGithub, 
  FaExternalLinkAlt, 
  FaServer, 
  FaShieldAlt 
} from "react-icons/fa";

export default function Projects() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section id="projects" className="w-full px-6 md:px-16 lg:px-24 mb-32 pt-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#FFB7B2]">Karya Unggulan</h2>
        <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto text-lg">
          Kumpulan proyek terbaik yang pernah saya bangun, mulai dari aplikasi web hingga integrasi *hardware* Internet of Things.
        </p>
      </motion.div>
      
      {/* Container Utama Proyek */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col gap-12"
      >
        
        {/* PROYEK 1: SMARTCOY (Layout Kiri Kanan) */}
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-md rounded-[3rem] p-6 lg:p-10 shadow-xl border-8 border-white flex flex-col lg:flex-row gap-10 items-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
          <div className="w-full lg:w-1/3 h-64 lg:h-auto self-stretch bg-[#E2F0CB] rounded-[2rem] flex items-center justify-center relative overflow-hidden">
            {/* Dekorasi Background */}
            <div className="absolute w-40 h-40 bg-[#C5D5B0] rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
            <FaSeedling className="text-8xl text-[#8DB850] z-10 group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="w-full lg:w-2/3 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#F0F7E6] text-[#8DB850] px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">IoT & AI</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-[#4A4A4A]">Smartcoy</h3>
            <p className="text-gray-500 mb-6 text-lg leading-relaxed">
              Sistem cerdas terintegrasi untuk memonitor dan mendeteksi penyakit pada tanaman hidroponik pakcoy. Menggunakan mikrokontroler ESP32 yang dipadukan dengan algoritma Machine Learning (HOG & SVM) untuk menganalisis kondisi visual tanaman secara *real-time*.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-semibold">ESP32</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-semibold">Python</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-semibold">Machine Learning</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-semibold">C++</span>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-[#8DB850] hover:bg-[#7A9F45] text-white px-6 py-3 rounded-full font-bold shadow-[0_4px_0_#658539] hover:shadow-[0_0px_0_#658539] hover:translate-y-1 transition-all">
                <FaGithub /> Source Code
              </button>
            </div>
          </div>
        </motion.div>

        {/* PROYEK 2: BEAUTY POS (Layout Kanan Kiri) */}
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-md rounded-[3rem] p-6 lg:p-10 shadow-xl border-8 border-white flex flex-col lg:flex-row-reverse gap-10 items-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
          <div className="w-full lg:w-1/3 h-64 lg:h-auto self-stretch bg-[#FFDAC1] rounded-[2rem] flex items-center justify-center relative overflow-hidden">
            <div className="absolute w-40 h-40 bg-[#E5A57A] rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
            <FaCashRegister className="text-8xl text-[#D98E5B] z-10 group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="w-full lg:w-2/3 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#FFF3EC] text-[#D98E5B] px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">Desktop App</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-[#4A4A4A]">Beauty Cosmetic POS</h3>
            <p className="text-gray-500 mb-6 text-lg leading-relaxed">
              Aplikasi kasir (*Point of Sales*) dan manajemen inventaris berbasis desktop yang dirancang khusus untuk toko kosmetik. Dilengkapi dengan modul autentikasi dan pelacakan barang yang terintegrasi langsung dengan sensor pemindai RFID.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-semibold">Desktop GUI</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-semibold">RFID Integration</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-semibold">Relational Database</span>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-[#D98E5B] hover:bg-[#C27D4D] text-white px-6 py-3 rounded-full font-bold shadow-[0_4px_0_#9E663F] hover:shadow-[0_0px_0_#9E663F] hover:translate-y-1 transition-all">
                <FaGithub /> Source Code
              </button>
            </div>
          </div>
        </motion.div>

        {/* PROYEK 3: EDULEARN (Layout Kiri Kanan) */}
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-md rounded-[3rem] p-6 lg:p-10 shadow-xl border-8 border-white flex flex-col lg:flex-row gap-10 items-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
          <div className="w-full lg:w-1/3 h-64 lg:h-auto self-stretch bg-[#FFD1D1] rounded-[2rem] flex items-center justify-center relative overflow-hidden">
            <div className="absolute w-40 h-40 bg-[#E59999] rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
            <FaLaptopCode className="text-8xl text-[#D67B7B] z-10 group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="w-full lg:w-2/3 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#FFF5F5] text-[#D67B7B] px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">Fullstack Web</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-[#4A4A4A]">EduLearn</h3>
            <p className="text-gray-500 mb-6 text-lg leading-relaxed">
              Platform *e-learning* interaktif berbasis web yang dikembangkan secara khusus untuk digitalisasi pendidikan di SDN 1 Kalisat. Mengelola arsitektur *database* dan menjembatani tampilan antarmuka yang ramah anak dengan *backend* yang tangguh.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-semibold">Web Development</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-semibold">Database Architecture</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-semibold">UI/UX</span>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-[#D67B7B] hover:bg-[#C26B6B] text-white px-6 py-3 rounded-full font-bold shadow-[0_4px_0_#9E5757] hover:shadow-[0_0px_0_#9E5757] hover:translate-y-1 transition-all">
                <FaExternalLinkAlt /> Live Preview
              </button>
            </div>
          </div>
        </motion.div>

      </motion.div>

      {/* SECTION TAMBAHAN: Lab Riset & Infrastruktur */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp} className="mt-24">
        <h3 className="text-3xl font-bold text-center mb-10 text-[#FFB7B2]">Lab Riset & Eksperimen</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-[3rem] border-4 border-white shadow-md hover:-translate-y-2 transition-transform duration-300">
            <FaShieldAlt className="text-5xl text-[#FFB7B2] mb-6" />
            <h4 className="text-2xl font-bold mb-3 text-[#4A4A4A]">Analisis Keamanan Server</h4>
            <p className="text-gray-500 leading-relaxed">
              Penelitian tugas akhir (Skripsi) yang secara mendalam membandingkan celah keamanan, performa *response time*, dan ketahanan beban antara *framework* berbasis PHP dan Node.js.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-[3rem] border-4 border-white shadow-md hover:-translate-y-2 transition-transform duration-300">
            <FaServer className="text-5xl text-[#E2F0CB] mb-6" />
            <h4 className="text-2xl font-bold mb-3 text-[#4A4A4A]">DevOps & CI/CD</h4>
            <p className="text-gray-500 leading-relaxed">
              Eksperimen aktif dalam membangun ekosistem *deployment* otomatis menggunakan Docker, Kubernetes (Minikube), Terraform, serta peracikan *pipeline* di Jenkins dan GitLab CI.
            </p>
          </div>

        </div>
      </motion.div>

    </section>
  );
}