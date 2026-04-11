"use client";

export default function FloatingElements() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Reduced set on mobile, subtle and non-intrusive */}
      <div className="absolute top-[8%] left-[4%] text-2xl sm:text-3xl animate-float opacity-10 sm:opacity-20">
        🎀
      </div>
      <div className="absolute top-[22%] right-[6%] text-xl sm:text-2xl animate-float delay-200 opacity-10 sm:opacity-20">
        💕
      </div>
      <div className="absolute top-[50%] left-[2%] text-xl sm:text-2xl animate-float delay-300 opacity-[0.08] sm:opacity-15 hidden sm:block">
        🍼
      </div>
      <div className="absolute top-[65%] right-[4%] text-2xl sm:text-3xl animate-float delay-100 opacity-10 sm:opacity-20">
        🧸
      </div>
      <div className="absolute top-[80%] left-[6%] text-xl sm:text-2xl animate-float delay-400 opacity-[0.08] sm:opacity-15 hidden sm:block">
        👶
      </div>
      <div className="absolute top-[38%] right-[2%] text-lg sm:text-xl animate-float delay-100 opacity-[0.08] sm:opacity-15">
        💖
      </div>
    </div>
  );
}
