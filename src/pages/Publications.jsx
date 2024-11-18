import React from "react";
import Layout from "../routes/Layout";
import projectsdata from '../components/projects.json';
import Project from '../components/Project';
import Footer from "../components/Footer";

function Publications() {
  return (
    <div className="Publications">
      <div className='main'>
        <Layout />
      <h1>Publications</h1>
      <p>Here are my publications</p>
      <Project projects = {projectsdata}/>
</div>
      <Footer />
    </div>
  );
}

export default Publications