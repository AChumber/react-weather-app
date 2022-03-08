import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/home';
import { WeatherPage } from './components/weather';
import { store } from './redux/Store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <Provider store={ store }>
        <div className="App">
          <Routes>
              <Route path='/'>
                <Route index element={ <HomePage /> } />
                <Route path='weather' element={ <WeatherPage /> } />
              </Route>

          </Routes>
          {/* For react-toastify to render a toast */}
          <ToastContainer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
