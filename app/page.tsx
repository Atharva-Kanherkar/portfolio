 "use client";

import { About } from "@/pages/About";
import { FloatingDockDemo } from "@/pages/FloatingDesk";
import { Hero } from "@/pages/Hero";
import { TimelineDemo } from "@/pages/Timeline";
export default function Home() {
  return (
    <div>
      {/* Wrapping each component in a div with margin bottom for spacing */}
      <div className="mb-10">
        <Hero />
      </div>
      <div className="mb-10">
        <About />
      </div>
      <div className="mb-40"> {/* Increased the bottom margin to push FloatingDockDemo down */}
        <FloatingDockDemo />
      </div>
      <div className="mb-40"> {/* Increased the bottom margin to push TimelineDemo down */}
        <TimelineDemo />
      </div>
    </div>
  );
}
