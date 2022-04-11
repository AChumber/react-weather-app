import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/home';
import { WeatherPage } from './components/weather';
import { store } from './redux/Store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import NotFound from './components/notFound/NotFound';

function App() {
  return (
    <HashRouter>
      <Provider store={ store }>
        <div className="App">
          <Routes>
              <Route path='/'>
                <Route index element={ <HomePage /> } />
                <Route path='weather' element={ <WeatherPage /> } />
              </Route>
              <Route path='*' element={ <NotFound /> } />
          </Routes>
          {/* For react-toastify to render a toast */}
          <ToastContainer />
        </div>
      </Provider>
    </HashRouter>
  )
}

export default App;
