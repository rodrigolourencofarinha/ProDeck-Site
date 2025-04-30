// import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Installation from './components/Installation';
import Download from './components/Download';
import Contribute from './components/Contribute';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        {/* Optional: Add a "Why ProDeck?" section here if desired */}
        <Installation />
        <Download />
        <Contribute />
      </main>
      <Footer />
    </div>
  );
}

export default App;

