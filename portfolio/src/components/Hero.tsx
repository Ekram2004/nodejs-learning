import React from 'react';
import { Terminal, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-16 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col gap-6">
        
        {/* Terminal Badge */}
        <div className="inline-flex items-center self-start gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 font-mono text-xs">
          <Terminal size={14} />
          <span>system.init("software_engineer")</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          Building <span className="text-emerald-500">scalable</span> systems <br /> 
          from the server down.
        </h1>

        {/* Sub-headline */}
        <p className="max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed">
          I'm a 4th-year Software Engineering student focused on 
          <span className="text-white"> Node.js backend architecture</span>. 
          I specialize in building APIs that don't just work, but scale.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-4">
          <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-black font-bold py-3 px-6 rounded-md transition-all">
            View My Projects <ChevronRight size={18} />
          </button>
          
          <button className="flex items-center gap-2 border border-white/10 hover:border-white/20 bg-white/5 py-3 px-6 rounded-md transition-all font-mono text-sm">
            Download_Resume.pdf
          </button>
        </div>
      </div>
    </section>
  );
}