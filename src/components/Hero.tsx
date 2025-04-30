import React from 'react';
import prodeck_toolbar from "@/assets/prodeck_toolbar.png";
// import { Button } from "@/components/ui/button"; // Assuming shadcn/ui is installed via template

const Hero: React.FC = () => {
  return (
    <section id="hero" className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        {/* Optional: Add a subtle badge/pill here like "Free & Open Source" */}
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          ProDeck: Supercharge Your PowerPoint Workflow
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          A free, open-source PowerPoint add-in with essential tools to help consultants and professionals create stunning presentations faster.
        </p>
        <div className="space-x-4">
          <a href="#download" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
            Download Now
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/rodrigolourencofarinha/ProDeck"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
          >
            GitHub
          </a>
        </div>
      </div>
      {/* Consider adding the toolbar image here, perhaps with some subtle animation or framing */}
      <div className="container max-w-[64rem] mt-8">
         <img 
            src={prodeck_toolbar} // Assuming image will be placed in public/assets
            alt="ProDeck Toolbar Screenshot" 
            className="rounded-lg border bg-muted p-2 shadow-lg dark:bg-zinc-800 dark:border-zinc-700"
         />
      </div>
    </section>
  );
};

export default Hero;

