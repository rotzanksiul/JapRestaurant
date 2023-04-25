import React from 'react';

import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import AboutUs from './components/AboutUs/AboutUs'
import SpecialMenu from './components/Menu/SpecialMenu';
import Chef from './components/Chef/Chef';
import Customers from './components/Customers/Customers';
import Gallery from './components/Gallery/Gallery';
import Findus from './components/Findus/FindUs';


import './App.css';
import Footer from './components/Footer/Footer';







const App = () => { 
  return ( 
    <div className="app">
      <Navbar></Navbar>
      <Header></Header>
      <AboutUs></AboutUs>
      <SpecialMenu></SpecialMenu>
      <Chef></Chef>
      <Customers></Customers>
      <Gallery></Gallery>
      <Findus></Findus>
      <Footer></Footer>
    </div>
   );
}
 
export default App;

