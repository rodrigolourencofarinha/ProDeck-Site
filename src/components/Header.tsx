import React from "react";
import logo from "@/assets/logo.svg";
import { Github } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-y-4 px-4 py-3 max-w-screen-2xl">
        {/* Left block: Logo + nav */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a className="flex items-center space-x-2 shrink-0" href="/">
            <img src={logo} alt="ProDeck Logo" className="h-10 w-auto" />
            <span className="font-bold text-lg">ProDeck</span>
          </a>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#features">Features</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#installation">Installation</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#download">Download</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contribute">Contribute</a>
          </nav>
        </div>

        {/* Right block: GitHub */}
        <div className="hidden md:flex shrink-0">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/rodrigolourencofarinha/ProDeck"
            className="ml-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
