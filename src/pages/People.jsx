import {Link} from 'react-router-dom';
import React from "react";
import Layout from "../routes/Layout";
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import profilesdata from '../components/profiles.json';
import './Top.css';


function People() {
    return (
        <div className='people'>
            <div className='main'>
            <Layout />
            <div className="Top">
            <h1 className="topname">Southern Miss SPEN Research Lab</h1>
            <h2>Lab Motto</h2>
            <h1> Welcome to the SPEN Lab at the University of Southern Mississippi </h1>
            </div>
            <h1>People</h1>
            <Profile profiles = {profilesdata}/>
            </div>
            <Footer />
        </div>
    );
    }

export default People