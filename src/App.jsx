import './App.css';
import React from 'react';
import Layout from './routes/Layout';
import { Outlet, Link } from "react-router-dom";
import News from './components/News';
import Footer from './components/Footer';
import HomeTop from './components/HomeTop';

const App = () => {

  return ( 

    <div className="App">
      <div className='main'>
        <Layout />
        <HomeTop />
        <h2 className='projectname'>Projects </h2>
        
        <News />
      </div>
      <Footer />
    </div>
  );
}
export default App;