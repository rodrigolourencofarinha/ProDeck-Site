import React from 'react';
import {
  PlusCircle,
  StickyNote,
  Heading1,
  CornerDownLeft,
  ListTree,
  AlignVerticalJustifyStart,
  Palette,
  Droplet,
  Link2,
  MoveHorizontal,
  ArrowLeftRight,
  Layers,
  StretchHorizontal,
  Move,
  Split,
  Eye,
  Globe,
  Eraser,
} from 'lucide-react';

interface FeatureItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description, icon }) => {
  return (
    <div className="flex items-start gap-3 border-l-2 border-border/60 py-2 pl-6">
      <div className="text-muted-foreground mt-1">{icon}</div>
      <div className="flex flex-col space-y-1">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const featuresList: FeatureItemProps[] = [
    { title: "Batch Add or Delete", description: "Add or remove objects across all slides instantly.", icon: <PlusCircle className="w-5 h-5" /> },
    { title: "Insert Sticky Note", description: "Quickly add sticky notes for comments or reminders.", icon: <StickyNote className="w-5 h-5" /> },
    { title: "Insert Headings", description: "Efficiently insert multiple headings at once.", icon: <Heading1 className="w-5 h-5" /> },
    { title: "Footnote Management", description: "Easily insert or reposition footnotes.", icon: <CornerDownLeft className="w-5 h-5" /> },
    { title: "Multilevel Lists", description: "Create structured lists with bullets, ticks, or crosses.", icon: <ListTree className="w-5 h-5" /> },
    { title: "Toggle Text Box Margins", description: "Turn text box margins on or off with a click.", icon: <AlignVerticalJustifyStart className="w-5 h-5" /> },
    { title: "Select by Color", description: "Select all objects sharing the same fill color.", icon: <Palette className="w-5 h-5" /> },
    { title: "Replace Colors", description: "Replace specific colors throughout selected slides.", icon: <Droplet className="w-5 h-5" /> },
    { title: "Connect Shapes", description: "Align and connect shapes precisely.", icon: <Link2 className="w-5 h-5" /> },
    { title: "Adjust Spacing", description: "Increase or decrease spacing between objects uniformly.", icon: <MoveHorizontal className="w-5 h-5" /> },
    { title: "Swap Positions", description: "Swap the positions of two selected objects.", icon: <ArrowLeftRight className="w-5 h-5" /> },
    { title: "Stack Objects", description: "Align and stack objects based on the first selection.", icon: <Layers className="w-5 h-5" /> },
    { title: "Match Size", description: "Resize objects to match the height and/or width of a reference object.", icon: <StretchHorizontal className="w-5 h-5" /> },
    { title: "Rectify Lines", description: "Straighten lines to perfect horizontal or vertical alignment.", icon: <Move className="w-5 h-5" /> },
    { title: "Merge/Split Text", description: "Combine or separate text from multiple shapes into one.", icon: <Split className="w-5 h-5" /> },
    { title: "Hide/Unhide Objects", description: "Easily toggle the visibility of objects on a slide.", icon: <Eye className="w-5 h-5" /> },
    { title: "Change Proofing Language", description: "Set the proofing language for the entire presentation.", icon: <Globe className="w-5 h-5" /> },
    { title: "Clean Deck", description: "Remove line breaks, double spaces, export notes, fix footers, delete animations/comments, and manage metadata.", icon: <Eraser className="w-5 h-5" /> },
  ];

  return (
    <section id="features" className="bg-muted py-8 transition-colors md:py-12 lg:py-24">
      <div className="container mx-auto px-4 max-w-4xl space-y-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
          <p className="max-w-prose leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            ProDeck provides essential tools to streamline your slide creation and editing process.
          </p>
        </div>
        <div className="grid justify-center gap-8 sm:grid-cols-2 md:grid-cols-3">
          {featuresList.map((feature) => (
            <FeatureItem
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
