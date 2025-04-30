import React from "react";

const Download: React.FC = () => {
  return (
    <section id="download" className="bg-white py-8 md:py-12 lg:py-24">
      {/* Centered wrapper identical to other sections */}
      <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center text-center space-y-6">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Get ProDeck Now
        </h2>
        <p className="max-w-prose leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Download the latest version of the ProDeck add-in for PowerPoint. It’s free and open-source.
        </p>
        <a
          href="https://github.com/rodrigolourencofarinha/ProDeck/releases"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md 
                     text-sm font-medium transition-colors focus-visible:outline-none 
                     focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none 
                     disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 
                     h-10 px-8"
        >
          Download Latest Release
        </a>
        <p className="text-xs text-muted-foreground">
          Requires Microsoft PowerPoint for Windows or Mac.
        </p>
      </div>
    </section>
  );
};

export default Download;
