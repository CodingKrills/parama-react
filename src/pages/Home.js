import React, { Component } from 'react'

import Footer from '../components/Footer';
import HeroCarosel from '../components/HeroCarosel';
import AxiosComp from '../components/AxiosComp';

export default class Home extends Component {
    render() {
        return (
            <>

                <HeroCarosel />

                <h1>Home</h1>

                <Footer />

                <AxiosComp />


            </>
        )
    }
}
