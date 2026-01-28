import ProjectCard from "./ProjectCard";

export default function Projects() {
  const myProjects = [
    {
      title: "Real-time Analytics Engine",
      description:
        "A high-throughput backend service that processes event streams and provides real-time dashboard updates via WebSockets.",
      tags: ["Node.js", "Redis", "Socket.io"],
      features: [
        "Redis Pub/Sub for scaling",
        "JWT-based Authentication",
        "Rate-limiting middleware",
      ],
      githubUrl: "#",
    },
    {
      title: "RESTful E-commerce API",
      description:
        "Robust API built with Clean Architecture principles, featuring automated documentation and comprehensive unit testing.",
      tags: ["TypeScript", "PostgreSQL", "Prisma"],
      features: [
        "Stripe Integration",
        "Role-based Access Control",
        "Automated Swagger Docs",
      ],
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="px-6 max-w-5xl mx-auto py-24">
      <div className="flex flex-col gap-4 mb-12">
        <h2 className="text-3xl font-bold text-white tracking-tight">
          ./Featured_Projects
        </h2>
        <div className="h-1 w-20 bg-emerald-500" />
      </div>

      <div className="flex flex-col gap-10">
        {myProjects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
