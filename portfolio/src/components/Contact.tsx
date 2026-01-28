import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 max-w-5xl mx-auto py-24 border-t border-white/5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's build something{" "}
            <span className="text-emerald-500">stable</span>.
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            I am currently looking for Internship opportunities for 2026. If
            you're looking for a developer who cares about clean code, optimized
            queries, and scalable architecture, let's talk.
          </p>

          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-2 text-emerald-500 font-mono hover:underline decoration-2 underline-offset-4"
          >
            <Mail size={18} /> ekramasrar94@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <SocialLink
            href="https://github.com/Ekram2004"
            icon={<Github size={20} />}
            label="GitHub"
            handle="@Ekram2004"
          />
          <SocialLink
            href="https://www.linkedin.com/in/ekram-a-835057294/"
            icon={<Linkedin size={20} />}
            label="LinkedIn"
            handle="in/Ekram"
          />
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-white/5 flex justify-between items-center text-xs font-mono text-gray-600">
        <span>© 2026 NODE_DEV_PORTFOLIO</span>
        <span>STATUS: 200 OK</span>
      </footer>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
  handle,
}: {
  href: string;
  icon: any;
  label: string;
  handle: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all"
    >
      <div className="flex items-center gap-4">
        <div className="text-gray-400 group-hover:text-emerald-500 transition-colors">
          {icon}
        </div>
        <div>
          <p className="text-sm font-bold text-white">{label}</p>
          <p className="text-xs text-gray-500 font-mono">{handle}</p>
        </div>
      </div>
      <ArrowUpRight
        size={18}
        className="text-gray-600 group-hover:text-emerald-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </a>
  );
}
