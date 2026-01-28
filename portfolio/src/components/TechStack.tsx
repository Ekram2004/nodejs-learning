import React from "react";
import { Server, Database, Cloud, Code2 } from "lucide-react";

export default function TechStack() {
  const stacks = [
    {
      title: "Backend Runtime",
      icon: <Server className="text-emerald-500" size={24} />,
      tools: ["Node.js", "Express", "NestJS", "TypeScript"],
      description:
        "Building event-driven, non-blocking APIs and microservices.",
    },
    {
      title: "Data Persistence",
      icon: <Database className="text-emerald-500" size={24} />,
      tools: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM"],
      description: "Database design, indexing, and caching strategies.",
    },
    {
      title: "Infrastructure",
      icon: <Cloud className="text-emerald-500" size={24} />,
      tools: ["Docker", "AWS (EC2/S3)", "GitHub Actions", "Linux"],
      description: "Containerization and CI/CD pipeline automation.",
    },
  ];

  return (
    <section className="px-6 max-w-5xl mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stacks.map((stack, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
          >
            <div className="mb-4 p-3 rounded-lg bg-emerald-500/10 w-fit group-hover:scale-110 transition-transform">
              {stack.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{stack.title}</h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              {stack.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-1 text-xs font-mono bg-white/5 text-gray-400 rounded border border-white/10"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
