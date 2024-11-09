import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import LFXMail from '../assets/LFX_mail.png';

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
             Got into the Linux Foundation's Open Source Mentorship Program!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
                 src="/LFX_mail.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
 {/* <p className="text-white text-lg leading-relaxed space-y-2  font-sans">
  <span className="block">• Selected for the highly competitive LFX Mentorship Program, with an acceptance rate of only 0.5%.</span>
  <span className="block">• Enhanced the front-end using React/Node.js and strengthened the secure back-end with C/metal C.</span>
  <span className="block">• Also worked on improving the server setup and documentation.</span>
</p> */}



          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
            Became a Maintainer at The Palisadoes Foundation, A leading open source organization!
          </p>
      
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/palisadoes.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
    {/* <p className="text-white text-lg leading-relaxed space-y-4">
  <div>• Developed 6,500+ lines of code across 8 PRs for Talawa using TypeScript, GraphQL, NodeJS, and React.</div>
  <div>• Added Event Agendas feature with full CRUD functionality and 100% test coverage using vitest.</div>
  <div>• Collaborated with 20+ team members, participated in meetings, and reviewed PRs.</div>
</p> */}

          </div>
         

        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
      
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
           Got into Competitive Programming!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/algorithm.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
       {/* <p className="text-white text-lg leading-relaxed space-y-4">
  <div>• Completed the CSES problem set, covering a wide range of algorithms and data structures.</div>
  <div>• Gained expertise in various data structures and algorithms.</div>
  <div>• Explored and implemented famous algorithms to improve problem-solving skills.</div>
</p> */}

          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
