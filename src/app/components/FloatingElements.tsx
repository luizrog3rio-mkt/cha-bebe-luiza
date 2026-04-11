"use client";

export default function FloatingElements() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      <div className="absolute top-[8%] left-[5%] text-2xl animate-float opacity-10">
        🎀
      </div>
      <div className="absolute top-[25%] right-[7%] text-xl animate-float delay-200 opacity-10">
        💕
      </div>
      <div className="absolute top-[55%] right-[5%] text-2xl animate-float delay-100 opacity-10">
        🧸
      </div>
      <div className="absolute top-[40%] left-[3%] text-lg animate-float delay-300 opacity-[0.08]">
        💖
      </div>
    </div>
  );
}
