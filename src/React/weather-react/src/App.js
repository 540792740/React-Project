import React from 'react';
import './App.css';
const api = {
  key : '586293560884d01267e4ed6b9001f137',
  base: 'https://api.openweathermap/org/data/2.5/'
}

function App() {
    const dataBuilder = (d)=>{
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`
    }
  return (
      <div className="app warm">
        <main>
            <div className='search-box'>
              <input type="text"
                     className='search-bar'
                     placeholder='Search...'
              />
            </div>

            <div className='location-box'>
                <div className='location'>New York, US</div>
                <div className='date'>{dataBuilder(new Date())}</div>
            </div>

            <div className='weather-box'>
                <div className='temp'> 15&deg;C</div>
                <div className='weather'>Sunny</div>
            </div>
        </main>
      </div>
  );
}

export default App;
