import React from "react";
import { Apple, Monitor } from "lucide-react";


// Reusable step component
const InstallationStep: React.FC<{
  step: number;
  title: string;
  children: React.ReactNode;
}> = ({ step, title, children }) => (
  <div className="flex flex-col sm:flex-row sm:items-start">
    {/* Step Number & Line */}
    <div className="flex flex-row sm:flex-col items-center sm:items-center mr-4 shrink-0">
      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
        <span className="text-xl font-semibold">{step}</span>
      </div>
      <div className="hidden sm:block w-px flex-1 bg-gray-300 dark:bg-gray-600" />
    </div>

    {/* Text Content */}
    <div className="pt-1 pb-8 break-words">
      <p className="mb-2 text-lg font-bold">{title}</p>
      <div className="text-muted-foreground space-y-2">{children}</div>
    </div>
  </div>
);


const Installation: React.FC = () => {
  return (
    <section
      id="installation"
      className="bg-white py-8 md:py-12 lg:py-24"
    >
      {/* Centered wrapper */}
      <div className="container mx-auto px-4 max-w-4xl space-y-12">
        {/* Section header */}
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Installation
          </h2>
          <p className="max-w-prose leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Follow these steps to install ProDeck on Windows or Mac.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Windows Installation */}
          <div>
            <h3 className="font-heading text-2xl mb-6 text-center md:text-left">
              <Monitor className="w-5 h-5" />
              Windows
            </h3>
            <InstallationStep step={1} title="Download">
              Download the latest <code>.ppam</code> file from the{" "}
              <a
                href="https://github.com/rodrigolourencofarinha/ProDeck/releases"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                releases page
              </a>
              .
            </InstallationStep>
            <InstallationStep step={2} title="Place File">
              Move the <code>.ppam</code> file to:
              <br />
              <code>
                C:\Users\[Your Username]\AppData\Roaming\Microsoft\AddIns
              </code>
            </InstallationStep>
            <InstallationStep step={3} title="Enable Add-in">
              Open PowerPoint: File &gt; Options &gt; Add-ins.
              <br />
              Manage: “PowerPoint Add-ins”, click “Go”.
              <br />
              Click “Add New”, select the <code>.ppam</code> file, click “OK”.
            </InstallationStep>
            {/* Done indicator */}
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="flex items-center justify-center w-10 h-10 border rounded-full border-green-500 bg-green-50 dark:bg-green-900">
                  <span className="text-xl font-semibold text-green-600 dark:text-green-400">
                    ✓
                  </span>
                </div>
              </div>
              <div className="pt-1">
                <p className="text-lg font-bold">Done!</p>
                <p className="text-muted-foreground">
                  The ProDeck tab should appear in your ribbon.
                </p>
              </div>
            </div>
          </div>

          {/* Mac Installation */}
          <div>
            <h3 className="font-heading text-2xl mb-6 text-center md:text-left">
              <Apple className="w-5 h-5" />
              Mac
            </h3>
            <InstallationStep step={1} title="Download">
              Download the <code>.ppam</code> file from the{" "}
              <a
                href="https://github.com/rodrigolourencofarinha/ProDeck/releases"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                releases page
              </a>{" "}
              to a known folder.
            </InstallationStep>
            <InstallationStep step={2} title="Add Add-in">
              Open PowerPoint: Tools &gt; Add-ins.
              <br />
              Click the “+” button, browse to and select the <code>.ppam</code> file,
              click “Open”.
            </InstallationStep>
            <InstallationStep step={3} title="Enable Macros">
              Ensure macros are enabled in PowerPoint preferences for full functionality.
            </InstallationStep>
            {/* Done indicator */}
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="flex items-center justify-center w-10 h-10 border rounded-full border-green-500 bg-green-50 dark:bg-green-900">
                  <span className="text-xl font-semibold text-green-600 dark:text-green-400">
                    ✓
                  </span>
                </div>
              </div>
              <div className="pt-1">
                <p className="text-lg font-bold">Done!</p>
                <p className="text-muted-foreground">
                  The ProDeck tab should appear in your ribbon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;
