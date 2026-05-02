export default function Navbar() {
  return (
    // 1. Ubah sticky menjadi fixed, tambah left-1/2 dan -translate-x-1/2 agar di tengah persis
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[95%] bg-white/80 backdrop-blur-md rounded-full px-8 py-4 shadow-lg flex justify-between items-center border-4 border-white transition-all duration-300">
      
      {/* 2. Logo dengan hiasan bintang yang bisa berputar */}
      <div className="font-extrabold text-xl text-[#FFB7B2] tracking-wider flex items-center gap-2 cursor-pointer group">
        <span className="group-hover:rotate-180 transition-transform duration-500 inline-block text-2xl"></span>
        Fodly.<span className="text-[#E2F0CB]">Scoun</span>
      </div>

      {/* 3. Menu Navigasi yang lebih rame dengan emoji & hover effect */}
      <div className="hidden md:flex gap-2 font-bold text-sm text-gray-500">
        <a href="#home" className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#FFF5F5] hover:text-[#FFB7B2] transition-all group">
          <span className="group-hover:-translate-y-1 transition-transform"></span> Home
        </a>
        <a href="#about" className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#F0F7E6] hover:text-[#8DB850] transition-all group">
          <span className="group-hover:-translate-y-1 transition-transform"></span> Tentang
        </a>
        <a href="#projects" className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#FFF3EC] hover:text-[#E5A57A] transition-all group">
          <span className="group-hover:-translate-y-1 transition-transform"></span> Karya
        </a>
        <a href="#contact" className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#FFF5F5] hover:text-[#FFB7B2] transition-all group">
          <span className="group-hover:-translate-y-1 transition-transform"></span> Kontak
        </a>
      </div>

      {/* 4. Tombol Sapa Aku dengan efek tangan melambai */}
      <button className="bg-[#E2F0CB] text-[#4A4A4A] px-6 py-2 rounded-full font-bold text-sm shadow-[0_4px_0_#C5D5B0] hover:shadow-[0_2px_0_#C5D5B0] hover:translate-y-[2px] transition-all flex items-center gap-2 group">
        Sapa Aku <span className="group-hover:rotate-12 transition-transform origin-bottom-right"></span>
      </button>

    </nav>
  );
}