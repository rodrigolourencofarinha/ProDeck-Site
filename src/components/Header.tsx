import React from "react";
import logo from "@/assets/logo.svg";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-12 max-w-screen-2xl items-center px-4">
        {/* Logo + menu always visible, not just on md+ */}
        <div className="mr-4 flex items-center">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <img src={logo} alt="ProDeck Logo" className="h-10 w-auto mr-2"/>
            <span className="hidden font-bold sm:inline-block">ProDeck</span>
          </a>
          <nav className="flex items-center gap-4 text-sm">
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#features">Features</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#installation">Installation</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#download">Download</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contribute">Contribute</a>
          </nav>
        </div>
        {/* GitHub button stays on the right */}
        <div className="flex flex-1 items-center justify-end">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/rodrigolourencofarinha/ProDeck"
            className="ml-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
