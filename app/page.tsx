 "use client";
import { About } from "@/pages/About";
import { BentoGridThirdDemo } from "@/pages/BentoGrid";
import { FloatingDockDemo } from "@/pages/FloatingDesk";
 
import { Hero } from "@/pages/Hero";
import { TimelineDemo } from "@/pages/Timeline";
export default function Home() {
  return (
    <div>
      <div className="mb-10">
        <Hero />
      </div>
      <div className="mb-10">
        <About />
      </div>
      <div className="mb-40"> 
        <FloatingDockDemo />
      </div>

      {/* Spacer div to add a large vertical gap */}
      <div className="h-72"></div>

      <div className="mb-40"> 
        <BentoGridThirdDemo />
      </div>

      <div className="mb-60"> 
        <TimelineDemo />
      </div>
  
    </div>
  );
}
