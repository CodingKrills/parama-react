import React, { Component } from 'react';
import CustomerCare from './CustomerCare';
import Logo from './Logo';
import Search from './Search';

export default class NavbarUpper extends Component {
    render() {
        return (
            <>
                <div className="container" style={{"padding":"0.7rem"}} >
                    <ul className="row">
                        <li className="col-lg-4 col-6 order-0">
                            <Logo />
                        </li>
                        <li className="col-lg-3 col-6 order-lg-2 d-flex py-3">
                            <CustomerCare />
                        </li>
                        <li className="col-lg-5 col-12 order-lg-1">
                            <Search />
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}
