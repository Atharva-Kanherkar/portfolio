 "use client";
import { About } from "@/pages/About";
import { FloatingDockDemo } from "@/pages/FloatingDesk";
import { Hero } from "@/pages/Hero";

export default function Home() {
  return (
    <div  > {/* Adds padding to the bottom to avoid overlap */}
      <Hero />
      <About />
      <FloatingDockDemo />
    </div>
  );
}
