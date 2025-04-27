import React from "react";

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-white">
      <div className="flex flex-col items-center">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 w-full h-full bg-[#fbc710] opacity-60 rounded-full animate-bounce animation-delay-1000" />
        </div>
      </div>
    </div>
  );
}
