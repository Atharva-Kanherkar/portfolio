 "use client";

import { About } from "@/pages/About";
import { FloatingDockDemo } from "@/pages/FloatingDesk";
import { Hero } from "@/pages/Hero";
import { TimelineDemo } from "@/pages/Timeline";

export default function Home() {
  return (
    <div>
      {/* Wrapping each component in a div with margin bottom for spacing */}
      <div className="mb-12">
        <Hero />
      </div>
      <div className="mb-12">
        <About />
      </div>
      <div className="mb-12">
        <FloatingDockDemo />
      </div>
      <div className="mb-12">
        <TimelineDemo />
      </div>
    </div>
  );
}
