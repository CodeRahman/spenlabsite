import {Link} from 'react-router-dom';
import React from "react";
import Layout from "../routes/Layout";
import Footer from '../components/Footer';

function People() {
    return (
        <div>
            <div className='main'>
            <Layout />
        <h1> Welcome to the People</h1>
        </div>
        <Footer />
        </div>
    );
    }

export default People