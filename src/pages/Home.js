import React, { Component } from 'react'

import Footer from '../components/Footer';
import HeroCarosel from '../components/HeroCarosel';

export default class Home extends Component {
    render() {
        return (
            <>

                <HeroCarosel />

                <h1>Home</h1>

                <Footer />

            </>
        )
    }
}
