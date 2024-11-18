import { Link } from 'react-router-dom';
import React from "react";
import Layout from "../routes/Layout";
import Footer from '../components/Footer';
import './About.css';

function About() {
  return (
    <div className='About'>
    <div className='main'>
    <Layout />
      <div className="about-content">
        <h1>Ahmed Sherif</h1>
        <p>Professor</p>
        <p>Department of Computer Science</p>
        <p>University of Southern Mississippi</p>

        <h2>Education</h2>

        <p>Ph.D. in Computer Science, University of Southern Mississippi, 2009</p>
        <p>M.S. in Computer Science, University of Southern Mississippi, 2005</p>
        <p>B.S. in Computer Science, University of Southern Mississippi, 2003</p>

        <h2>Address</h2>

        <p>Department of Computer Science</p>
        <p>University of Southern Mississippi</p>
        <p>118 College Drive #5106</p>
        <p>Hattiesburg, MS 39406</p>
        <p>Phone: 601-266-4908</p>
        <p>Email:</p>

      </div>
    </div>
    <Footer />
      
    </div>
  );
}

export default About