import './App.css';
import React from 'react';
import Layout from './routes/Layout';
import { Outlet, Link } from "react-router-dom";
import projectsdata from './components/projects.json';
import Project from './components/Project';
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
        <Project projects = {projectsdata}/>
        <News />
      </div>
      <Footer />
    </div>
  );
}
export default App;