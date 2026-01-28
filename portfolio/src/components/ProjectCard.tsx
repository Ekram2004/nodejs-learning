import React from "react";
import { Github, ExternalLink, Box, Database, ShieldCheck } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  features,
  githubUrl,
  liveUrl,
}: ProjectProps) {
  return (
    <div className="group relative p-8 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-emerald-500/30 transition-all">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          {/* Tags */}
          <div className="flex gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-widest font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
            {title}
          </h3>

          <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>

          {/* Backend Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-gray-500"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/50" />
                {feature}
              </div>
            ))}
          </div>

          <div className="flex gap-6">
            <a
              href={githubUrl}
              className="flex items-center gap-2 text-sm font-mono text-white hover:text-emerald-500 transition-colors"
            >
              <Github size={18} /> git_clone
            </a>
            {liveUrl && (
              <a
                href={liveUrl}
                className="flex items-center gap-2 text-sm font-mono text-white hover:text-emerald-500 transition-colors"
              >
                <ExternalLink size={18} /> live_demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
