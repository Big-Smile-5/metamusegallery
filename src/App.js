import React, { useEffect } from 'react';
import Sidebar from './layouts/Sidebar';
import Body from './components/Body';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './App.css';
import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 150,
      duration: 1000
    });
  }, []);

  return (
    <div className='flex flex-wrap w-full'>
      <div className='fixed w-24 hidden lg:block z-50'>
        <Sidebar />
      </div>
      <div className='w-full flex-1 lg:pl-24'>
        <Body />
      </div>
    </div>
  );
}

export default App;
