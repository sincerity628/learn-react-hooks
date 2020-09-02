import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => window.removeEventListener('resize');
  }, []);

  return (
    <div className="App">
      {windowWidth}
    </div>
  );
}

export default App;
