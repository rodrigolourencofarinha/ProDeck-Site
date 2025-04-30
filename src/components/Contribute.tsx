import React from 'react';

const Contribute: React.FC = () => {
  return (
    <section id="contribute" className="container py-8 md:py-12 lg:py-24 bg-slate-50 dark:bg-transparent">
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        {/* Contribution Info */}
        <div>
          <h3 className="font-heading text-2xl mb-4">Contribute</h3>
          <p className="text-muted-foreground mb-4">
            ProDeck is open-source! You're welcome to submit issues, report bugs, or suggest features via the GitHub repository.
          </p>
          <a 
            href="https://github.com/rodrigolourencofarinha/ProDeck/issues" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
          >
            Submit an Issue
          </a>
        </div>

        {/* Development Info */}
        <div>
          <h3 className="font-heading text-2xl mb-4">Development</h3>
          <p className="text-muted-foreground mb-2">
            Interested in developing ProDeck or customizing it?
          </p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            <li>Fork the <a href="https://github.com/rodrigolourencofarinha/ProDeck" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">repository</a> on GitHub.</li>
            <li>Edit the VBA code using the VBE editor in PowerPoint (Developer tab).</li>
            <li>Use the <a href="https://github.com/fernandreu/office-ribbonx-editor" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">Office RibbonX Editor</a> to modify the ribbon.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contribute;

