import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// 1. Memanggil font custom dari folder lokal
const kawaiiBubble = localFont({
  src: "./fonts/KinderChildKawaiiBubble-WpnAz.otf",
  variable: "--font-kawaii-bubble", // Memberi nama variabel CSS
  display: "swap", // Agar teks tidak hilang saat loading
});

// Metadata untuk judul websitemu
export const metadata: Metadata = {
  title: "Portofolio Eki",
  description: "Dibuat dengan Next.js dan Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      {/* 2. Memasang font ke seluruh halaman (body) */}
      <body className={`${kawaiiBubble.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}