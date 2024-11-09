"use client";

import UptimeMonitor from "@/components/blocks/cards-demo-3"
import FourthProject from "@/components/blocks/FourthProject"
import SecondProject from "@/components/blocks/secondProject"
import ThirdProject from "@/components/blocks/ThirdProject"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

 

 
 
 export const Projects = () => {
    const words = [
        {
          text: "Some",
        },
        {
          text: "Of",
        },
        {
            text: "The",
          },
        {
          text: "Projects",
        },
        {
          text: "I",
        },
        {
          text: "Built.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];
    
   return (
      <div>
             <div className="px-8 py-12">
       <div>
       <TypewriterEffect words={words} className="text-2xl font-bold text-center mb-8" />
       </div>
      <div className="flex justify-center gap-6">
        <UptimeMonitor />
        <SecondProject/>
        <ThirdProject/>
        <FourthProject/>

      </div>
    </div>


      </div>
   )
 }
 

 export default  Projects;