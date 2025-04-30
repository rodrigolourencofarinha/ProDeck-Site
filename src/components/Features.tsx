import React from 'react';

// Define an interface for Feature props
interface FeatureItemProps {
  title: string;
  description: string;
  // icon?: React.ReactNode; // Optional: Add icons later if desired (e.g., using Lucide icons from template)
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col space-y-2 border-l-2 border-slate-100 py-2 pl-6 dark:border-slate-800">
      {/* Optional Icon placeholder */}
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const featuresList: FeatureItemProps[] = [
    { title: "Batch Add or Delete", description: "Add or remove objects across all slides instantly." },
    { title: "Insert Sticky Note", description: "Quickly add sticky notes for comments or reminders." },
    { title: "Insert Headings", description: "Efficiently insert multiple headings at once." },
    { title: "Footnote Management", description: "Easily insert or reposition footnotes." },
    { title: "Multilevel Lists", description: "Create structured lists with bullets, ticks, or crosses." },
    { title: "Toggle Text Box Margins", description: "Turn text box margins on or off with a click." },
    { title: "Select by Color", description: "Select all objects sharing the same fill color." },
    { title: "Replace Colors", description: "Replace specific colors throughout selected slides." },
    { title: "Connect Shapes", description: "Align and connect shapes precisely." },
    { title: "Adjust Spacing", description: "Increase or decrease spacing between objects uniformly." },
    { title: "Swap Positions", description: "Swap the positions of two selected objects." },
    { title: "Stack Objects", description: "Align and stack objects based on the first selection." },
    { title: "Match Size", description: "Resize objects to match the height and/or width of a reference object." },
    { title: "Rectify Lines", description: "Straighten lines to perfect horizontal or vertical alignment." },
    { title: "Merge/Split Text", description: "Combine or separate text from multiple shapes into one." },
    { title: "Hide/Unhide Objects", description: "Easily toggle the visibility of objects on a slide." },
    { title: "Change Proofing Language", description: "Set the proofing language for the entire presentation." },
    { title: "Clean Deck", description: "Remove line breaks, double spaces, export notes, fix footers, delete animations/comments, and manage metadata." },
    // Add other key features if needed, keeping the list focused
  ];

  return (
    <section id="features" className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          ProDeck provides essential tools to streamline your slide creation and editing process.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {featuresList.map((feature) => (
          <FeatureItem key={feature.title} title={feature.title} description={feature.description} />
        ))}
      </div>
    </section>
  );
};

export default Features;

