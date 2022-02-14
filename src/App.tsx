import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/home';
import { WeatherPage } from './components/weather';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path='/'>
              <Route index element={ <HomePage /> } />
              <Route path='weather' element={ <WeatherPage /> } />
            </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
