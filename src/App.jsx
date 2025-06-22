import React, { useState } from 'react';
import InstagramProfile from './components/InstagramProfile';
import MakeMeDoAnything from './components/MakeMeDoAnything';
import About from './components/About'; 

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <InstagramProfile onNavigate={handleNavigate} />;
      case 'make-me-do-anything':
        return <MakeMeDoAnything onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;;
      default:
        return <InstagramProfile onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderCurrentPage()}
    </div>
  );
}

export default App;