import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact"; // Import here

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}
