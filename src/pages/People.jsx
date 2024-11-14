import {Link} from 'react-router-dom';
import React from "react";
import Layout from "../routes/Layout";
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import profilesdata from '../components/profiles.json';

function People() {
    return (
        <div className='people'>
            <div className='main'>
            <Layout />
            <h1>People</h1>
            <Profile profiles = {profilesdata}/>
            </div>
            <Footer />
        </div>
    );
    }

export default People