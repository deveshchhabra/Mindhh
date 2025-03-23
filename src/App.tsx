import React, { useState, useEffect } from 'react';
import Aside from './Aside';
import Header from './Header';
import Body from './Body';

const App: React.FC = () => {
  // State to manage dark and light mode
  interface AsideProps {

    darkMode: boolean;
  
  }
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Toggle function to switch between dark and light modes
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Use effect to add/remove dark mode class on the body element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-800' : 'bg-white'} transition-colors duration-300`}>
      <Header />
      <div className="flex">
      
         <Aside darkMode={darkMode}/>
        



      </div>
<Body />
      {/* Toggle button for dark/light mode */}
      <button 
        onClick={toggleDarkMode} 
        className="fixed bottom-4 right-4 bg-gray-700 text-white p-3 rounded-full shadow-md hover:bg-gray-600 transition">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

export default App;