import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
          <span className="font-mono text-sm font-bold tracking-tighter">
            NODE_DEV_V1.0
          </span>
        </div>

        <div className="flex gap-8 text-sm font-mono text-gray-400">
          <a href="#about" className="hover:text-emerald-400 transition-colors">
            ./about
          </a>
          <a
            href="#projects"
            className="hover:text-emerald-400 transition-colors"
          >
            ./projects
          </a>
          <a
            href="#contact"
            className="hover:text-emerald-400 transition-colors"
          >
            ./contact
          </a>
        </div>
      </div>
    </nav>
  );
}
