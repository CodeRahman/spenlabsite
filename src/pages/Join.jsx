import React from "react";
import Layout from "../routes/Layout";
import Footer from "../components/Footer";
import './Join.css';

function Join() {
  return (
    <div className="Join">
        <div className='main'>
        <Layout />
      <h1>Join</h1>
      <div className="join-message">
        <p>We are looking for highly motivated and passionate graduate and undergraduate students looking to engage in research in 
          Security and Privacy of Emerging Networks. Recommended majors include, Computer Science, Information Technology, Cybersecurity, 
          Software Engineering and other related majors
        </p>
      </div>
      
      </div>
      <Footer />
    </div>
  );
}

export default Join;