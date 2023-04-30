import React from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <section className="">
      <Navbar />
      <Outlet/>
    </section>
  );
}

export default App;
