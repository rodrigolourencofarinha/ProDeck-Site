import React from 'react';
import prodeck_toolbar from "@/assets/prodeck_toolbar.png";
// import { Button } from "@/components/ui/button"; // Assuming shadcn/ui is installed via template

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-20 pb-10 bg-white">>
      <div className="container mx-auto px-4 max-w-2xl flex flex-col items-center gap-6 text-center">
        {/* Optional: Add a subtle badge/pill here like "Free & Open Source" */}
        <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
          ProDeck: Supercharge Your PowerPoint Workflow
        </h1>
        <p className="max-w-prose leading-relaxed text-muted-foreground sm:text-lg">
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
      <div className="container mx-auto px-4 max-w-2xl mt-8">
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

