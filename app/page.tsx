import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import Skills from '@/components/main/Skills';
import Hero from '@/components/main/hero'; // Capitalize component name

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className="flex flex-col gap-20">
        <Hero /> {/* Capitalized component name */}
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}

