"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function RunningCharacter({ isScrolling }: { isScrolling: boolean }) {
  const runFrames = [
    "CharacterAnimations/run-frame/Run f1.png",
    "CharacterAnimations/run-frame/Run f2.png",
    "CharacterAnimations/run-frame/Run f3.png",
    "CharacterAnimations/run-frame/Run f4.png"
  ];

  const idleFrames = [
    "CharacterAnimations/idle-frame/idle-1.png",
    "CharacterAnimations/idle-frame/idle-2.png"
  ];

  const activeFrames = isScrolling ? runFrames : idleFrames;
  const [currentTick, setCurrentTick] = useState(0);

  // Efek: Mesin penggerak gambar (sekarang jauh lebih sederhana)
  useEffect(() => {
    const speed = isScrolling ? 100 : 400; 
    
    const timer = setInterval(() => {
      // Kita biarkan angkanya bertambah terus tanpa henti
      setCurrentTick((prev) => prev + 1);
    }, speed); 

    return () => clearInterval(timer);
  }, [isScrolling]);

  // RUMUS SAKTI (Safe Frame): 
  // Memastikan angka yang dipakai tidak pernah melebihi jumlah gambar yang ada.
  // Contoh: Kalau lari (4 gambar), angkanya akan selalu berulang 0,1,2,3,0,1,2,3...
  const safeFrame = currentTick % activeFrames.length;

  return (
    <div className="w-32 h-32 relative filter drop-shadow-lg">
      <Image 
        src={activeFrames[safeFrame]} 
        alt={isScrolling ? "Karakter Lari" : "Karakter Diam"} 
        fill
        className="object-contain"
        priority 
        unoptimized 
      />
    </div>
  );
}