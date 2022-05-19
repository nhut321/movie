import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import DetailCast from './Pages/DetailCast'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='detail/:type/:id/' element={<Detail />} />
          <Route path='detail/:type/:id/cast' element={<DetailCast />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
