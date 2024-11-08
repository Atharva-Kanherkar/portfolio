import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Hero } from "@/pages/Hero";
import PageLoader from "next/dist/client/page-loader";

 export default function Home() {
  return (
    <div>
 <Hero/>
      
         <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-[-1]" />
    </div>
 
  
  ); 
}
 