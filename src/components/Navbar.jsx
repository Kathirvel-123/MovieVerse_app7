import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <nav className="bg-gray-900 border-b border-purple-700 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-white">
              🎬 MovieVerse
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => setShowAbout(true)}
                className="text-gray-200 hover:text-purple-400 transition font-medium"
              >
                About
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
                <svg className="w-6 h-6 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {open && (
          <div className="md:hidden px-4 pb-4">
            <button
              onClick={() => setShowAbout(true)}
              className="block w-full text-left py-2 text-gray-200 hover:text-purple-400"
            >
              About
            </button>
          </div>
        )}
      </nav>

      
      {showAbout && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-purple-700/50 rounded-2xl max-w-md w-full mx-4 shadow-2xl animate-in fade-in zoom-in duration-200">
            
            <div className="p-6 border-b border-gray-800 rounded-t-2xl">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
                About MovieVerse
              </h2>
            </div>
            
            
            <div className="p-6">
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                MovieVerse is a fast movie search app built with React, Tailwind CSS, and OMDB API. 
                Search millions of movies & TV shows instantly!
              </p>
              
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Smart search with filters</li>
                <li>• Popular movies showcase</li>
                <li>• Responsive design</li>
                <li>• Smooth animations</li>
              </ul>
              
              <p className="text-sm text-gray-400 italic">
                Built for movie lovers ✨
              </p>
            </div>
            
           
            <div className="p-6 pt-0 flex justify-end">
              <button
                onClick={() => setShowAbout(false)}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-purple-900 hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
