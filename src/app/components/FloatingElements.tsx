"use client";

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div className="absolute top-[10%] left-[6%] w-2 h-2 rounded-full bg-pink-300/20 animate-float" />
      <div className="absolute top-[30%] right-[8%] w-3 h-3 rounded-full bg-pink-200/25 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-[55%] left-[4%] w-2.5 h-2.5 rounded-full bg-pink-300/15 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[75%] right-[6%] w-2 h-2 rounded-full bg-pink-200/20 animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-[45%] right-[3%] w-1.5 h-1.5 rounded-full bg-rose-300/15 animate-float" style={{ animationDelay: "1.5s" }} />
    </div>
  );
}
