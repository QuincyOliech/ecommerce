import React from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import { Outlet } from 'react-router-dom';
import Booking from './components/Booking';

function App() {
  return (
    <section className="">
      <Navbar />
      <Outlet/>
      <Booking />
    </section>
  );
}

export default App;
