import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from './Pages/Home'
import Detail from './Pages/Detail'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
