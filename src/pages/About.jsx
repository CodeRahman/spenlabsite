import { Link } from 'react-router-dom';
import React from "react";
import Layout from "../routes/Layout";
import Footer from '../components/Footer';

function About() {
  return (
    <div className='About'>
    <div className='main'>
    <Layout />
      <h1>About Content</h1>
    </div>
    <Footer />
      
    </div>
  );
}

export default About