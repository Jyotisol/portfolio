"use client"
import Achivements from "@/components/Achivements";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";



export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-clip flex-col mx-auto sm:px-10 px-5">
      
      <div className="max-w-7lx w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <Skills/>
        <RecentProjects/>
        <Achivements/>
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}

