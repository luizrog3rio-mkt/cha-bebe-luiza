"use client";

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating hearts and baby elements */}
      <div className="absolute top-[10%] left-[5%] text-3xl animate-float opacity-20">
        🎀
      </div>
      <div className="absolute top-[20%] right-[8%] text-2xl animate-float delay-200 opacity-20">
        💕
      </div>
      <div className="absolute top-[45%] left-[3%] text-2xl animate-float delay-300 opacity-15">
        🍼
      </div>
      <div className="absolute top-[60%] right-[5%] text-3xl animate-float delay-100 opacity-20">
        🧸
      </div>
      <div className="absolute top-[75%] left-[8%] text-2xl animate-float delay-400 opacity-15">
        👶
      </div>
      <div className="absolute top-[85%] right-[10%] text-2xl animate-float delay-500 opacity-20">
        🎀
      </div>
      <div className="absolute top-[35%] right-[3%] text-xl animate-float delay-100 opacity-15">
        💖
      </div>
    </div>
  );
}
