import React from 'react';

const Navigation = ({ currentPage, onNavigate }) => {
  return (
    <div 
      className="w-full py-4"
      style={{
        backgroundImage: 'url("/entirehistory_logo.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="w-full h-full bg-black bg-opacity-30">
        <div className="max-w-6xl mx-auto px-8">
          <nav className="flex justify-center space-x-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`font-medium transition-colors duration-200 ${
                currentPage === 'home' 
                  ? 'text-white underline' 
                  : 'text-white hover:text-gray-300'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('make-me-do-anything')}
              className={`font-medium transition-colors duration-200 ${
                currentPage === 'make-me-do-anything' 
                  ? 'text-white underline' 
                  : 'text-white hover:text-gray-300'
              }`}
            >
              Make Me Do Anything
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className={`font-medium transition-colors duration-200 ${
                currentPage === 'about' 
                  ? 'text-white underline' 
                  : 'text-white hover:text-gray-300'
              }`}
            >
              About
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;