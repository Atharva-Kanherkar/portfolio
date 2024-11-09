 "use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
 
export function Hero() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Hi, I am Atharva!
        </h1>

        <TextGenerateEffect
          words="Open-source enthusiast, cloud explorer, and a fullstack developer making cool tech to help cool people."
          className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10"
          filter={true}
          duration={0.3}
        />
      </div>
      
  
    

      <BackgroundBeams   />

    </div>
  );
}
export default  Hero;