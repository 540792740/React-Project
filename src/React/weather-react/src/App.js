import React from 'react';
import './App.css';
const api = {
  key : '586293560884d01267e4ed6b9001f137',
  base: 'https://api.openweathermap/org/data/2.5/'
}

function App() {
  return (
      <div className="app warm">
        <main>
            <div className='search-box'>
              <input type="text"
                     className='search-bar'
                     placeholder='Search...'
              />
            </div>
        </main>
      </div>
  );
}

export default App;
